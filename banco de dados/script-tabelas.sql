create database DBV;

use DBV;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(120) not null,
    email varchar(45) not null,
    senha varchar (20) not null,
    tpUsuario char(3) not null,
    constraint ckTpUsu check (tpUsuario = 'adm' or tpUsuario = 'usu'),
    -- verificando se é dbv ou não
    desbravador char(3), 
    constraint ckDbv check (desbravador = 'sim' or desbravador = 'nao'),
    nomeClube varchar(20),
    classeAtual varchar(20)    
    );
    
    
create table publicacao(
	idPublicacao int auto_increment,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario),
    primary key (idPublicacao, fkUsuario),
    titulo varchar (45) not null,
    descricao varchar (250) not null,
    dtpub datetime default current_timestamp,
    dtalteracao datetime    
    );
    
create table  comentario(
	idComentario int auto_increment,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario),
    fkPublicacao int,
    foreign key (fkPublicacao) references publicacao(idPublicacao),
    fkUsuario_Publicacao int,
    foreign key (fkUsuario_Publicacao) references publicacao(fkUsuario),
    primary key (idComentario, fkUsuario,fkPublicacao, fkUsuario_Publicacao),
    descricao varchar(180) not null,
    dtcometario datetime default current_timestamp,
    dtalteracao datetime
    );