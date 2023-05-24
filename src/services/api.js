import axios from "axios";
axios.defaults.baseURL='http://localhost:5000';
const registerUrl='/signUp';
export const register=(inputs)=>{
    const data={userName:inputs.name,email:inputs.email,password:inputs.password};
    return axios.post(registerUrl,data);
}