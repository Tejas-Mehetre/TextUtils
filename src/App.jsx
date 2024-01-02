import './App.css';
import Nav from './components/Nav';
import TextForm from './components/TextForm';
import About from './components/About';
import React , {useState} from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode , setmode] = useState("light");
  const [alert , setAlert] = useState(null);
  
  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type,
    }),
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let togglemode = () => {
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#002640";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "White";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled" , "success");
    }
  }

  return (
    <>
      <Router>
        <Nav title="TextUtils" home="Home" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
