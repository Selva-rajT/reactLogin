
import { useState } from 'react';
import './registerPage.css';
import { register } from '../services/api';

 function RegisterForm() {
    const initialErrors={
        name:{required:false},
        email:{required:false},
        password:{required:false}
    }
    const [errors,setErrors]=useState(initialErrors);
    const [input,setInput]=useState({
        name:"",email:"",password:""
    });
    const [loading,setLoading]=useState(false);
    const handleInput=(event)=>{
        setInput({...input,[event.target.name]:event.target.value});
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("...........");
        let error=initialErrors;
        let hasError=false;
        if(input.email=="") {
            error.email.required=true;
            hasError=true;
        }
        if(input.name=="") {
            error.name.required=true;
            hasError=true;
        }
        if(input.password==""){
            error.password.required=true;
            hasError=true;
        }
        if(!hasError){
            setLoading(true);
            register(input).then(response=>console.log(response))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(true));
        }
        setErrors(error);
    }

  return (
    <section>
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit} >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleInput}  />
        {errors.name.required?
        <span>
            <p>Name is required</p>
        </span>:null
        }
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleInput} />
        {errors.email.required?
        <span>
            <p>Email is required</p>
        </span>:null
        }
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleInput}  />
        {errors.password.required?
        <span>
            <p>Password is required</p>
        </span>:null
        }
        {loading?<h3>Loading.........</h3>:null}
        <input type="submit" disabled={loading} value="Register" />
    </form>
    </section>
  );
}
export default RegisterForm;