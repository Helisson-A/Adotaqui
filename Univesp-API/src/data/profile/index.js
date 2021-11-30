'use strict';
const utils = require('../utils');
const config = require('../../config')
const sql = require('mssql');


const getPerfil = async (IdUsuario) => {
    try{

        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('profile');
        const getPerfil = await pool.request()
            .input('IdUsuario', IdUsuario)
            .query(sqlQueries.getProfile);
        return getPerfil.recordset;

    }catch(error){  
        return error.message
    }
}

module.exports = {
    getPerfil
}