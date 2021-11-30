'use strict';
const { error } = require('console');
const crypto = require('crypto');
const { response } = require('express');
const jwt = require('jsonwebtoken');
const animaisData = require('../../data/animais');
const fs = require("fs");


const getAnimais = async (req, res, next) => {
    try{
        const pageNumber = req.query.pageNumber || 1
        const rowsPage = req.query.rowsPage || 9
        const animais = await animaisData.getAnimais(pageNumber, rowsPage)

        if (animais.length < 1 || animais.length === 0){
            return res.status(400).send( { message: 'Fim da página' } )
        }

        return res.status(200).send( {
            total: animais.length,
            data: animais.map(({
                IdAnimal,
                IdDoador,
                NomeAnimal,
                Sexo,
                Idade,
                Porte,
                ImagemAnimal,
                IdEspecie,
                BitCastrado,
                bitVacinado,
                bitVermifugado,
                DescricaoAnimal,
                bitDoado
            }) => { 
                return { 
                    IdAnimal,
                    IdDoador,
                    NomeAnimal,
                    Sexo,
                    Idade,
                    Porte,
                    ImagemAnimal,
                    IdEspecie,
                    BitCastrado,
                    bitVacinado,
                    bitVermifugado,
                    DescricaoAnimal,
                    bitDoado
                }
            })
        });
    }catch (error){
        res.status(500).send( error.message )
    }
}

const postComentario = async (req, res, next) => {

    try{

        // valores do requisicao
        const data = req.body
        // valor do objeto IdAnimal
        const IdAnimal = data.IdAnimal

        // Recebendo do bearer
        const token = req.headers.authorization.split(' ')[1];
        //Decodificando o Token para capturar o ID do usuario
        const decode = jwt.verify(token, process.env.JWT_KEY);
        // Armazenando o ID do usuario
        const IdDoador = data.IdDoador

        if (!data.Resposta){
            if (!IdAnimal || !data.Comentario){
                return res.status(400).send('Preencha os dados corretamente')
            }
        }

        if (data.IdComentario === undefined || data.IdComentario === null){
            await animaisData.postComentario(IdAnimal, data) 
            return res.status(200).send({
                message: 'Cadastrado com sucesso',
            });
        }
        else{
            const animal = await animaisData.getAnimal(IdAnimal)
            if(animal[0].IdDoador === IdDoador){
                await animaisData.postResposta(IdAnimal, data)
                return res.status(200).send({
                    message: 'Cadastrado com sucesso',
                });
            }
            return res.status(403).send({
                message: 'Não autorizado'
            })
        }
    }catch (error){
        return error.message
    }
}

const getComentarios = async (req, res, next) => {
    try {

        const IdAnimal = req.params.IdAnimal
        const getComentarios = await animaisData.getComentarios(IdAnimal)

        return res.status(200).send({
            data: getComentarios.map(({
                IdComentario, 
                IdAnimal, 
                Resposta, 
                Comentario
            })  =>{
                return {
                    IdComentario, 
                    IdAnimal, 
                    Resposta, 
                    Comentario
                }
            })
        })

    }catch (error){
        return error.message
    }
}

const getAnimal = async (req, res, next ) => {
    try{
        const idAnimal = req.params.IdAnimal;

        const getAnimal = await animaisData.getAnimal(idAnimal)

        return res.status(200).send({ 
            data: {
                Animal: {
                    IdAnimal: getAnimal[0].IdAnimal,
                    IdDoador: getAnimal[0].IdDoador,
                    nomeAnimal: getAnimal[0].NomeAnimal,
                    Sexo: getAnimal[0].Sexo,
                    idade: getAnimal[0].Idade,
                    Porte: getAnimal[0].Porte,
                    bitCastrado: getAnimal[0].bitCastrado,
                    bitVacinado: getAnimal[0].bitVacinado,
                    bitVermifugado: getAnimal[0].bitVermifugado,
                    DescricaoAnimal: getAnimal[0].DescricaoAnimal,
                    ImagemAnimal: getAnimal[0].ImagemAnimal
                },
                Usuario: {
                    Nome: getAnimal[0].Nome,
                    NomeInstit: getAnimal[0].NomeInstit,
                    IdUsuario: getAnimal[0].IdUsuario,
                    Celular: getAnimal[0].Celular,
                    FotoUser: getAnimal[0].FotoUser
                }
            }, 
        })
    }catch (error){
        return error.message
    }
}

//CADASTRO ANIMAIS
const cadastroAnimais = async (req,res,next) => {
    try{
        // recebendo parametros que o front manda
        const data = req.body
        const img = req.file.path;
        // Recebendo do bearer
        const token = req.headers.authorization.split(' ')[1];
        //Decodificando o Token para capturar o ID do usuario
        const decode = jwt.verify(token, process.env.JWT_KEY);
        // Armazenando o ID do usuario
        const IdDoador = decode.IdUsuario

       // console.log(req.body)
       const remotePath = req.file.path

        if (!data.NomeAnimal||!data.Sexo||!data.Porte||!data.IdEspecie){
            fs.unlink(remotePath, (err) => {
                if (err) {
                    return res.status(400).send({message: 'Falha ao tentar deletar o post do arquivo local: ' + err})
                } else {
                    return res.status(400).send({message: 'Post deletado com sucesso no arquivo local' + err})
                }
            });
            return res.status(400).send({message: 'Preencha todos os paramêtros: NomeAnimal, Sexo, Porte, IdEspecie'})
        }
    
        if (img.ImagemAnimal){
            uploadImage(img.ImagemAnimal)
        }
        
        await animaisData.cadastroAnimais(IdDoador, data, img)
        
        return res.status(200).send({
            message: 'Cadastrado com sucesso',
        });

    }catch(error){
        return error.message
    }
}

const uploadImage = async (req, res, next) => {
    try {
        const file = req.file

        console.log(file)

        if (!file) {
            return res.status(400).send({ 
                message: 'Erro ao fazer upload da imagem'
            })
        } else {
            return res.status(200).send({
                message: 'Imagem enviada com sucesso',
                file: file
            });
        }

    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}



module.exports = {
    cadastroAnimais,
    getAnimais,
    getAnimal,
    postComentario,
    getComentarios,
    uploadImage
}