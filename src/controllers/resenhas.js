const db = require('../dataBase/connection'); 

module.exports = {
    async listarResenhas(request, response) {
        try {
            const {res_id, livro_id, titulo, texto, status, avaliacao} = request.body;
            
            const sql = `
                INSERT INTO RESENHAS 
                    ( res_id, livro_id, resenha_titulo, resenha_texto, resenha_status, resenha_avaliacao)
                VALUES
                    (?, ?, ?, ?, ?, ?)
            `;
            //definição dos dados a serem colocados no array
            const values = [res_id, livro_id, titulo, texto, status, avaliacao];

            // execução da instrução sql passando os parâmetros
            const [result] =  await db.query( sql, values);

            //identificaçaõ do ID do registro inserido
            const dados = {
                res_id:result.insertId,
                livro_id:result.insertId,
                titulo,
                texto,
                status,
                avaliacao
            };

            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de resenhas', 
                dados: dados
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
            //Parametros recebidos pelo corpo da requisição
            const {res_id, livro_id, titulo, texto, status, avaliacao} = request.body;
            //parametros recebidos pera URL via params ex: /usuario/1
            const {id} = request.params;
            //introduçaõ sql
            const sql = `
                UPDATE RESENHAS SET
                    (livro_id = ?, resenha_titulo = ?, resenha_texto = ?, resenha_status = ?, resenha_avaliacao = ?)
                WHERE
                    res_id = ?
            `;

            // preparo do array com dados que serão atualizados
            const values = [res_id, livro_id, titulo, texto, status, avaliacao];
            // execução e obtenção de confirmação da atualização realizada
            const [result] =  await db.query( sql, values);

            if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucesso:false,
                    mensagem: ` usuario ${id} não encontrado!`,
                    dados: null
                })
            }

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de resenhas', 
                dados: dados
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
                dados: dados
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