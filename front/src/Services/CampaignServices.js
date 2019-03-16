import {
    request,
    onGet,
    onGetList,
    onDelete
} from './AxiosUtils';

/*
*** Prototypes
    Campaign Type : ${campaign_id} ${title} ${subtitle} ${location_id} ${funding_goal} ${start_date} ${end_date}
    Campaign Faq Type : ${campaign_id} ${text}
    Campaign Pledge Type : ${pledge_id} ${campaign_id} ${title} ${description} ${reward_id} ${price} ${amount}
    Campaign Post Type : ${campaign_id} ${text}


    Route : /campaign/...
    Route Pledge : /campaign/pledge/...
    Functions = [
    ]
    Return type : Promise.
    Usage : Front/Component/Pages/Campaigns/Campaign.jsx
***

#### createCampaign
> localhost:8080/campaign/new&...
#### updateCampaign
> localhost:8080/campaign/update/:id&...
#### deleteCampaign
> localhost:8080/campaign/delete/:id

## Campaings Posts Routes
#### getCampaignPost
> localhost:8080/campaign/post/get/:id
#### updateCampaignPost
> localhost:8080/campaign/post/update/:id&...

## Campaigns FAQ Routes
#### getCampaignFAQ
> localhost:8080/campaign/faq/get/:id
#### updateCampaignFAQ
> localhost:8080/campaign/faq/update/:id&...

## Campaigns Pledges Routes
#### getPledges
> localhost:8080/campaign/pledge/get/:pledge_id
#### getAllPledges
> localhost:8080/campaign/pledge/list/:campaign_id
#### createPledge
> localhost:8080/campaign/pledge/new&...
#### updatePledge
> localhost:8080/campaign/pledge/update/:campaign_id&...
#### deletePledge
> localhost:8080/campaign/pledge/delete/:pledge_id

*/

export class CampaignServices {
    /* ====================== Campaign START ====================== */
    // getCampaign
    getCampaign = async (campaign_id) => {
        return await onGet(`campaign/get/${campaign_id}`);
    };
    // getCampaignList
    getAllCampaigns = async (order) => {
        return await onGetList(`campaign/list`, { order });
    };
    // createCampaign
    // updateCampaign


    // deleteCampaign
    deleteCampaign = async (id) => {
        return await onDelete(`campaign/delete/${id}`);
    };
    /* ====================== Campaign END ====================== */

    /* ====================== Campaign POST START ======================= */
    getCampaignPost = async (campaign_id) => {
        return await onGet(`campaign/post/get/${campaign_id}`);
    };

    updateCampaignPost = async (id, props, post) => {
        const {
            title,
            content,
            image
        } = props;
        const answer = await request(`campaign/post/update/${id}`, {
            method: "post",
            data: {
                image
            },
            params: {
                title,
                content
            }
        });
        if (!answer.success) {
            return;
        }
        if (post.post_id === id) {
            const new_post = {
                post_id: post.post_id,
                title: title || post.title,
                content: content || post.content,
            };
            //toast(`post "${new_post.title}" updated`);
            return new_post;
        }
        // otherwise, don't change the post at all
        return post;
    };
    /* ====================== Campaign POST END ======================= */

    /* ====================== Campaign F.A.Q END START ======================= */
    getCampaignPost = async (campaign_id) => {
        return await onGet(`campaign/post/get/${campaign_id}`);
    };

    updateCampaignPost = async (id, props, faq) => {
        const {
            title,
            content,
            image
        } = props;
        const answer = await request(`campaign/post/update/${id}`, {
            method: "post",
            data: {
                image
            },
            params: {
                title,
                content
            }
        });
        if (!answer.success) {
            return;
        }
        if (faq.faq_id === id) {
            const new_faq = {
                faq_id: faq.faq_id,
                title: title || faq.title,
                content: content || faq.content,
            };
            //toast(`post "${new_post.title}" updated`);
            return new_faq;
        }
        // otherwise, don't change the post at all
        return faq;
    };
    /* ====================== Campaign F.A.Q END END ======================= */

    /* ====================== Campaign Pledges START ====================== */
    // getPledge
    getPledge = async (pledge_id) => {
        return await onGet(`campaign/pledge/get/${pledge_id}`);
    };

    // getPledgeList
    getPledgeList = async (campaign_id, order) => {
        return await onGetList(`campaign/pledge/list/${campaign_id}`, { order })
    }
    // createPledge

    // updatePledge

    // deletePledge
    deletePledge = async (id) => {
        return await onDelete(`campaign/pledge/delete/${id}`);
    };
    /* ====================== Campaign Pledges END ====================== */
}