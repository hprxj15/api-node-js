const db = require('../dataBase/connection'); 

module.exports = {
    async listarLivros(request, response) {
        try {
            const sql = `
            SELECT
                livro_id, livro_titulo, livro_sinopse, livro_editora,
                 livro_isbn, livro_ano, livro_classidd, livro_foto 
            FROM livros;

        `;

        const [rows] = await db.query(sql);

        const nRegistros = rows.length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Livros', 
                nRegistros,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarLivros(request, response) {
        try {
            const {livro_titulo, livro_sinopse, livro_editora, livro_isbn, livro_ano, livro_classidd, livro_foto} = request.bory;
            
            // introdução SQL
            const sql = `
                INSERT INTO livros 
                    (livro_titulo, livro_sinopse, livro_editora, livro_isbn, livro_ano, livro_classidd, livro_foto)
                VALUES 
                    (?, ?, ?, ?, ?, ?, ?);
                `;
            //definição dos dados a serem colocados no array
            const values = [livro_titulo, livro_sinopse, livro_editora, livro_isbn, livro_ano, livro_classidd, livro_foto];

            // execução da instrução sql passando os parâmetros
            const [result] =  await db.query( sql, values);

            //identificaçaõ do ID do registro inserido
            const dados = {
                livro_titulo,
                livro_sinopse,
                livro_editora,
                livro_isbn,
                livro_ano,
                livro_classidd,
                livro_foto
            };
            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de livros', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarLivros(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de livros', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarLivros(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de livro', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  