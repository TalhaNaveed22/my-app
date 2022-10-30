import React,{ useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//let name = "Harry3";
function App() {
  const [mode, setMode]= useState('light');//whether dark mode is enabled or not
  const [alert, setAlert]= useState("");
  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type: type
    })
  }
  const toggleMode =()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Has Been Enabled","success");
      document.title = "MyApp - Dark Mode";
      // setInterval(() => {
      //   document.title ="Install MyApp Now";
      // },1000);
      // setInterval(() => {
      //   document.title ="MyApp is Amazing";
      // },2000);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success");
      document.title = "MyApp - Light Mode";
    }
  }
  return (
    <>
      {/* <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident blanditiis fugiat debitis,
         perspiciatis optio impedit facere. Provident nobis, at atque in, 
         eligendi ratione dolor omnis recusandae adipisci consectetur, quae culpa magni? 
         Omnis reprehenderit doloremque molestias perspiciatis itaque magnam est, magni neque totam, 
         tempore dolor aut inventore minus facere!</p>
    </div> */}
    {/* <Navbar title="My-App" aboutText="About My-App"/> */}
    {/* <Navbar/> */}
    <Router>
      <Navbar title="My-App"mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </Route>
      </Switch>
      </div>
      </Router>
     
    </>
  );
}
export default App;
