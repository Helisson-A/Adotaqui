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
ORDER BY IdAnimal
OFFSET ((@pageNumber - 1) * @rowsPage) ROWS
FETCH NEXT @rowsPage ROWS ONLY