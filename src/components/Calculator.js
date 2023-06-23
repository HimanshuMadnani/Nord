import React, { useState } from 'react'
import { useContext } from 'react';
import { NordContexts } from '../util/Contexts';
import { Navigate } from 'react-router-dom';



  const Calculator = () => {
    
    const [operator, setOperator] =useState("");
    const [num1, setNum1] =useState(0);
    const [num2, setNum2] =useState(0);
    const [result, setResult] =useState(0);
    const {authUser} = useContext(NordContexts)

    const handleCalc =(e) =>{
      e.preventDefault();
      switch(operator){
        case 'Add':
          setResult(parseInt(num1) + parseInt(num2));
          break;
        case 'Sub':
          setResult(parseInt(num1) - parseInt(num2));
          break;
        case 'Mul':
          setResult(parseInt(num1) * parseInt(num2));
          break;
        default:console.log("error");
      }
  }
  if(authUser===null) return <Navigate to="/" />

    return (
      <div className=' justify-items-center bg-slate-300 border rounded-md border-black h-[400px] items-center mt-[20vh] ml-[20vh] mr-[20vh]' >
        <h1 className='text-center text-3xl mt-[3vh] mb-[10vh]'>Calculator</h1>
        <form className='flex justify-items-center ml-[10vh] mr-[10vh] h-[12vh] items-center' onSubmit={handleCalc}>
          <input className='ml-[10vh] border bg-slate-100 focus:bg-slate-200 rounded-md w-[30vh] text-center' type='number' value={num1} onChange={((e)=>{setNum1(e.target.value)})}></input>
          <select className='ml-[10vh] border bg-slate-100 focus:bg-slate-200 rounded-md w-[30vh] text-center' value={operator} onChange={((e)=>{setOperator(e.target.value)})}>
            <option value="">Select Operator</option>
            <option value="Add">Addition</option>
            <option value="Sub">Substraction</option>
            <option value="Mul">Multiplication</option>
          </select>
          <input className='ml-[10vh] border bg-slate-100 focus:bg-slate-200 rounded-md w-[30vh] text-center' type='number' value={num2} onChange={((e)=>{setNum2(e.target.value)})}></input>
          <button className=' border w-[20vh] bg-slate-100 rounded border-solid mt-3 ml-[12vh] pl-2 pr-2 mb-3 hover:bg-slate-200 border-black border-1 m-1.5 p-0.5' type='submit'>Submit</button>
          </form>
          {<p className='pr-[8vh] text-center'>the Result is {result}</p>}
      </div>
    )
  }

  export default Calculator