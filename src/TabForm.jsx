import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

export default function TabForm() {
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const [data, setData] = useState({
    name: "vinuta",
    age: 24,
    email: "pracice@dev.com",
    Interests: ["cooking", "drawing", "singing"],
    theme:"dark"
  });
  const [activeTab, setActiveTab] = useState(0);
  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick=()=>{
    setActiveTab((prev)=>prev+1)
  }

  const handlePrevClick=()=>{
    setActiveTab((prev)=>prev-1)
  }
  const submitClick=()=>{
//make api call
  }
  return (
    <div>
      <div className="tab-heading">
        {tabs.map((t, index) => (
          
            <div key={index} className="heading" onClick={()=>setActiveTab(index)}>
              {t.name}
            </div>
          
        ))}
      </div>
      <div className="tabs">
        <ActiveTabComponent data={data} setData={setData}/>
      </div>
      <div>
        {activeTab>0 && <button onClick={handlePrevClick}> Prev
          </button>}
          {activeTab=== tabs.length-1 && <button onClick={submitClick}> Submit
          </button>}
          {activeTab< tabs.length-1 && <button onClick={handleNextClick}> Next
          </button>}
        </div>

    </div>
  );
}
