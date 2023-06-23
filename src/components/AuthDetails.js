import React, { useEffect , useContext} from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { NordContexts } from '../util/Contexts'
import { auth } from '../firebase'
import { Navigate } from 'react-router-dom'

const AuthDetails = () => {
    const {authUser, setAuthUser} = useContext(NordContexts);
    
    useEffect(() =>{
        const listen = onAuthStateChanged(auth, (user) =>{
            if(user){
                setAuthUser(user);
            } else{
                setAuthUser(null);
            }
        });

        return () =>{
            listen();
        }
    }, []);

    const usersignOut =() =>{
        signOut(auth).then(() => {
            console.log("user Signed out sucessfully")
            
         }).catch((error)=>console.log(error)
)
    }
    if(authUser===null) return <Navigate replace to="/Nord/" />
    return <div className=''>{authUser ? <><p className='ml-[3vh]'>{`Signed In as ${authUser.email}`}</p><button className='mt-2 ml-[20vh] bg-slate-100 rounded border-solid pl-2 pr-2 mb-3 hover:bg-slate-200 border-black border-1 m-1.5 p-0.5' onClick={usersignOut}>Sign Out</button></> : <p></p>}</div>
}

export default AuthDetails