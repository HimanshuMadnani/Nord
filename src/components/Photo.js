import React, { useContext, useEffect, useState } from 'react'
import { storage } from '../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import {v4} from "uuid"
import "../App.css"
import { Navigate } from 'react-router-dom'
import { NordContexts } from '../util/Contexts'

const Photo = () => {
  const {authUser} = useContext(NordContexts);
  const [imageUpload , setImageUpload] =useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/")  
  const uploadImage = () =>{
    if(imageUpload === null) return alert("Please select an Image");

    const imageref = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageref, imageUpload).then((snapshot) =>{
      getDownloadURL(snapshot.ref).then((url)=>{
        setImageList((prev)=>[...prev, url])
      })
    })
  };

  useEffect(()=>{
    listAll(imageListRef).then((response) =>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setImageList((prev)=>[...prev, url]);
        });
      });
    });
  }, []) ;
  if(authUser===null) return <Navigate to="/" />

  return ( 
    <div className='photo pt-12 bg-slate-200 h-[100%]'>
      <h1 className='mb-8 font-mono text-4xl font-bold'>Photo Gallery</h1>
      <input type="file" onChange={(e)=>{setImageUpload(e.target.files[0])}}></input>
      <button className=" bg-slate-100 rounded border-solid mt-3 ml-[12vh] pl-2 pr-2 mb-3 hover:bg-slate-200 border-black border-1 m-1.5 p-0.5" onClick={uploadImage}>Upload Image</button>
      <div className='grid grid-cols-3 gap-3'>
      {imageList.map((url)=>{return <img src={url} alt="temp"></img>})}
      </div>
    </div>
  )
}

export default Photo