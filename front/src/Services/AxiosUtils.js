import axios from 'axios';
import * as auth0Client from "../Utils/Auth/Auth";
import toast from 'react-toastify';

const request = async (path, options) => {
    try {
       // Debug console.log("UTILS : ",  path, options);
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
          //toast.error(`Created`);
      //  this.setState({ isLoading: false });  
      } else {
      //  this.setState({ error_message: answer.message, isLoading: false });
        toast.error('client error:'+answer.message); // < Toast Crash Here ?
      }
      return answer;
    } catch (err) {
     // this.setState({ error_message: err.message, isLoading: false });
      toast.error('server error: '+err.message); // < Toast Crash Here ?
      return { success:false }
    }
};

export default request;