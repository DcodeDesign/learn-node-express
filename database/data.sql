CREATE DATABASE IF NOT EXISTS cvOnline;

USE cvOnline;

CREATE TABLE IF NOT EXISTS users
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    email    varchar(50) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    prenom   varchar(50) NOT NULL,
    nom      varchar(50) NOT NULL,
    rue      varchar(50) NOT NULL,
    region   varchar(50) NOT NULL,
    tel      varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS categories
(
    id      INT AUTO_INCREMENT PRIMARY KEY,
    fk_user INT         NOT NULL,
    fk_cv   INT         NOT NULL,
    titre   varchar(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS competences
(
    id            INT AUTO_INCREMENT PRIMARY KEY,
    fk_user       INT NOT NULL,
    fk_cv         INT NOT NULL,
    titre         varchar(50),
    niveau        INT NOT NULL,
    fk_categories INT NOT NULL
);

CREATE TABLE IF NOT EXISTS experiences
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    fk_user  INT          NOT NULL,
    fk_cv    INT          NOT NULL,
    poste    varchar(255) NOT NULL,
    societe  varchar(255) NOT NULL,
    ville    varchar(255) NOT NULL,
    date_fin datetime,
    date_dbt datetime     NOT NULL
);

CREATE TABLE IF NOT EXISTS etudes
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    fk_user     INT          NOT NULL,
    fk_cv       INT          NOT NULL,
    formation   varchar(255) NOT NULL,
    institution varchar(255) NOT NULL,
    ville       varchar(255) NOT NULL,
    date_fin    datetime,
    date_dbt    datetime     NOT NULL
);

CREATE TABLE IF NOT EXISTS cv
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    fk_user  INT          NOT NULL,
    titre    varchar(255) NOT NULL,
    template varchar(255)
);

ALTER TABLE categories
    ADD CONSTRAINT FK_categories_users FOREIGN KEY (fk_user)
        REFERENCES users (id);

ALTER TABLE competences
    ADD CONSTRAINT FK_competences_categories FOREIGN KEY (fk_categories)
        REFERENCES categories (id);

ALTER TABLE competences
    ADD CONSTRAINT FK_competences_users FOREIGN KEY (fk_user)
        REFERENCES users (id);

ALTER TABLE experiences
    ADD CONSTRAINT FK_experiences_users FOREIGN KEY (fk_user)
        REFERENCES users (id);

ALTER TABLE etudes
    ADD CONSTRAINT FK_etudes_users FOREIGN KEY (fk_user)
        REFERENCES users (id);

ALTER TABLE cv
    ADD CONSTRAINT FK_cv_users FOREIGN KEY (fk_user)
        REFERENCES users (id);

# #############################

DROP DATABASE cvOnline;

SELECT competences.titre, competences.niveau, c.titre
from competences
         INNER JOIN categories c on competences.fk_categories = c.id;

SELECT * FROM categories WHERE fk_user = 1;
SELECT * FROM competences WHERE fk_user = 1;
SELECT * FROM experiences WHERE fk_user = 1;
SELECT * FROM etudes WHERE fk_user = 1;

SELECT * FROM users WHERE email = 'tes2@test';

DELETE FROM cv WHERE id = 27;

SELECT * FROM users WHERE id = 1;

SELECT * FROM CV WHERE id = 51 AND fk_user = 1