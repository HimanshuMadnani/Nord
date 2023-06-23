import React, { useState, useEffect, useContext } from 'react';
import "../resources/TextFire.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase'; 
import { NordContexts } from '../util/Contexts';
import { Navigate } from 'react-router-dom';
const TextFire = () => {
    const [data, setData] = useState("")
    const [read, setRead] = useState([]);

    const addData = async (e) =>  {
        e.preventDefault(); 

        try {
          const docRef = await addDoc(collection(db, "nordproj"), {
            data: data,    
          });
          console.log("Document written with ID: ", docRef.id);
          fetchPost();
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    }
 

 
    const fetchPost = async () => {
       
        await getDocs(collection(db, "nordproj"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setRead(newData);                
                console.log(read, newData);
            })
       
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])
    const {authUser} = useContext(NordContexts);

    if(authUser===null) return <Navigate replace to="/" />
    return (
        <section className="data-container bg-slate-200">
            <div className="data">
                <h1 className="header">
                    Text Editor
                </h1>
   
                <div>
   
                    <div>
                        <input className='inp border-1 border-black rounded-md'
                            type="text"
                            placeholder=""
                            onChange={(e)=>setData(e.target.value)}
                        />
                    </div>
   
                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={addData}
                        >
                            Submit
                        </button>
                    </div>
   
                </div>
   
                <div className="data-content">
                  {
                   read?.map((data,i)=>(
                      <p key={i}>
                          {data.data}
                      </p>
                   ))
                  }
                </div>
            </div>
        </section>
    )
}
 
export default TextFire