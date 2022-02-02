-- Table: catstagram.users

DROP TABLE IF EXISTS catstagram.users;

CREATE TABLE IF NOT EXISTS catstagram.users
(
    id VARCHAR(60) NOT NULL,
    first_name VARCHAR(60),
    last_name VARCHAR(60),
    username VARCHAR(60) NOT NULL UNIQUE,
    email VARCHAR(60) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    "isVisible" SMALLINT DEFAULT 1,
    _created TIMESTAMP DEFAULT NOW(),
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

ALTER TABLE IF EXISTS catstagram.users
    OWNER to postgres_admin;

CREATE TABLE IF EXISTS catstagram.posts (
    id VARCHAR(60) NOT NULL,
    user_id VARCHAR(60) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    caption VARCHAR(144) NOT NULL,
    _created TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
