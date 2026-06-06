
export default function Dashboard(){
  const user = JSON.parse(localStorage.getItem("user")||"null");
  const donors = JSON.parse(localStorage.getItem("donors")||"[]");

  return (
    <div style={{padding:20}}>
      <h2>Dashboard</h2>
      <p>User: {user?.email}</p>

      <h3>Donors List</h3>
      {donors.map((d,i)=>(
        <div key={i} style={{border:"1px solid #ccc", margin:5, padding:5}}>
          {d.name} - {d.bg} - {d.loc}
        </div>
      ))}
    </div>
  )
}
