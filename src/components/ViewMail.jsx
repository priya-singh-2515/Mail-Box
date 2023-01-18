import React from "react";

const ViewMail = ({ mail,deleteMailFunc,showDelete }) => {
  return (
    <div style={{padding: '20px'}}>
     
      {mail ? (
        <>
        {showDelete && <button onClick={()=>{deleteMailFunc(mail.mId)}}>Delete</button>}
          <h2>{mail.subject}</h2>
          <p>{mail.content}</p>
        </>
      ) : (
   
        <div style={{ marginTop: '200px', textAlign:"center"}}><h1>Select Item to show</h1></div>
      )}
    </div>
  );
};

export default ViewMail;
