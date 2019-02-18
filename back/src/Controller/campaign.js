import Express from 'express'

const app = Express();

export default async (controller, isLoggedIn, upload) => {
    app.get('/', (req, res, next) => res.send("Ok from campaigns things"))

    const controllerCall = async (method, props, res, next) => {
        try{
          const result = await controller[method](props);
          res.json({ success: true, result });
        } catch (e) {
          next(e);
        }
      }
    
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

      app.get("/new", async (req,res,next) => {
        controllerCall('ins_new_campaign', req.query,res,next)
      })
      
      // READ
      app.get("/get/:campaign_id", async (req, res, next) => {
        const { campaign_id } = req.params;
        controllerCall('sel_campaign', campaign_id, res,next)
      });
      
      // DELETE
      app.get("/delete/:campaign_id", isLoggedIn, async (req, res, next) => {
        const author_id = req.user.sub
        const { campaign_id } = req.params;
        controllerCall('deletecampaign',{ campaign_id, author_id },res,next)
      });
      
      // UPDATE
      app.post("/update/:campaign_id", isLoggedIn, upload.single('image'), async (req, res, next) => {
        const author_id = req.user.sub
        const { campaign_id } = req.params;
        const { name, email } = req.query;
        const image = req.file && req.file.filename
        controllerCall('updatecampaign',{ campaign_id, name, email, author_id, image },res,next)
      });
      
      // LIST
      app.get("/list", async (req, res, next) => {
        const { order, desc, limit, start } = req.query;
        controllerCall('getcampaignsList',{order, desc, limit, start},res,next)
      });   

    return app;
}