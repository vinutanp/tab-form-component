export default function Interests({ data, setData }) {
  const { Interests } = data;
  const handleChange=(e,name)=>{
    setData((prev)=>({...prev,Interests:e.target.checked ? [...prev.Interests, e.target.name]: prev.Interests.filter((i)=>i!== e.target.name)}))
   }
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="cooking"
          
            checked={Interests.includes("cooking")}
            onChange={handleChange}
          ></input>
          Cooking
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="drawing"
            checked={Interests.includes("drawing")}
            onChange={handleChange}
          ></input>
          Drawing
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="singing"
            checked={Interests.includes("singing")}
            onChange={handleChange}
          ></input>
          Singing
        </label>
      </div>
    </div>
  );
}
