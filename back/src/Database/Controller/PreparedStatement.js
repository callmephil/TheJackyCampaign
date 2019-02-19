const PreparedStatement = {
    Campaign: {
        INS_NEW: "INSERT INTO campaign (title, subtitle, location_id, funding_goal, start_date, end_date) VALUES ($title, $subtitle, $location_id, $funding_goal, $start_date, $end_date)",
        UPD_ID: "UPDATE campaign SET title = $title, subtitle = $subtitle, location_id = $location_id, funding_goal = $funding_goal, start_date = $start_date, end_date = $end_date WHERE campaign_id = @id",
        DEL_ID: "DELETE FROM campaign WHERE campaign_id = ?",
        SEL_ID: "SELECT * FROM campaign WHERE campaign_id = ?",
        SEL_ALL: "SELECT * FROM campaign",

        INS_NEW_PLEDGE: "INSERT INTO campaign_pledge (campaign_id, title, description, reward_id, price, amount) VALUES ($campaign_id, $title, $description, $reward_id, $price, $amount)",
        DEL_PLEDGE_ID: "DELETE FROM campaign_pledge where pledge_id = ?",
        UPD_PLEDGE_ID: "UPDATE campaign_pledge SET title = ?, description = ?, reward_id = ?, price = ?, amount = ? WHERE pledge_id = ?",
        GET_PLEDEGE_ID: "SELECT  * FROM campaign_pledge WHERE pledge_id = ?",
        SEL_ALL_PLEDGE: "SELECT * FROM campaign_pledge WHERE campaign_id = ?",

        UPD_POST: "",
        SEL_POST: "SELECT * FROM campaign_post WHERE campaign_id = ?",

        UPD_FAQ: "",
        SEL_FAQ: "SELECT * FROM campaign_faq WHERE campaign_id = ?",

        SEL_COMMENTS: "SELECT * FROM user_campaign_comments WHERE campaign_id = ?",
    },
    Blog: {
        SEL_ID: "SELECT * FROM blog where post_id = ?",
        SEL_ALL: "SELECT * FROM blog",
        INS_NEW: "INSERT INTO blog (tite, content, date, author) VALUES ($title, $content, $date, $author)",
        UPD_ID: "UPDATE blog SET title = $title, content = $content, date = $date, author = $author where post_id = $post_id",
        DEL_ID: "DELETE FROM blog where post_id = ?",
    },
    Users: {
        
    }
}

const PreparedQueries = (db, statement) => {
    try {
        const stmt = db.prepare(statement);
        
        // this is shit. change this thanks.
        const SELECT = (id) => {
            return id ? stmt.get(id) : stmt.get();
        };

        const SELECT_ALL = (id) => {
            return id ? stmt.all(id) : stmt.all();
        }

        const INSERT = (props) => {
            const result = stmt.run({
                ...props
            });
            return result;
        };

        const UPDATE = (id, props) => {
            props.id = id;
            const result = stmt.run({
                ...props
            });
            return result.changes;
        };

        const DELETE = (id) => {
            const result = stmt.run(id);
            return result.changes;
        };

        const QueryCenter = {
            SELECT,
            SELECT_ALL,
            INSERT,
            UPDATE,
            DELETE,
        };

        return QueryCenter;
    } catch (e) {
        console.log(`preparedQueries error ${e}`);
    }
}

export {
    PreparedStatement,
    PreparedQueries
}
