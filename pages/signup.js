import Head from "next/head"
import Link from "next/link"
import { useState,useContext } from "react"
import {valid} from '../utils/valid'
import { DataContext } from "../store/GlobalState"
import {posData} from '../utils/fetchData'

const SignUp = () => {
    const initialState = {name:'',email:'',password:'',cpassword:''}
    const [userData,setUserData] = useState(initialState);
    const {name,email,password,cpassword} = userData;
     const {state,dispatch} = useContext(DataContext)
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setUserData({...userData,[name]:value});
        dispatch({type:'NOTIFY',payload:{}});
    }

   const handleSubmit  = async (e) => {
    e.preventDefault();
    const errMsg = valid(name,email,password,cpassword);
    if(errMsg) return dispatch({type:'NOTIFY',payload:{error:errMsg}})

    dispatch({type:'NOTIFY',payload:{loading:true}})
    const res = await posData('auth/signup',userData);
    if (res.err) return  dispatch({type:'NOTIFY',payload:{error:res.err}})

    dispatch({type:'NOTIFY',payload:{success:res.msg}})
    setUserData(initialState)
   }

    return (
        <div>
            <Head>
                <title>
                    Sign In Page
                </title>
            </Head>
            <div className="max-auto my-4" style={{maxWidth:'500px'}}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name='name' value={name} onChange={handleInputChange} placeholder="Name." className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email." className="form-control" id="password" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' value={password} onChange={handleInputChange} placeholder="Password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
                    <input type="password" name='cpassword' value={cpassword} onChange={handleInputChange} placeholder="Confirm Password" className="form-control" id="cPassword" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary w-100">Register</button>
                <p>Already  have account 
                    <Link href='/signin'><span style={{color:'crimson'}}> Login</span>
                </Link></p>
            </form>
            </div>
          
        </div>
    )
}

export default SignUp