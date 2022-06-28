### Exercíci 1 - a) Sim, pois o código hexadecimal é formado por diversos caracteres incluindo números e letras, sendo necessário ser representado por uma string

### Exercíci 2 - a) Criamos uma função para inserir um novo usuário no banco de dados
```
CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```