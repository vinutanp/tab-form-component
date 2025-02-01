export default function Profile({data, setData}) {
  const {name,age,email}=data;
 const handleChange=(e, item)=>{
  setData((prev)=>({...prev,[item]:e.target.value}))
 }
  return (
    <div>
      <form>
        <label>Enter your name:</label>
        <input type="text" value={name} onChange={(e)=>handleChange(e, "name")} required></input>
        <label>Enter your Age:</label>
        <input type="number" value={age} onChange={(e)=>handleChange(e, "age")} required></input>
        <label>Enter your email:</label>
        <input type="text" value={email} onChange={(e)=>handleChange(e, "email")} required></input>
      </form>
    </div>
  );
}
