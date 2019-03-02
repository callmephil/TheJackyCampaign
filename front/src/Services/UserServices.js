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

export class UserServices {
}