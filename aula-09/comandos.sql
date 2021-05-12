CREATE TABLE usuarios (
	id INTEGER,
    email VARCHAR(50),
    nome VARCHAR(80),
    senha VARCHAR(30)    
);

CREATE TABLE produtos (
	id INTEGER,
    titulo VARCHAR(50),
    descricao VARCHAR(80),
    preco DECIMAL    
);

select * from usuarios;
select * from produtos;

INSERT INTO usuarios (id, email, nome, senha) VALUES (3, 'nena@gmail.com', 'Nena', 'mudar123');

UPDATE usuarios SET email = 'danielcdesouza@gmail.com' WHERE id = 1;
alter table usuarios drop column telefone;

delete from usuarios where id = 1;