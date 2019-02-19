DROP TABLE IF EXISTS blog_posts;
CREATE TABLE blog_posts (
	post_id integer PRIMARY KEY,
	title text DEFAULT '',
	content blob DEFAULT '',
	date datetime DEFAULT 0,
	author_id text DEFAUTL ''
);