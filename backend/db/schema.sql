DROP DATABASE IF EXISTS ninjas_dev;
CREATE DATABASE ninjas_dev;

\c ninjas_dev;

CREATE TABLE ninjas (
    id SERIAL PRIMARY KEY,
    ninja_name TEXT NOT NULL,
    elements_mastered TEXT,
    is_ninja BOOLEAN NOT NULL DEFAULT FALSE,
    age INTEGER,
    class TEXT,
    episode_appearance INTEGER,
    ninja_photo TEXT
);



    id ,
    ninja_name ,
    elements_mastered ,
    is_ninja ,
    age ,
    class ,
    episode_appearance ,
    ninja_photo 