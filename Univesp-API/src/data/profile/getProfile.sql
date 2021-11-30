select 
    U.IdUsuario,
    D.IdDoador,
    U.Nome,
    U.Celular,
    U.FotoUser,
	I.NomeInstit,
	I.SiteInstit,
	I.SobreInstit

from T_Usuario U
LEFT JOIN T_Instituicao I ON U.IdUsuario = I.IdUsuario
LEFT JOIN T_Doador D on U.IdUsuario = D.IdUsuario
where U.IdUsuario = @IdUsuario