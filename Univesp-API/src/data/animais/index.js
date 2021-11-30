'use strict';
const utils = require('../utils');
const config = require('../../config')
const sql = require('mssql');

const getAnimais = async (pageNumber, rowsPage) => {
    try{

        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('animais');
        const getAnimais = await pool.request()
            .input('pageNumber', sql.Int, pageNumber)
            .input('rowsPage', sql.Int, rowsPage)  
            .query(sqlQueries.getAnimais);
        return getAnimais.recordset;

    }catch (error){
        return error.message;
    }
}

const getAnimaisDoador = async (IdDoador) => {
    try{

        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('animais');
        const getAnimaisDoador = await pool.request()
            .input('IdDoador', sql.Int, IdDoador)
            .query(sqlQueries.getAnimaisDoador);
        return getAnimaisDoador.recordset;

    }catch (error){
        return error.message;
    }
}

const getAnimal = async (IdAnimal) => {
    try{

        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('animais');
        const getAnimal = await pool.request()
            .input('IdAnimal', IdAnimal)
            .query(sqlQueries.getAnimal);
        return getAnimal.recordset;

    }catch(error){  
        return error.message
    }
}

const cadastroAnimais = async (IdDoador, data, img) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('animais');
        const cadastraAnimais = await pool.request()
            .input('IdDoador', IdDoador)
            .input('NomeAnimal', data.NomeAnimal)
            .input('Sexo', data.Sexo)
            .input('Idade', data.Idade)
            .input('Porte',  data.Porte)
            .input('ImagemAnimal',  img)
            .input('IdEspecie',  data.IdEspecie)
            .input('BitCastrado',  data.BitCastrado)
            .input('BitVacinado', data.BitVacinado)
            .input('BitVermifugado', data.BitVermifugado)
            .input('DescricaoAnimal', data.DescricaoAnimal)
            .query(sqlQueries.cadastraAnimais);
        return cadastraAnimais.recordset;
    }catch (error){
        return error.message;
    }
}

const postComentario = async (IdAnimal, data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('animais');
        const postComentario = await pool.request()
            .input('IdAnimal', IdAnimal)
            .input('Comentario', data.Comentario)
            .query(sqlQueries.postComentario)
        
        return postComentario.recordset;

    }catch(error){
        return message.error
    }
}

const postResposta = async (IdAnimal, data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('animais');
        const postResposta = await pool.request()
            .input('IdAnimal', IdAnimal)
            .input('IdComentario', data.IdComentario)
            .input('Resposta' , data.Resposta)
            .query(sqlQueries.postResposta)
        
        return postResposta.recordset;

    }catch(error){
        return message.error
    }
}

const getComentarios = async (IdAnimal) => {
    try{

        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('animais');
        const getComentarios = await pool.request()
            .input('IdAnimal', IdAnimal)
            .query(sqlQueries.getComentarios)
        return getComentarios.recordset

    }catch (error){
        return message.error
    }
}

module.exports = {
    cadastroAnimais,
    getAnimais,
    getAnimal,
    postComentario,
    postResposta,
    getComentarios,
    getAnimaisDoador
}