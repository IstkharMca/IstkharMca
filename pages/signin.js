import Head from "next/head"
import Link from "next/link"
import { useState,useContext } from "react"
import { loginValidate } from "../utils/valid"
import { DataContext } from "../store/GlobalState"
import {posData} from '../utils/fetchData'

const SignIn = () => {
    const initialState = {email:'',password:''}
    const [userData,setUserData] = useState(initialState);
    const {email,password} = userData;
    const {state,dispatch} = useContext(DataContext)
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setUserData({...userData,[name]:value});
        dispatch({type:'NOTIFY',payload:{}});
    }

   const handleSubmit  = async (e) => {
    e.preventDefault();
    const errMsg = loginValidate(email,password);
    if(errMsg) return dispatch({type:'NOTIFY',payload:{error:errMsg}})

    dispatch({type:'NOTIFY',payload:{loading:true}})
    const res = await posData('auth/signin',userData);
    // if (res.err) return  dispatch({type:'NOTIFY',payload:{error:res.err}})

    // dispatch({type:'NOTIFY',payload:{success:res.msg}})
    // setUserData(initialState)
   }

    return (
        <div>
            <Head>
                <title>
                    Sign In Page
                </title>
            </Head>
            <div className="max-auto my-4" style={{maxWidth:'500px'}}>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" name="email" value={email} onChange={handleInputChange} placeholder="Email." className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <p>You don`t have account 
                    <Link href='/signup'><span style={{color:'crimson'}}> Register Now</span>
                </Link></p>
            </form>
            </div>
          
        </div>
    )
}

export default SignIn