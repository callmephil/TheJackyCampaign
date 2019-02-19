import Express from 'express'

const app = Express();

export default async (controller, isLoggedIn, upload) => {
    app.get('/', (req, res, next) => res.send("Ok from campaigns things"))

    const controllerCall = async (method, props, res, next) => {
        try {
            const result = await controller[method](props);
            res.json({
                success: true,
                result
            });
        } catch (e) {
            next(e);
        }
    }

    /* ======================= CAMPAIGNS START ======================== */
    //#region
    // READ
    app.get("/get/:campaign_id", async (req, res, next) => {
        const {
            campaign_id
        } = req.params;
        controllerCall('getCampaign', campaign_id, res, next)
    });

    // LIST
    app.get("/list", async (req, res, next) => {
        const {
            order,
            desc,
            limit,
            start
        } = req.query;
        controllerCall('getAllCampaigns', {
            order,
            desc,
            limit,
            start
        }, res, next)
    });

    // localhost:8080/campaign/new?title=TestFromUrl&subtitle=null&location_id=1&funding_goal=15000&start_date=0&end_date=0
    // CREATE
    //   app.post("/new", isLoggedIn, upload.single('image'), async (req, res, next) => {
    //     const author_id = req.user.sub;
    //     // const {
    //     //     title,
    //     //     subtitle,
    //     //     location_id,
    //     //     funding_goal,
    //     //     start_date,
    //     //     end_date
    //     // } = req.query;
    //     const image = req.file && req.file.filename
    //     console.log(req.query);
    //     controllerCall('ins_new_campaign', req.query,res,next)
    //   });

    app.get("/new", async (req, res, next) => {
        controllerCall('createCampaign', req.query, res, next)
    })

    // UPDATE
    // app.post("/update/:campaign_id", isLoggedIn, upload.single('image'), async (req, res, next) => {
    app.get("/update/:campaign_id", async (req, res, next) => {
        const author_id = req.user.sub
        const {
            campaign_id
        } = req.params;
        const image = req.file && req.file.filename
        controllerCall('updateCampaign', {
            campaign_id,
            ...req.query
        }, res, next)
    });

    // DELETE
    app.get("/delete/:campaign_id", isLoggedIn, async (req, res, next) => {
        const author_id = req.user.sub
        const {
            campaign_id
        } = req.params;
        controllerCall('deleteCampaign', {
            campaign_id,
            author_id
        }, res, next)
    });
    //#endregion
    /* ======================= CAMPAIGNS END ======================== */

    /* ====================== CAMPAIGN POSTS START ======================= */
    //#region 
    app.get("/post/get/:campaign_id", async (req, res, next) => {
        const {
            campaign_id
        } = req.params;
        controllerCall('getCampaignPost', campaign_id, res, next)
    });

    app.get("/post/update/:campaign_id", async (req, res, next) => {
        const {
            campaign_id
        } = req.params;
        controllerCall('updateCampaignPost', {
            campaign_id,
            ...req.query
        }, res, next);
    });
    //#endregion
    /* ======================= CAMPAIGN POSTS END ======================== */

    /* ======================= CAMPAIGN FAQ START ======================== */
    //#region 
    app.get("/faq/get/:campaign_id", async (req, res, next) => {
        const {
            campaign_id
        } = req.params;
        controllerCall('getCampaignFAQ', campaign_id, res, next)
    });

    app.get("/faq/update/:campaign_id", async (req, res, next) => {
        const {
            campaign_id
        } = req.params;
        controllerCall('updateCampaignFAQ', {
            campaign_id,
            ...req.query
        }, res, next);
    });
    //#endregion
    /* ======================= CAMPAIGN FAQ END ======================== */

    /* ======================= CAMPAIGNS PLEDGES START ======================== */
    //#region
    // READ
    app.get("/pledge/get/:pledge", async (req, res, next) => {
        const {
            pledge_id
        } = req.params;
        controllerCall('getPledge', pledge_id, res, next)
    });

    // LIST
    app.get("/pledge/list/:campaign_id", async (req, res, next) => {
        const {
            order,
            desc,
            limit,
            start
        } = req.query;
        controllerCall('getAllPledges', {
            order,
            desc,
            limit,
            start
        }, res, next)
    });

    // localhost:8080/campaign/new?title=TestFromUrl&subtitle=null&location_id=1&funding_goal=15000&start_date=0&end_date=0
    // CREATE
    //   app.post("/new", isLoggedIn, upload.single('image'), async (req, res, next) => {
    //     const author_id = req.user.sub;
    //     // const {
    //     //     title,
    //     //     subtitle,
    //     //     location_id,
    //     //     funding_goal,
    //     //     start_date,
    //     //     end_date
    //     // } = req.query;
    //     const image = req.file && req.file.filename
    //     console.log(req.query);
    //     controllerCall('ins_new_campaign', req.query,res,next)
    //   });

    app.get("/pledge/new", async (req, res, next) => {
        controllerCall('createPledge', req.query, res, next)
    })

    // UPDATE
    // app.post("/update/:campaign_id", isLoggedIn, upload.single('image'), async (req, res, next) => {
    app.get("/pledge/update/:campaign_id", async (req, res, next) => {
        const author_id = req.user.sub
        const {
            campaign_id
        } = req.params;
        const image = req.file && req.file.filename
        controllerCall('updatePledge', {
            campaign_id,
            ...req.query
        }, res, next)
    });

    // DELETE
    app.get("/pledge/delete/:pledge_id", isLoggedIn, async (req, res, next) => {
        const author_id = req.user.sub
        const {
            pledge_id
        } = req.params;
        controllerCall('deletePledge', {
            pledge_id,
            author_id
        }, res, next)
    });
    //#endregion
    /* ======================= CAMPAIGNS PLEDGES END ======================== */

    return app;
}