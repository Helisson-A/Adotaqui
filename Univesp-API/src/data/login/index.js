'use strict';
const utils = require('../utils');
const config = require('../../config')
const sql = require('mssql');

const getByLogin = async (data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('login');
        const loginUserAcesso = await pool.request()
            .input('EmailAcesso', sql.VarChar, data.EmailAcesso)
            .input('Senha', sql.VarChar, data.Senha)
            .query(sqlQueries.loginUserAcesso);
        return loginUserAcesso.recordset;
    }catch (error){
        return error.message;
    }
}

const cadastroUsuario = async (data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('login');
        const cadastraUsuario = await pool.request()
            .input('Nome', data.Nome)
            .input('DataNasc', sql.Date, data.DataNasc)
            .input('Celular', data.Celular)
            .input('EmailAcesso', data.EmailAcesso)
            .input('Senha',  data.Senha)
            .input('Numero',  data.Numero)
            .input('Bairro',  data.Bairro)
            .input('Cidade',  data.Cidade)
            .input('Complemento', data.Complemento)
            .query(sqlQueries.cadastraUsuario);
        return cadastraUsuario.recordset;
    }catch (error){
        return error.message;
    }
}

const cadastroUserInstituicao = async (IdUsuario, data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('login');
        const cadastraUsuario = await pool.request()
            .input('IdUsuario', IdUsuario)
            .input('NomeInstit', data.NomeInstit)
            .input('SiteInstit', data.SiteInstit)
            .input('SobreInstit', data.SobreInstit)
            .query(sqlQueries.cadastraUserInstituicao);
        return cadastraUsuario.recordset;
    }catch (error){
        return error.message;
    }
}

module.exports = {
    getByLogin,
    cadastroUsuario,
    cadastroUserInstituicao
}