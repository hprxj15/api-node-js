const db = require('../dataBase/connection'); 

module.exports = {
    async listarResenhas(request, response) {
        try {
            const {res_id, livro_id, resenha_titulo, resenha_texto, resenha_status, resenha_avaliacao} = request.bory;
            
            const sql = `
                INSERT INTO RESENHAS 
                    ( res_id, livro_id, resenha_titulo, resenha_texto, resenha_status, resenha_avaliacao)
                VALUES
                    (?, ?, ?, ?, ?, ?)
            `;
            //definição dos dados a serem colocados no array
            const values = [res_id, livro_id, resenha_titulo, resenha_texto, resenha_status, resenha_avaliacao];

            // execução da instrução sql passando os parâmetros
            const [result] =  await db.query( sql, values);

            //identificaçaõ do ID do registro inserido
            const dados = {
                res_id,
                livro_id,
                resenha_titulo,
                resenha_texto,
                resenha_status,
                resenha_avaliacao
            };

            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de resenhas', 
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
    async cadastrarResenhas(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de resenhas', 
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
    async editarResenhas(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de resenhas', 
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
    async apagarResenhas(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de resenhas', 
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