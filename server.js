// Importar os módulos necessários
const express = require('express');
const mysql = require('mysql');

// Configurar o app Express
const app = express();
app.use(express.json()); // Para processar o JSON enviado pelo cliente

// Configurar a conexão com o banco de dados
const db = mysql.createConnection({
  host: 'db4free.net', // endereço do db4free
  user: 'alertavisao', // usuário
  password: '12345678', // senha
  database: 'alertavisao' // nome do banco 
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados bem-sucedida!');
});

// Adicionando a rota raiz
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!'); // Mensagem para confirmar que o servidor está ativo
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Endpoint para registrar um acompanhante
app.post('/acompanhante', (req, res) => {
  const { nome, sobrenome, telefone, email, usuario, senha } = req.body;

  // Query SQL para inserir os dados na tabela
  const query = 'INSERT INTO acompanhante (nome, sobrenome, telefone, email, usuario, senha) VALUES (?, ?, ?, ?, ?, ?)';

  // Executando a query
  db.query(query, [nome, sobrenome, telefone, email, usuario, senha], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).send('Erro ao inserir dados');
    } else {
      res.status(201).send('Acompanhante registrado com sucesso!');
    }
  });
});
