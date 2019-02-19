import Express from 'express'

const app = Express();

export default async (controller, isLoggedIn) => {
    app.get('/', (req, res, next) => res.send("Ok from blog data"))

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

    /* ======================= CAMPAIGNS BLOG POST START ======================== */
    //#region
    // READ
    app.get("/get/:post_id", async (req, res, next) => {
        const {
            post_id
        } = req.params;
        controllerCall('getPost', post_id, res, next)
    });

    // LIST
    app.get("/list/:post_id", async (req, res, next) => {
        const {
            order,
            desc,
            limit,
            start
        } = req.query;
        controllerCall('getAllPost', {
            order,
            desc,
            limit,
            start
        }, res, next)
    });

    app.get("/new", async (req, res, next) => {
        controllerCall('createPost', req.query, res, next)
    })

    // UPDATE
    // app.post("/update/:post_id", isLoggedIn, upload.single('image'), async (req, res, next) => {
    app.get("/update/:post_id", async (req, res, next) => {
        const author_id = req.user.sub
        const {
            post_id
        } = req.params;
        const image = req.file && req.file.filename
        controllerCall('updatePost', {
            post_id,
            ...req.query
        }, res, next)
    });

    // DELETE
    app.get("/delete/:post_id", isLoggedIn, async (req, res, next) => {
        const author_id = req.user.sub
        const {
            post_id
        } = req.params;
        controllerCall('deletePost', {
            post_id,
            author_id
        }, res, next)
    });
    //#endregion
    /* ======================= CAMPAIGNS BLOG POST END ======================== */


    return app;
}