CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Favorite table
CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (200) NOT NULL,
    "category_id" NUMERIC
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');


-- #TEST FAVORITE
Insert into "favorite" ("url")
Values ('url#1'), ('url#2'),('url#3');
