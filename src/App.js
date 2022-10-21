// import logo from './logo.svg';
// import './App.css';
import Login from "./components/authentication/Login";
// import Modal from "./components/Modal"
import User from "./components/User"
// import LogInModal from "./components/authentication/LogInModal";
import { Routes, Route, Navigate } from 'react-router';
import Protected from "./components/Protected";
import Demo from "./components/Demo"

function App() {
  return (
    <div className="App">
      {/* <h2>Hey it's me</h2>s */}
      {/* <User/> */}
      {/* <Login/> */}
      {/* <Modal/> */}
      {/* <LogInModal/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route element={<Protected/>}>
          <Route path='/home' element={<User/>} />
        </Route>
      </Routes>
      {/* <Demo/>s */}
      {/* <h1>Hey it's me</h1> */}
    </div>
  );
}

export default App;
