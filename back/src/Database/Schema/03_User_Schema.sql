DROP TABLE IF EXISTS users;
CREATE TABLE users (
	user_id integer PRIMARY KEY,
	auth0_id text,
	name text,
	lastname text
);

DROP TABLE IF EXISTS user_purchase;
CREATE TABLE user_purchase (
	user_id integer,
	pledge_id integer,
    FOREIGN KEY(user_id) 
    REFERENCES users(user_id)
    -- Campaign Hmm
    FOREIGN KEY(pledge_id) 
    REFERENCES campaign_pledge(pledge_id)
    ON UPDATE CASCADE
);

DROP TABLE IF EXISTS user_post_comments;
CREATE TABLE user_post_comments (
	user_id integer,
	post_id integer,
    parent_id integer,
	comment text,
	date_time datetime,
	FOREIGN KEY(user_id) 
    REFERENCES users(user_id)
    ON DELETE CASCADE
    FOREIGN KEY(post_id) 
    REFERENCES post_comments(post_id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

DROP TABLE IF EXISTS user_campaign_comments;
CREATE TABLE user_campaign_comments (
	user_id integer,
	campaign_id integer,
    parent_id integer,
	comment text,
	date_time datetime,
	FOREIGN KEY(user_id) 
    REFERENCES users(user_id)
    ON DELETE CASCADE
	FOREIGN KEY(campaign_id) 
    REFERENCES campaign(campaign_id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);