const express = require('express');
const os = require('os');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Configuração do pool de conexão com PostgreSQL
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});
pool.query('SELECT NOW()', (err, result) => {
    if (err) {
        console.log("Erro no banco:", err);
    } else {
        console.log("Banco conectado:", result.rows);
    }
});

// Middleware para parsear as mensagens em JSON
app.use(express.json());

// Middleware CORS (Verificação de origem autorizada)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Rota 1: Verificar Estoque e Aplicar Regra de Negócio (GET)
app.get('/api/estoque', async (req, res) => {
    try {
        const query = 'SELECT * FROM public.produto';
        const result = await pool.query(query);
        
        let reposicao = {};
        
        //para cada produto (na tabela produto, faça ...)
        result.rows.forEach(produto => {
            if (produto.quantidade_produto < produto.quantidade_minima_produto) {
                const quantidadeParaPedir = produto.quantidade_maxima_produto - produto.quantidade_produto;
                
                let nomeFormatado = produto.nome_produto.toLowerCase();
                // if(nomeFormatado === "pãos") nomeFormatado = "paes";
                
                reposicao[nomeFormatado] = quantidadeParaPedir;
            }
        });
        
        res.json({
            sucesso: true,
            dados_reposicao: reposicao
        });
        
    } catch (error) {
        console.error('Erro ao consultar estoque:', error);
        res.status(500).json({ sucesso: false, mensagem: 'Erro interno da Servidorina' });
    }
});

// Rota 2: Enviar e Receber Mensagens (POST)
app.post('/api/mensagens', async (req, res) => {
    try {
        const mensagemRecebida = req.body.mensagem;
        
        if (!mensagemRecebida) {
            return res.status(400).json({ status: "erro", mensagem: "Bilhete vazio!" });
        }

        console.log(`Bilhete recebido da Clientina: ${mensagemRecebida}`);
        
        // Retornando um Status Code de Sucesso
       let resposta = "";

if (mensagemRecebida.toLowerCase() === "vovó") {
    resposta = "Oi, em que posso ajudar?";
} 

else if (mensagemRecebida.toLowerCase() === "chegou") {
    resposta = "A Chapeuzinho chegou aqui com o bilhete!";
} 

else if (mensagemRecebida.toLowerCase() === "situacao") {
    resposta = "Vou consultar o estoque e ver o que precisa repor.";
} 

else if (mensagemRecebida.toLowerCase() === "minimo") {

    const consulta = await pool.query(
        "SELECT * FROM public.produto"
    );

    console.log(consulta.rows);

    resposta = "Produtos:\n";

    consulta.rows.forEach(produto => {
        resposta += produto.nome_produto + ": " 
        + produto.quantidade_minima_produto + " unidades\n";
    });

}

else {
    resposta = "Mensagem não entendida.";
}


res.status(200).json({ 
    status: "sucesso", 
    mensagem: resposta
});
        
    } catch (error) {
        console.error('Erro ao processar mensagem:', error);
        res.status(500).json({ status: "erro", mensagem: 'Erro interno da Servidorina' });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidorina atenta na porta ${port}`);
});