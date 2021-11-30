select
    A.IdAnimal,
    A.IdDoador,
    U.Nome,
    U.Celular,
    U.IdUsuario,
    U.FotoUser,
    I.NomeInstit,
    A.NomeAnimal,
    A.Sexo,
    A.Idade,
    A.Porte,
    A.ImagemAnimal,
    A.IdEspecie,
    A.BitCastrado,
    A.bitVacinado,
    A.bitVermifugado,
    A.DescricaoAnimal,
    A.bitDoado
from T_Animais A
INNER JOIN T_Doador D ON A.IdDoador = D.IdDoador
INNER JOIN T_Usuario U ON D.IdUsuario = U.IdUsuario
LEFT JOIN T_Instituicao I ON U.IdUsuario = I.IdUsuario
where IdAnimal = @IdAnimal