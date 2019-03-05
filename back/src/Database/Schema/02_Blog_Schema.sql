DROP TABLE IF EXISTS blog_posts;
CREATE TABLE blog_posts (
	post_id integer PRIMARY KEY,
	media_id integer default 0,
	location_id integer default 0,
	title text DEFAULT '',
	content blob DEFAULT '',
	date datetime DEFAULT 0,
	author_id text DEFAULT '',
	FOREIGN KEY(location_id) 
    REFERENCES location(location_id)
    ON UPDATE CASCADE
	-- FOREIGN KEY(media_id) 
    -- REFERENCES media(media_id)
    -- ON UPDATE CASCADE
);