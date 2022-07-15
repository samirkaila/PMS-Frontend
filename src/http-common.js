import axios from "axios";
import { authHeader } from './helpers';
export default axios.create({
  baseURL: "http://192.168.1.103:3002/api",
  headers: {
    "Content-type"  : "application/json",
    'Authorization' : authHeader() 
  }
});