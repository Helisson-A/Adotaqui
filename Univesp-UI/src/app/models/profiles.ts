export interface ProfilePet {
    IdDoador: number,
    IdAnimal: number,
    nomeAnimal: string,
    idade: number,
    Sexo: string,
    Porte: string,
    bitVacinado: boolean,
    bitVermifugado: boolean,
    bitCastrado: boolean,
    DescricaoAnimal: string,
    ImagemAnimal: any,
    Whatsapp: string,
    comentarios: comentarios[]
}

export interface comentarios{
    IdComentario: number,
    Comentario: string,
    Resposta: string
}

export interface Profile{
    IdUsuario: number,
    Nome: string,
    DataNasc: Date,
    Celular: string,
    EmailAcesso: string,
    FotoUser: any,
    Senha: string,
    EndRua: string,
    Numero: string,
    Bairro: string,
    Cidade: string,
    Complemento: string,
    NomeInstit: string,
    SiteInstit: string,
    SobreInstit: string,
    groups: string;
}

export interface pets{
    NomeAnimal: string;
    Sexo: string;
    ImagemAnimal: string;
}