'use strict';
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const loginData = require('../../data/login');

//FAZ LOGIN

const postLogin = async (req,res, next) => {
    try{
        const data = req.body;

        const user = await loginData.getByLogin(data);
        if (user.length < 1){
            return res.status(401).send({message: 'Falha na autenticação'})
        }

        if (user.length >= 1){
            const token = jwt.sign({
                IdUsuario: user[0].IdUsuario,
                Nome: user[0].Nome,
                DataNasc: user[0].DataNasc,
                EmailAcesso: user[0].EmailAcesso,
                Numero: user[0].Numero,
                Bairro: user[0].Bairro,
                Cidade: user[0].Cidade,
                Complemento: user[0].Complemento,
                BitInstit: user[0].BitInstit,
            },
                process.env.JWT_KEY,
                {
                    expiresIn: "16h"
                });
            return res.status(200).send({
                message: 'Autenticado com sucesso',
                content:
                {
                    user:{
                        IdUsuario: user[0].IdUsuario,
                        Nome: user[0].Nome,
                        DataNasc: user[0].DataNasc,
                        EmailAcesso: user[0].EmailAcesso,
                        Numero: user[0].Numero,
                        Bairro: user[0].Bairro,
                        Cidade: user[0].Cidade,
                        Complemento: user[0].Complemento,
                        BitInstit: user[0].BitInstit, 
                    },
                    token: token
                },
            });
        }

        return res.status(400).send({message: 'Falha na autenticação'})

    }catch(error){
        return error.message
    }
}

const cadastroUsuario = async (req,res,next) => {
    try{
        const data = req.body

        if (!data.Nome||!data.DataNasc||!data.EmailAcesso||!data.Senha||!data.Cidade){
            return res.status(400).send({message: 'Preencha todos os paramêtros: Nome, DataNasc, EmailAcesso, Senha, Cidade'})
        }

        const IdUsuario = await loginData.cadastroUsuario(data);
        
        if (data.NomeInstit){
           await loginData.cadastroUserInstituicao(IdUsuario[0].IdUsuario, data);
        }
        
        return res.status(200).send({
            message: 'Cadastrado com sucesso',
        });

    }catch(error){
        return error.message
    }
}

module.exports = {
    postLogin,
    cadastroUsuario
}