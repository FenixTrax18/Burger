
--create burgers_db
CREATE DATABASE burgers_db;
--switch or use the burgers_db
USE burgers_db;

--create a "burgers" table
CREATE TABLE burgers
(
    --id, auto increment int
	id int NOT NULL AUTO_INCREMENT,
    --burger_name, string
	burger_name varchar(100) NOT NULL,
    --devoured, boolean
    devoured BOOLEAN DEFAULT false,
    --set id as primary key
	PRIMARY KEY (id)
);
