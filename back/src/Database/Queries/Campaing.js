import { PreparedStatement, PreparedQueries } from './PreparedStatement';
import Utils from '../Utils.js';

// const  = PreparedDatabase;

const initializeCampaign = async (db) => {
    try {
        const statement = PreparedStatement.Campaign;

        const sel_campaign = (id) => {
            return PreparedQueries(db, statement.SEL_ID).SELECT(id);
        }

        const sel_all_campaign = () => {
            return PreparedQueries(db, statement.SEL_ALL).SELECT_ALL();
        }

        const ins_new_campaign = (props) => {
            // no need to deconstruct
            // const {
            //     title,
            //     subtitle,
            //     location_id,
            //     funding_goal,
            //     start_date,
            //     end_date
            // } = props;
            // const query = {
            //     title: 'John',
            //     subtitle: 'Smith',
            //     location_id: 1,
            //     funding_goal: 1300000,
            //     start_date: Utils.nowForSQLite(),
            //     end_date: Utils.nowForSQLite()
            // };
            // console.log(props);
            return PreparedQueries(db, statement.INS_NEW).INSERT(props);
        }

        const upd_campaign = (id, props) => {
            const {
                title,
                subtitle,
                location_id,
                funding_goal,
                start_date,
                end_date
            } = props;
            const query = {
                title: 'John',
                subtitle: 'Smith',
                location_id: 1,
                funding_goal: 1300000,
                start_date: Utils.nowForSQLite(),
                end_date: Utils.nowForSQLite()
            };
            return PreparedQueries(db, statement.UPD_ID).UPDATE(id, query);
        }

        const delete_campaign = (id) => {
            return PreparedQueries(db, statement.DEL_ID).DELETE(id);
        }

        //#region POST Page
        const upd_post = (id, props) => {
            return PreparedQueries(db, statement.UPD_POST).UPDATE(id, props);
        }

        const sel_post = (id) =>
        {
            return PreparedQueries(db, statement.UPD_POST).SELECT(id);
        }
        //#endregion

        //#region F.A.Q PAGES
        const upd_faq = (id, props) => {
            return PreparedQueries(db, statement.UPD_FAQ).UPDATE(id, props);
        }

        const sel_faq = (id) => {
            return PreparedQueries(db, statement.SEL_FAQ).SELECT(id);
        }
        //#endregion

        //#region PLEDGE
        const ins_pledge = (props) => {
            return PreparedQueries(db, statement.INS_NEW_PLEDGE).INSERT(props);
        }

        const upd_pledge = (id, props) => {
            return PreparedQueries(db, statement.UPD_PLEDGE_ID).UPDATE(id, props);
        }

        const del_pledge = (id) => {
            return PreparedQueries(db, statement.DEL_PLEDGE_ID).DELETE(id);
        }

        const sel_pledge = (id) => {
            return PreparedQueries(db, statement.GET_PLEDEGE_ID).SELECT(id);
        }
        const sel_pledges = (id) => {
            return PreparedQueries(db, statement.SEL_ALL_PLEDGE).SELECT_ALL(id);
        }
        //#endregion


        const controller = {
            // campaigns
            sel_campaign,
            sel_all_campaign,
            ins_new_campaign,
            upd_campaign,
            delete_campaign,
            // Posts
            upd_post,
            sel_post,
            // F.A.Q
            upd_faq,
            sel_faq,
            // Pledges
            ins_pledge,
            upd_pledge,
            del_pledge,
            sel_pledge,
            sel_pledges
        }

        return controller;
    } catch (e) {
        console.log(`initializeCampaign ${e}`)
    }
}


export default initializeCampaign