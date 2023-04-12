import axios from 'axios';
import https  from 'https';
import * as auth_helper from './session.helper';
import Config from "../config/config"

const baseURL = Config.appSettings.baseApiUrl;

let instance = axios.create({
  baseURL: baseURL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

// request header
instance.interceptors.request.use((config) => {
  const token = auth_helper.getToken();
  if(token){
    config.headers = { 'Authorization': 'Bearer ' +  token}
  }
  return config;
}, error => {
  return Promise.reject(error);
})

// response parse
instance.interceptors.response.use(
    (response) => {
        return response
    }, 
    (error) => {
    var errorStatus=error.response ? error.response.status : error.response;
    console.warn('Error status ::', errorStatus)
    console.log(errorStatus);
    if(!error.response){
        return new Promise((resolve,reject)=>{
            reject(error)
        });
    }
    else if(error.response.status===401){
        auth_helper.removeSession();
        window.location='/login';
    }
    else{
        return new Promise((resolve,reject)=>{
            reject(error)
        });
    }
})

export default instance;