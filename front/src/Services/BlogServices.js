import request from './Utils';

export class BlogServices {
    getPostList = async (order) => {
        const answer = await request(`blog/list`, {
            params: {
                order
            }
        });
        if (!answer.success)
            return;
        
        const blog_list = answer.result
        return {
            blog_list
        };
    }

    getPost = async (id) => {
        const answer = await request(`blog/get`, {
            params: {
                id
            }
        });
        if (!answer.success) 
            return;
        const blog = answer.result;
        return blog;
    }

    deletePost = async (id) => {
        const answer = await request(`blog/delete/${id}`);
        if (!answer.success || !answer.result) 
            return;
        else
            return answer;
      };

    // Push Back Result to state to update interface.
    createPost = async (props) => {
        // if (!props || !(props.name && props.email)) {
        //   throw new Error(
        //     `you need both name and email properties to create a contact`
        //   );
        // }
        console.log("SERVICES", props);
        const answer = await request(`blog/new`, {
          method:'get',
          params: { ...props }
        });
        if (!answer.success) { return; }
        const id = answer.result;
        const blogpost = { ...props, id };
        return blogpost;
    };
}