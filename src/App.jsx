import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home"/>
      {/* <TextForm/> */}
      <About/>
    </>
  );
}

export default App;
