-- SQLite
DROP TABLE IF EXISTS campaign;
CREATE TABLE campaign (
	campaign_id integer PRIMARY KEY,
	title text DEFAULT NULL,
	subtitle text DEFAULT NULL,
	location_id integer DEFAULT 0,
	funding_goal integer DEFAULT 0,
	start_date datetime,
	end_date datetime,
	FOREIGN KEY(location_id) 
    REFERENCES location(location_id)
    ON UPDATE CASCADE
);

DROP TABLE IF EXISTS campaign_pledge;
CREATE TABLE campaign_pledge (
	pledge_id integer PRIMARY KEY,
	campaign_id integer,
	title text DEFAULT NULL,
	description text DEFAULT NULL,
	reward_id integer DEFAULT 0,
	price integer DEFAULT 0,
	amount integer DEFAULT 0,
	FOREIGN KEY(campaign_id) 
    REFERENCES campaign(campaign_id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

DROP TABLE IF EXISTS campaign_post;
CREATE TABLE campaign_post (
	campaign_id integer,
	text text DEFAULT '',
	FOREIGN KEY(campaign_id) 
    REFERENCES campaign(campaign_id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

DROP TABLE IF EXISTS campaign_faq;
CREATE TABLE campaign_faq (
	campaign_id integer,
	text text DEFAULT '',
	FOREIGN KEY(campaign_id) 
    REFERENCES campaign(campaign_id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

DROP TRIGGER aft_insert_campaign;
CREATE TRIGGER aft_insert_campaign AFTER INSERT ON campaign
BEGIN
INSERT INTO campaign_faq(campaign_id)
         VALUES(NEW.campaign_id);
INSERT INTO campaign_post(campaign_id)
         VALUES(NEW.campaign_id);
INSERT INTO campaign_pledge(campaign_id)
		 VALUES(NEW.campaign_id);
END;