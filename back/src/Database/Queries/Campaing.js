import { PreparedStatement, PreparedQueries } from './PreparedStatement';
import Utils from '../Utils.js';

const initializeCampaign = async (db) => {
    try {
        const statement = PreparedStatement.Campaign;

        const getCampaign = (id) => {
            return PreparedQueries(db, statement.SEL_ID).SELECT(id);
        }

        const getAllCampaigns = () => {
            return PreparedQueries(db, statement.SEL_ALL).SELECT_ALL();
        }

        const createCampaign = (props) => {
            return PreparedQueries(db, statement.INS_NEW).INSERT(props);
        }

        const updateCampaign = (id, props) => {
            return PreparedQueries(db, statement.UPD_ID).UPDATE(id, props);
        }

        const deleteCampaign = (id) => {
            return PreparedQueries(db, statement.DEL_ID).DELETE(id);
        }

        //#region POST Page
        const updateCampaignPost = (id, props) => {
            return PreparedQueries(db, statement.UPD_POST).UPDATE(id, props);
        }

        const getCampaignPost = (id) =>
        {
            return PreparedQueries(db, statement.UPD_POST).SELECT(id);
        }
        //#endregion

        //#region F.A.Q PAGES
        const getCampaignFAQ = (id) => {
            return PreparedQueries(db, statement.SEL_FAQ).SELECT(id);
        }

        const updateCampaignFAQ = (id, props) => {
            return PreparedQueries(db, statement.UPD_FAQ).UPDATE(id, props);
        }
        //#endregion

        //#region PLEDGE
        const getPledge = (id) => {
            return PreparedQueries(db, statement.GET_PLEDEGE_ID).SELECT(id);
        }
        const getAllPledges = (id) => {
            return PreparedQueries(db, statement.SEL_ALL_PLEDGE).SELECT_ALL(id);
        }

        const createPledge = (props) => {
            return PreparedQueries(db, statement.INS_NEW_PLEDGE).INSERT(props);
        }

        const updatePledge = (id, props) => {
            return PreparedQueries(db, statement.UPD_PLEDGE_ID).UPDATE(id, props);
        }

        const deletePledge = (id) => {
            return PreparedQueries(db, statement.DEL_PLEDGE_ID).DELETE(id);
        }
        //#endregion


        const controller = {
            // campaigns
            getCampaign,
            getAllCampaigns,
            createCampaign,
            updateCampaign,
            deleteCampaign,
            // Posts
            getCampaignPost,
            updateCampaignPost,
            // F.A.Q
            getCampaignFAQ,
            updateCampaignFAQ,
            // Pledges
            getPledge,
            getAllPledges,
            createPledge,
            updatePledge,
            deletePledge
        }

        return controller;
    } catch (e) {
        console.log(`initializeCampaign ${e}`)
    }
}


export default initializeCampaign