### Exercício 1 - a) 
    Chave estrangeira é uma propriedade que permite que tabelas se relacionem entre si, e uma foreign key sempre se relaciona com uma primary key.

### Exercício 1 - b) 
```
CREATE TABLE Comentarios (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
        filmes_id VARCHAR(255),
    FOREIGN KEY (filmes_id) REFERENCES filmes(id)
);
```
```
INSERT INTO Comentarios VALUES(
"005", "The best movie ever!", 10, 005
);
```
INSERT INTO Comentarios VALUES(
"003", "Great movie!", 8, 003
);
```
SELECT * FROM filmes where id = 005;
```
### Exercício 1 - c) Error Code: 1452. Erro na foreign key (inexistente)!

### Exercício 1 - d)
```
ALTER TABLE filmes
DROP COLUMN avaliacao;
```
```
DESCRIBE filmes;
```

### Exercício 1 - e) 
```
DELETE FROM filmes
WHERE avaliacao = 10;
```
-- Error Code: 1054. Unknown column 'avaliacao' in where clause. (pois exclui a coluna avaliação no exercício anterior.
```
```
### Exercício 2
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
É uma tabela que cria o elenco dos filmes, referenciando as tabelas Actor e filmes.

### Exercício 2 - b)
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		003, 005
);
```

### Exercício 2 - c) Não é possível criar relação com um dado inexistente.
```
SELECT * FROM MovieCast;
```

### Exercício 2 - d) Error Code: 1451. Cannot delete or update a parent row. a foreign key constraint fails. 
```
DELETE FROM Actor WHERE id= 5;
```
```
SET SQL_SAFE_UPDATES = 0;
```
### Exercício 2 - a) 
O operador ON é uma condição para o JOIN. Passamos para ele quais dados devem ser comparados e juntados das tabelas.alter

### Exercício 2 - b)
```
SELECT filmes.name, filmes.id
FROM filmes
JOIN avaliacao ON filmes.id = avaliacao.filme_id;
```
Nesse caso me retorna um erro apontando que avaliacao não existe, pois eu exclui essa coluna em um exercício anterior.
```
SELECT * FROM Actor;
DESCRIBE Actor;
DESCRIBE filmes;
DESCRIBE Comentarios;
DESCRIBE MovieCast;
```