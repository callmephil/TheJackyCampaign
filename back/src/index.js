import app from './app'
import initializeDatabase from './Database/db'
import { isLoggedIn } from './Middleware/auth'
/* Controllers */
import userProfileControllerApp from './Controller/user'
/* Middleware */
import upload from './Middleware/uploads'

const start = async () => {
  const controller = await initializeDatabase()

  app.get('/', (req, res, next) => res.send("ok"));

  /* ROUTING DATA'S  */
  const users = await userProfileControllerApp(controller, isLoggedIn, upload);
  app.use('/profile', users);



  /* AUTHENTIFICATION <> */
  app.get('/mypage', isLoggedIn, async ( req, res, next ) => {
    try{
      const { order, desc } = req.query;
      const { sub, nickname} = req.user
      const user = await controller.createUserIfNotExists({sub, nickname})
      // @Todo
      // const result = await controller.getUserProfile({order, desc, author_id:sub})
      // user.result = result
      res.json({ success: true, result: user });
    }catch(e){
      next(e)
    }
  })
  
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
