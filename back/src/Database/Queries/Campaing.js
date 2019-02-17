import PreparedStatement from './PreparedStatement';

const initializeCampaign = async (Database) => {
    try {
        const sel_all_campaign = () => {
            const stmt = Database.prepare(PreparedStatement.Campaign.SELECT_ALL_CAMPAIGN);
            console.log(stmt);
            return stmt.get();
        }

        const controller = {
            sel_all_campaign
            // USER ACCOUNT
        }

        return controller
    } catch (e) {
        console.log(`initializeCampaign ${e}`)
    }
}


export default initializeCampaign