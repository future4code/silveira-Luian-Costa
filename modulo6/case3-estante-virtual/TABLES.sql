CREATE TABLE competicao(
    id VARCHAR(255) PRIMARY KEY,
    competicao VARCHAR(255) NOT NULL UNIQUE,
    status VARCHAR(255)
);

CREATE TABLE resultados(
    competicao_id VARCHAR(255) NOT NULL,
    atleta VARCHAR(255) NOT NULL,
    value FLOAT NOT NULL,
    unidade VARCHAR(255),
    FOREIGN KEY (competicao_id) REFERENCES competicao(id)
);