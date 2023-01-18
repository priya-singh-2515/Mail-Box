import React from "react";

const MailList = ({ mailData, setViewMailIndex, readMarkFunc,filterMail }) => {
  return (
    <div style={{ padding: "10px" }}>
      <h2>{filterMail}</h2>
      <hr />
      {mailData.length > 0 ? (
        mailData.map((item) => (
          <div
            key={item?.mId}
            onClick={() => {
              setViewMailIndex(item?.mId);
              readMarkFunc(item?.mId);
            }}
            style={{
              marginBottom: "10px",
              cursor: "pointer",
              width: "400px",
              color: item.unread === true ? "blue" : "black",
              backgroundColor: 'lightgray',
              padding: "10px"
            }}
          >
            <h3>{item.subject}</h3>
            <p
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {item.content}
            </p>
          </div>
        ))
      ) : (
        <div style={{ marginTop: '200px', textAlign:"center"}}><h3>Empty box</h3></div>
        
      )}
    </div>
  );
};

export default MailList;
