import app from './app'
import Connection from './Database/Connection'
import { isLoggedIn } from './Middleware/auth'
/* Controllers */
import userProfileControllerApp from './Controller/user'
import campaignControllerApp from './Controller/campaign'
/* Middleware */
import upload from './Middleware/uploads'

const start = async () => {
  // Temp - Testing
  const DatabaseControllers = await Connection();
  const { usersController, campaignController, blogController }  = DatabaseControllers;
  app.get('/', (req, res, next) => res.send("ok"));

  const new_pledge = {
    campaign_id: 1,
    title: "First Pledge",
    description: "This is the first pledge",
    reward_id: 0,
    price: 15,
    amount: 0,
  }
  //console.log(campaignController.ins_pledge(new_pledge))

  console.log(campaignController.sel_pledge(5));
  //console.log(campaignController.sel_pledges(1));
  // console.log(blah.sel_all_campaign());
  // console.log(blah.sel_campaign(1));
  // console.log(await blah.ins_new_campaign())
  // console.log(blah.upd_campaign(32))
  // console.log(blah.delete_campaign(5))
  //console.log(blah.sel_all_campaign())


  // const controller = await initializeDatabase()

  // 

  // /* ROUTING DATA'S  */
  // const users = await userProfileControllerApp(controller, isLoggedIn, upload);
  // app.use('/profile', users);

  const campaigns = await campaignControllerApp(campaignController, isLoggedIn, upload);
  app.use('/campaign', campaigns);

  // /* AUTHENTIFICATION <> */
  // app.get('/mypage', isLoggedIn, async ( req, res, next ) => {
  //   try{
  //     const { order, desc } = req.query;
  //     const { sub, nickname} = req.user
  //     const user = await controller.createUserIfNotExists({sub, nickname})
  //     // @Todo
  //     // const result = await controller.getUserProfile({order, desc, author_id:sub})
  //     // user.result = result
  //     res.json({ success: true, result: user });
  //   }catch(e){
  //     next(e)
  //   }
  // })
  
  app.use((err, req, res, next) => {
    console.error(err)
    const message = err.message
    res.status(500).json({
      success: false,
      message
    })
  })

  app.listen(8080, () => console.log('server listening on port 8080'))
}

start();
