-- Table: catstagram.users

CREATE TABLE IF NOT EXISTS catstagram.users
(
    id character varying(60) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(60) COLLATE pg_catalog."default",
    last_name character varying(60) COLLATE pg_catalog."default",
    username character varying(60) COLLATE pg_catalog."default" NOT NULL,
    email character varying(60) COLLATE pg_catalog."default" NOT NULL,
    password character varying(60) COLLATE pg_catalog."default" NOT NULL,
    "isVisible" smallint DEFAULT 1,
    _created timestamp without time zone DEFAULT now(),
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email),
    CONSTRAINT users_username_key UNIQUE (username)
)

CREATE TABLE IF NOT EXISTS catstagram.posts
(
    id character varying(60) COLLATE pg_catalog."default" NOT NULL,
    user_id character varying(60) COLLATE pg_catalog."default" NOT NULL,
    img_url character varying(255) COLLATE pg_catalog."default" NOT NULL,
    caption character varying(144) COLLATE pg_catalog."default" NOT NULL,
    _created timestamp without time zone DEFAULT now(),
    CONSTRAINT posts_pkey PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES catstagram.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
CREATE TABLE IF NOT EXISTS catstagram.comments
(
    id character varying(60) COLLATE pg_catalog."default" NOT NULL,
    user_id character varying(60) COLLATE pg_catalog."default" NOT NULL,
    content character varying(255) COLLATE pg_catalog."default" NOT NULL,
    _created time without time zone DEFAULT now(),
    post_id character varying(60) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT comments_pkey PRIMARY KEY (id),
    CONSTRAINT post_id FOREIGN KEY (post_id)
        REFERENCES catstagram.posts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES catstagram.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
