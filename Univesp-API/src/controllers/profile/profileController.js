'use strict';
const { error } = require('console');
const { response } = require('express');
const profileData = require('../../data/profile');
const animaisData = require('../../data/animais');

const getProfile = async (req, res, next) => {
    try {

        const IdUsuario = req.params.IdUsuario

        const getProfile = await profileData.getPerfil(IdUsuario)

        const IdDoador = getProfile[0].IdDoador
        const getAnimaisDoador = await animaisData.getAnimaisDoador(IdDoador)


        return res.status(200).send({
            data: getProfile.map(({
                IdUsuario, 
                IdDoador,
                Nome, 
                Celular,
                FotoUser,
                NomeInstit,
                SiteInstit,
                SobreInstit
            })  =>{
                return {
                    IdUsuario, 
                    IdDoador,
                    Nome, 
                    Celular,
                    FotoUser,
                    NomeInstit,
                    SiteInstit,
                    SobreInstit,
                    Animais: getAnimaisDoador
                }
            })
        })

    }catch (error){
        return error.message
    }
}

module.exports = {
    getProfile
}