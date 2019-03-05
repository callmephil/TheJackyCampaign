import  { PreparedStatement, PreparedQueries } from './PreparedStatement';

const initializeBlog = async (db) => {
    try {
        const statement = PreparedStatement.Blog;

        const getPost = (id) => {
            return PreparedQueries(db, statement.SEL_POST).SELECT(id);
        }

        const getPostCard = (id) => {
            return PreparedQueries(db, statement.SEL_POST_CARD_ID).SELECT(id);
        }

        const getAllPostCards = () => {
            return PreparedQueries(db, statement.SEL_POST_CARDS).SELECT_ALL();
        }

        const createPost = (props) => {
            return PreparedQueries(db, statement.INS_NEW).INSERT(props);
        }

        const updatePost = (id, props) => {
            return PreparedQueries(db, statement.updatePost).UPDATE(id, props);
        }

        const deletePost = (id) => {
            return PreparedQueries(db, statement.DEL_ID).DELETE(id);
        }

        const controller = {
            getPost,
            getPostCard,
            getAllPostCards,
            createPost,
            updatePost,
            deletePost
        }

        return controller
    } catch (e) {
        console.log(`initializeBlog ${e}`)
    }
}


export default initializeBlog