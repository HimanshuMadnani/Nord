import { useEffect, useState } from "react"
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import validator from 'validator'
import { fetchData, emailOptions } from "../util/fetchData";
import { useNavigate } from "react-router-dom";
const Signup = () => {

    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate =useNavigate();
    const [isTemp, setIsTemp] =useState(false)
    
      const isTemporaryEmail = async (email) => {
        const domain = email.split('@')[1];
        const data = await fetchData(`https://mailcheck.p.rapidapi.com/?domain=${domain}`, emailOptions)
        if(data.disposable===true){setIsTemp(true);}
      };

      const [errorMessage, setErrorMessage] = useState('')
  
      const validate = (value) => {
    
          if (validator.isStrongPassword(value, {
              minLength: 8, minLowercase: 1,
              minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
              setErrorMessage('Is Strong Password')
          } else {
              setErrorMessage('Is Not Strong Password')
              setPassword(value)
          }
      }

      useEffect((e)=>{
        isTemporaryEmail(email)
      },[email])

    const handleSignup =(e) => {

        isTemporaryEmail(email)
        if (isTemp) {
            alert('This is a temporary email addrss');
          }
          else{
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate("/")
        }).catch((error) =>{
            console.log(error)
        })
    }
    }

  return (
    <div className="flex justify-center mt-[20vh] rounded-lg ml-[70vh] mr-[70vh] p-[10vh] bg-slate-300">
        <form className="flex-col " onSubmit={handleSignup}>
            <h1 className="p-2 text-2xl mb-2 ml-[9vh] font-bold font-mono">Sign Up</h1>
            <input className="m-2 text-center w-[35vh] pt-1 pb-1 rounded-md focus:bg-slate-200 bg-slate-100 border-black border-1" type='email' 
                placeholder='Enter your email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br/>
            <input className="m-2 text-center w-[35vh] pt-1 pb-1 rounded-md focus:bg-slate-200 bg-slate-100 border-black border-1" type='password' 
                placeholder='Enter your password' 
                value={password}
                onChange={(e) => validate(e.target.value)}
            ></input>
            <br/>
            {errorMessage === '' ? null :
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{errorMessage}</span>}
            <br/>
            
            <button className=" bg-slate-100 rounded border-solid mt-3 ml-[12vh] pl-2 pr-2 mb-3 hover:bg-slate-200 border-black border-1 m-1.5 p-0.5" type="submit">Sign Up</button>
            <br/>
            <p className="ml-8">Alredy have an account?</p>
            <a className="p-2 ml-[11vh] text-cyan-800 hover:text-cyan-500" href={process.env.PUBLIC_URL}>Sign In</a>
        </form>
    </div>
  )
}

export default Signup