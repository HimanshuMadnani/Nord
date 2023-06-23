import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route exact path={`${process.env.PUBLIC_URL}`} element={<LogIn/>} />
          <Route path="/sign" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/photo" element={<Photo/>} />
          <Route path="/calc" element={<Calculator/>} />
          <Route path="/text" element={<TextFire/>} />
          <Route path="/never" element={<AuthDetails/>}/>
        </Routes>  
      </Router>
      </NordContexts.Provider>
    </div>
  );
};

export default App;