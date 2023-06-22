import { useState } from "react"
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import "../App.css"


const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState(null);


    const handleLogiIn =(e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((useCredintial) => {
            setCurrentUser(true)
        }).catch((error) =>{
            alert(error)
        })
    }

    if(currentUser) return <Navigate to="/Nord/home"/>

  return (

    <div className="flex justify-center mt-[20vh] rounded-lg ml-[70vh] mr-[70vh] p-[10vh] bg-slate-300">
        
        <form className="flex-col " onSubmit={handleLogiIn}>
            <h1 className="p-2 text-2xl mb-2 ml-[9vh] font-bold font-mono" >Sign In</h1>
            <input className="m-2 text-center w-[35vh] pt-1 pb-1 rounded-md focus:bg-slate-200 bg-slate-100 border-black border-1" type='email' 
                placeholder='Enter your email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br/>
            <input className="m-2 text-center w-[35vh] pt-1 pb-1 rounded-md focus:bg-slate-200 bg-slate-100 border-black border-1" type='password' 
                placeholder='Enter your password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            >
            </input>
            <br/>
            <button className=" bg-slate-100 rounded border-solid mt-3 ml-[12vh] pl-2 pr-2 mb-3 hover:bg-slate-200 border-black border-1 m-1.5 p-0.5" type="submit">Log In</button>
            <br/>
            <p className="ml-8">Dont have an Account?</p>
            <a className="p-2 ml-[11vh] text-cyan-800 hover:text-cyan-500" href="/Nord/signup">Sign Up!</a>
        </form>
    </div>
  )
}

export default LogIn