select 
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
from T_Animais 
where IdDoador = @IdDoador