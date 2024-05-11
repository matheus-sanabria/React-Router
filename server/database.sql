CREATE DATABASE studio_marlene;
-- CRIAR BANDO_DE_DADOS nome_banco_de_dados

CREATE TABLE professionals(
    professional_id SERIAL PRIMARY KEY,
    professional_photo BYTEA,
    professional_name VARCHAR(255),
    professional_specialty VARCHAR(255),
    professional_access BOOLEAN,
    -- professional_birthDay 
    -- professional_birthMonth
    professional_calend BOOLEAN,
    professional_order INTEGER,
    professional_obs TEXT
    );
-- CRIAR TABELA nome_tabeça(
    -- nome_colunaId TIPO_DADO_CHAVE_PRIMARIA,
    -- nome_colunaDescrição TIPO_DADO_CARACTERES(MAX255));

INSERT INTO profissionais (
	professional_id,
    professional_photo,
    professional_name,
    professional_specialty,
    professional_access,
    -- professional_birthDay 
    -- professional_birthMonth
    professional_calend,
    professional_order,
    professional_obs
) VALUES(
    $1) RETURNING *;
-- INSERIR DENTRO DE nome_tabela (nome_coluna) VALORES($1-PRIMEIRO) RETORNAR TUDO


UPDATE todo SET description = $1 WHERE todo_id = $2;
-- ATUALIZAR nome_tabela DEFINIR nome_coluna = calor1 QUANDO nome_coluna = valor2

DELETE FROM todo WHERE todo_id = $1;
-- DELETE de nome_tabla QUANDO nome_coluna = valor 1

DELETE FROM clients WHERE client_id = $1;

UPDATE clients SET (
    client_photo,
    client_name,
    client_phone,
    client_email,
    client_birthDay,
    client_birthMonth,
    client_obs
    ) = (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    )
WHERE client_id = S8 ;
