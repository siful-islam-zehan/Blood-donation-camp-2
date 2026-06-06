
import { useState } from "react";

export default function Login(){
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");

  const login=()=>{
    localStorage.setItem("user", JSON.stringify({email}));
    alert("Logged in");
  }

  return (
    <div style={{padding:20}}>
      <h2>Login</h2>
      <input placeholder="email" onChange={e=>setEmail(e.target.value)} />
      <br/>
      <input placeholder="password" type="password" onChange={e=>setPass(e.target.value)} />
      <br/>
      <button onClick={login}>Login</button>
    </div>
  )
}
