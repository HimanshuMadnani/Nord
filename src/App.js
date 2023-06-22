import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Signup from "./components/Signup";
import Home from './components/Home';
import TextFire from "./components/TextFire";
import Calculator from "./components/Calculator";
import Photo from "./components/Photo";
import AuthDetails from "./components/AuthDetails";
import { NordContexts } from './util/Contexts';
import { useState } from "react";


const App = () => {
  const [authUser, setAuthUser] = useState()
  return (
    
    <div className="App.css">
    <NordContexts.Provider value={{authUser, setAuthUser}}>
      <Router>
        <Routes>
          <Route path="/Nord/" element={<LogIn/>} />
          <Route path="/Nord/sign" element={<Signup/>} />
          <Route path="/Nord/home" element={<Home/>} />
          <Route path="/Nord/photo" element={<Photo/>} />
          <Route path="/Nord/calc" element={<Calculator/>} />
          <Route path="/Nord/text" element={<TextFire/>} />
          <Route path="/Nord/never" element={<AuthDetails/>}/>
        </Routes>  
      </Router>
      </NordContexts.Provider>
    </div>
  );
};

export default App;