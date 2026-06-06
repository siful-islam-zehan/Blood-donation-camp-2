
import { useState } from "react";

export default function Donate(){
  const [form,setForm]=useState({});

  const submit=()=>{
    const old = JSON.parse(localStorage.getItem("donors")||"[]");
    old.push(form);
    localStorage.setItem("donors", JSON.stringify(old));
    alert("Registered as donor");
  }

  return (
    <div style={{padding:20}}>
      <h2>Become a Donor</h2>

      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Blood Group" onChange={e=>setForm({...form,bg:e.target.value})}/>
      <input placeholder="Location" onChange={e=>setForm({...form,loc:e.target.value})}/>

      <button onClick={submit}>Submit</button>
    </div>
  )
}
