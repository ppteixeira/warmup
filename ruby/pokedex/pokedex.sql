CREATE DATABASE 'pokedex'

CREATE TABLE pokemons (
  id SERIAL4 PRIMARY KEY,
  nickname VARCHAR(50),
  species VARCHAR(30),
  level INTEGER
);


INSERT INTO pokemons (nickname, species, level) VALUES ('Max', 'Charmander', 12);
INSERT INTO pokemons (nickname, species, level) VALUES ('Char', 'Charizard', 23);
INSERT INTO pokemons (nickname, species, level) VALUES ('Pika', 'Pikachu', 18);
INSERT INTO pokemons (nickname, species, level) VALUES ('Babu', 'Blastoise', 21);
INSERT INTO pokemons (nickname, species, level) VALUES ('Snooze', 'Snorlax', 29);
