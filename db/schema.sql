CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean,
date DATETIME,
PRIMARY KEY (id)
);

USE ewdx9c4tagr0c8b6;

CREATE TABLE burgers(
id INT  AUTO_INCREMENT NOT NULL,
burger_name varchar(255) NOT NULL,
devoured boolean,
date DATETIME,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);