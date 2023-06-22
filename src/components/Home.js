import AuthDetail from "./AuthDetails"

import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
import '../App.css'
import { useNavigate } from 'react-router-dom';

const MyNotification =() =>{
  

    addNotification({
        title: 'Warning',
        message: 'Button Pressed',
        theme: 'red',
        closeButton:"X",
      })
};


const Home = () => {
  const navigate = useNavigate();

  const photoPath = () => {
    navigate('/photo')
  }
  const textPath = () => {
    navigate('/text')
  }
  const calcPath = () => {
    navigate('/calc')
  }
  

  return (
    <div className="bg-slate-300 h-[100vh] ">
      <h1 className=" text-center pt-10 text-3xl font-mono font-bold">DashBoard</h1>
    <nav className='grid grid-cols-2 gap-2'>
        <Notifications />
        
        <button className="notification h-[28vh] w-[70vh] mr-[10vh] ml-[15vh] mt-[8vh] bg-slate-100 rounded-lg border-solid hover:bg-slate-200 border-black border-1 " onClick={MyNotification}>
        </button>
        <button className="photobutton h-[28vh] w-[70vh] mr-[10vh] ml-[15vh] mt-[8vh] bg-slate-100 rounded-lg border-solid hover:bg-slate-200 border-black border-1 " onClick={photoPath}>
        </button>
        <button className="note h-[28vh] w-[70vh] mr-[10vh] ml-[15vh] mt-[8vh] bg-slate-100 rounded-lg border-solid hover:bg-slate-200 border-black border-1 " onClick={textPath}>
        </button>
        <button className="clac h-[28vh] w-[70vh] mr-[10vh] ml-[15vh] mt-[8vh] bg-slate-100 rounded-lg border-solid hover:bg-slate-200 border-black border-1 " onClick={calcPath}>
          
        </button>
    </nav>
    <div className="flex items-center justify-center mt-10">
    <AuthDetail />
    </div>
    </div>
  )
}
  


export default Home