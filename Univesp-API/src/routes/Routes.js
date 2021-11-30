'use script';

const express = require ('express');
const login = require('../middleware/login');
const router = express.Router();

const uploadimg = require('../middleware/uploadFoto');
const loginControll = require ('../controllers/auth/loginController')
const animaisControll = require ('../controllers/animais/animaisController')
const ProfileControll = require ('../controllers/profile/profileController')

/*ROTA DE LOGIN*/
router.post('/login', loginControll.postLogin)
router.post('/cadastroUsuario', loginControll.cadastroUsuario)

/* ROTA DE CADASTRO DE ANIMAIS */
router.post('/cadastroAnimais', login.required, uploadimg.uploadImg.single('file'), animaisControll.cadastroAnimais)
router.get('/listAnimais', animaisControll.getAnimais) 
router.get('/petProfile/:IdAnimal', animaisControll.getAnimal)
router.post('/postComentario', login.required, animaisControll.postComentario)
router.get('/getComentarios/:IdAnimal', animaisControll.getComentarios)

//  Rotas do usuario
router.get('/getUser/:IdUsuario', ProfileControll.getProfile)

router.post('/upload', uploadimg.uploadImg.single('file'), animaisControll.uploadImage);


module.exports = {
    routes: router
}