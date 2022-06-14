### Exercício 1 - a)Altera a tabela removendo a coluna "salary"

### Exercício 1 - b) Altera a tabela mudando a coluna "gender" para "sex"

### Exercício 1 - c) Altera a tabela mudando a coluna "gender" para "gender", o mesmo tipo, sendo uma string de até 255 caracteres

### Exercício 1 - d)
```
ALTER TABLE Actor Change gender gender VARCHAR(100);
```
### Exercício 2 - a)
```
UPDATE Actor SET name = "Moacyr Franco", birth_date = "1800-01-01" WHERE id = "01";
```

### Exercício 2 - b)
```
UPDATE Actor name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
```

### Exercício 2 - c)
```
UPDATE Actor SET name = "Moacyr Franco", birth_date = "1800-01-01", salary = 666, gender = "male" WHERE id = "005"; 
```

### Exercício 2 - d) Não funciona pois não o parâmetro não é correspondido
```
UPDATE Actor SET id = "18273612" WHERE name = "Awawawawawaw";
```

### Exercício 3 - a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

### Exercício 3 - b)
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4 - a)
```
SELECT MAX(salary) FROM Actor;
```

### Exercício 4 - b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

### Exercício 4 - c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
### Exercício 4 - d)
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5 - a) Separou os gêneros(?)
```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

### Exercício 5 - b)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```

### Exercício 5 - c)
```
SELECT * FROM Actor ORDER BY salary;
```

### Exercício 5 - d)
```
SELECT name FROM Actor ORDER BY salary DESC LIMIT 3;
```

### Exercício 5 - e)
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```