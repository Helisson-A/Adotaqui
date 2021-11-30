INSERT INTO T_Usuario 
(
    Nome, 
    Celular,
    DataNasc, 
    EmailAcesso, 
    Senha, 
    Numero, 
    Bairro, 
    Cidade, 
    Complemento
)
VALUES
(
    @Nome, 
    @Celular,
    @DataNasc, 
    @EmailAcesso, 
    @Senha, 
    @Numero, 
    @Bairro, 
    @Cidade, 
    @Complemento
)

SELECT SCOPE_IDENTITY() AS IdUsuario
