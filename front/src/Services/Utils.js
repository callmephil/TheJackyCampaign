import axios from 'axios';
import * as auth0Client from "../Utils/Auth/Auth";
import toast from 'react-toastify';

const request = async (path, options) => {
    try {
        console.log("UTILS : ",  path, options);
      //this.setState({ isLoading: true });
      if(options && options.data){
        const data = new FormData();
        Object.keys(options.data).forEach( key => {
          const value = options.data[key]
          if(Array.isArray(value) || value instanceof FileList){
            let i = 0;
            while(i < value.length){
              data.append(`${key}[${i}]`, value[i++]);
            }
          }else if(value !== null && typeof value !== 'undefined'){
            data.append(key,value)
          }
        })
        options.data = data
      }
      const config = {
        method: "get",
        url: `//localhost:8080/${path}`,
        headers: { 
          Authorization: `Bearer ${auth0Client.getIdToken()}`,
          'Content-Type': options && options.data ? 'multipart/form-data' : undefined
        },
        ...options
      }
      const response = await axios(config);
      const answer = response.data
      if (answer.success) {
      //  this.setState({ isLoading: false });  
      } else {
      //  this.setState({ error_message: answer.message, isLoading: false });
        toast.error('client error:'+answer.message);
      }
      return answer;
    } catch (err) {
     // this.setState({ error_message: err.message, isLoading: false });
      toast.error('server error: '+err.message);
      return { success:false }
    }
};

export default request;