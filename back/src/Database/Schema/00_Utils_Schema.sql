DROP TABLE IF EXISTS location;
CREATE TABLE location (
	location_id integer PRIMARY KEY,
	region text
);

DROP TABLE IF EXISTS media;
CREATE TABLE media (
	media_id integer PRIMARY KEY,
	origin text,
	hash text,
	url text,
	modifier_id integer,
	FOREIGN KEY(modifier_id) 
    REFERENCES media_modifier(modifier_id)
    ON UPDATE CASCADE
);

DROP TABLE IF EXISTS media_modifier;
CREATE TABLE media_modifier (
	modifier_id integer PRIMARY KEY,
	width integer DEFAULT 0,
	height integer DEFAULT 0
);