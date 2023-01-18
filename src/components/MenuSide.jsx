import React, { useState } from "react";

const MenuSide = ({setFilterMail,filterMail}) => {
  const [showFolder, setShowFolder] = useState(true);
  const itemList = [
    "Index",
    "Junk Email",
    "Deleted Items",
  ];
  return (
    <div style={{padding: "5px"}}>
      <h2
        onClick={() => setShowFolder((prev) => !prev)}
        style={{ cursor: "pointer", marginBottom: '5px' }}
      >
        Folder
      </h2>
      <hr />
      {showFolder &&
        itemList.map((item, index) => (
          <div key={index} style={{ marginLeft: "10px" }}>
            <h4 style={{ cursor: "pointer" ,color: filterMail == item ? 'blue' : 'black' }} onClick={()=>{setFilterMail(item)}}>{item}</h4>
          </div>
        ))}
    </div>
  );
};

export default MenuSide;
