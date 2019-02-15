CREATE TABLE blog_posts (
	post_id integer PRIMARY KEY AUTOINCREMENT,
	title text,
	content blob,
	date blob
);

CREATE TABLE images (
	image_id integer PRIMARY KEY AUTOINCREMENT,
	modifier_id integer,
	origin text,
	hash text,
	url text,
	mod_id integer
);

CREATE TABLE images_modifier (
	modifier_id integer PRIMARY KEY AUTOINCREMENT,
	width blob,
	height blob
);

CREATE TABLE campaign (
	campaign_id integer PRIMARY KEY AUTOINCREMENT,
	title text,
	subtitle text,
	location_id integer,
	funding_goal integer,
	start_date datetime,
	end_date datetime
);

CREATE TABLE campaign_pledge (
	pledge_id integer PRIMARY KEY AUTOINCREMENT,
	campaign_id integer,
	title text,
	description text,
	reward_id text,
	price integer,
	amount integer
);

CREATE TABLE campaign_post (
	campaign_id integer,
	text text
);

CREATE TABLE campaign_faq (
	campaign_id integer,
	text text
);

CREATE TABLE location (
	location_id integer,
	region text
);

CREATE TABLE user (
	user_id integer PRIMARY KEY AUTOINCREMENT,
	auth0_id text,
	name text,
	lastname text
);

CREATE TABLE user_purchase (
	user_id integer,
	pledge_id integer
);

CREATE TABLE user_post_comments (
	user_id integer,
	post_id integer,
	comment text,
	date_time datetime
);

CREATE TABLE user_campaign_comments (
	user_id integer,
	campaign_id integer,
	comment text,
	date_time datetime
);

