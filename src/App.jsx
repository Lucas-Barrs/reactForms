import { useState } from 'react'
import './App.css'
import Authenticate from "./components/Auth";
import SignUpForm from './components/SignUpForm';


export default function App() {
  const [token, setToken] = useState(null);
  // console.log(token)
  return (
    <>
      <SignUpForm setToken={setToken}/>
      <Authenticate token={token}/>
    </>
  );
}