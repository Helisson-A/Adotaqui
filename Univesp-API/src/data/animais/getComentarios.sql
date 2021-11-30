SELECT 
    IdComentario, 
    IdAnimal, 
    Resposta, 
    Comentario
FROM T_Comentarios where IdAnimal = @IdAnimal