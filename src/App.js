
import './App.css';
import logo from './assest/output-onlinepngtools.png';
import { Button } from '@material-ui/core';

import Login from './components/login/Login';
import Backgroundui from './components/backgroundui/Backgroundui';
function App() {
  return (
  <div className="App">
       
      <Backgroundui />
      <div className="container-top">
        <div className="title">DOOF</div>
        <div className="button"><Button type="submit" className="btn " color="primary" style={{ background:"#F7D832" ,height: "40px",width:"120px" ,font:"Montserrat" ,style:"SemiBold",
            cursor: "pointer",weight: "400"}}>Test</Button></div>
      </div>
      <div className="container-content">
        <Login />
        <div className="right">
            <div className="one">Unlock your stuck revenue.</div>
              <div className="content">We help you unlock the true potential connect with your customers to understand the rights and wrongs with your product.</div>
                <div className="cover"></div>
                <img src={logo} alt="" width="340px" height="320px"/>
                <div className="bubble4"></div>
            </div>
        </div>
  </div>
  );
}

export default App;
