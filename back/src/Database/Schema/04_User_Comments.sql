-- < IN DEVELOPEMENT > --

-- Should redirect to a campaign or a blogpost
-- Should be deleted if either a blogpost or a campaign is deleted
DROP TABLE IF EXISTS user_comments_link;
CREATE TABLE user_comments_link (
    comment_id integer PRIMARY KEY,
    post_id integer,
    post_type integer
);

-- Should I Delete All Child Comments if parent is deleted ?
-- Should I delete comments or un-reference them ?
-- Should I un-reference them or should I replace them by a deleted message ?
-- Should I add a status ?
-- Should I add reaction ?
DROP TABLE IF EXISTS user_comments;
CREATE TABLE user_comments (
    comment_id integer PRIMARY KEY,
    user_id integer,
    parent_id integer,
    comment text,
    date_time datetime,
	FOREIGN KEY(comment_id) 
    REFERENCES user_comments_link(comment_id) 
    ON DELETE CASCADE
);

--- EXPERIMENTAL TESTS
INSERT INTO user_comments_link VALUES (1, 1, 0);
INSERT INTO user_comments VALUES (1, 1, 0, "Test", 0);
INSERT INTO user_comments_link VALUES (2, 1, 0);
INSERT INTO user_comments VALUES (2, 1, 1, "Test Parent", 0);
--- In this case, it seems that Parent and child aren't being deleted 
INSERT FROM user_comments_link WHERE post_id = 1 AND post_type = 0;