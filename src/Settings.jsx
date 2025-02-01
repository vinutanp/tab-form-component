export default function Settings({ data, setData }) {
  const { theme } = data;
  const handleOnChange=(e)=>{
    setData((prev)=>(
      {...prev, theme: e.target.value}
    ))
  }
  return (
    <div>
      <div>
        <label>
          <input type="radio" name="dark" value="dark" checked={theme === "dark"} onChange={handleOnChange}></input>
          Dark
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="light" value="light" checked={theme === "light"} onChange={handleOnChange}></input>
          Light
        </label>
      </div>
    </div>
  );
}
