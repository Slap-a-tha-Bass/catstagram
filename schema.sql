CREATE SCHEMA IF EXISTS catstagram;

USE catstagram;

CREATE TABLE users (
    id VARCHAR(60) NOT NULL,
    first_name VARCHAR(60) NULL,
    last_name VARCHAR(60) NULL,
    username VARCHAR(60) NOT NULL UNIQUE,
    email VARCHAR(60) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    isVisible TINYINT DEFAULT 1,
    _created TIMESTAMP DEFAULT NOW(),
    _updated TIMESTAMP ON UPDATE NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE posts (
    id VARCHAR(60) NOT NULL,
    user_id VARCHAR(60) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    caption VARCHAR(144) NOT NULL,
    _created TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
