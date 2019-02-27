import request from './AxiosUtils';

/*
*** Prototypes
    Type : ${post_id} ${title} ${content} ${date} ${author_id}
    Route : /blog/...
    Functions = [
        getPostList, => Orders ${date}
        getPost, => ${post_id}
        deletePost, => ${post_id}
        createPost, => ${title} && ${content} && ${date} && ${author_id}
        *updatePost => ${title} || ${content} && ${date}
    ]
    Return type : Promise.
    Usage : Front/Component/Blog.jsx
***
*/

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
        console.log(blog_list);
        return blog_list;
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
        //return true;
      };

    // Push Back Result to state to update interface.
    createPost = async (props) => {
        if (!props || !(props.title && props.content && props.date && props.author_id)) {
            throw new Error(
                `you need ${Object.keys(props)} properties to create a blog`
            );
        }

        const answer = await request(`blog/new`, {
          method:'get',
          params: { ...props }
        });
        if (!answer.success) { return; }
        const id = answer.result;
        const blogpost = { ...props, id };
        return blogpost;
    };

    // Update
    updatePost = async (id, props, list) => {
        const { title, content, image } = props
        const answer = await request(`blog/update/${id}`, {
          method: "post",
          data: { image },
          params: { title, content }
        });
        if (!answer.success) { return; }
        const blogs_list = list.map(post => {
          // if this is the blogpost we need to change, update it. This will apply to exactly
          // one post
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
          else {
            return post;
          }
        });
        return blogs_list;
    };    
}