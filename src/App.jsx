import { useEffect, useState } from "react";
import MenuSide from "./components/MenuSide";
import MailList from "./components/MailList";
import ViewMail from "./components/ViewMail";
import maildatajson from "./1_inbox.json";
import spamMaildatajson from "./1_spam.json";

function App() {
  const [inboxMailData, setInboxMailData] = useState(maildatajson);
  const [spamMailData, setSpamMailData] = useState(spamMaildatajson);
  const [deleteMail, setDeleteMail] = useState([]);
  const [filterMail, setFilterMail] = useState("Index");
  const [mailData, setMailData] = useState([]);
  const [viewMailIndex, setViewMailIndex] = useState(mailData[0]?.mId);

  useEffect(() => {
    switch (filterMail) {
      case "Index":
        setMailData(inboxMailData);
        break;
      case "Junk Email":
        setMailData(spamMailData);
        break;
      case "Deleted Items":
        setMailData(deleteMail);
        break;
      default:
        setMailData(inboxMailData);
    }
  }, [filterMail]);

  const markRead = (maillist, setMail, mId) => {
    const filterData = maillist.map((item) => {
      if (item.mId === mId) {
        item.unread = false;
        return item;
      } else {
        return item;
      }
    });
    setMail(filterData);
  };

  const readMarkFunc = (mId) => {
    switch (filterMail) {
      case "Index":
        markRead(inboxMailData, setInboxMailData, mId);
        break;
      case "Junk Email":
        markRead(spamMailData, setSpamMailData, mId);
        break;
    }
  };

  const deleteFunc = (maillist, setMail, mId) => {
    const filterData = maillist.filter((item) => {
      if (item.mId === mId) {
        setDeleteMail(prev =>[...prev, item]);
        return false;
      } else {
        return true;
      }
    });
    setMailData(filterData)
    setMail(filterData);
  };

  const deleteMailFunc = (mId) => {
    switch (filterMail) {
      case "Index":
        deleteFunc(inboxMailData, setInboxMailData, mId);
        break;
      case "Junk Email":
        deleteFunc(spamMailData, setSpamMailData, mId);
        break;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", }}>
      <div style={{ flex: 1}}>
        <MenuSide setFilterMail={setFilterMail} filterMail={filterMail} />
      </div>
      <div style={{ flex: 2, overflowY: "auto",border: '2px solid black',borderWidth:'0 2px 0 2px'  }}>
        <MailList
          mailData={mailData}
          setViewMailIndex={setViewMailIndex}
          readMarkFunc={readMarkFunc}
          filterMail={filterMail}
        />
      </div>
      <div style={{ flex: 4, overflowY: "auto" }}>
        <ViewMail
          mail={mailData.find((item) => item?.mId === viewMailIndex)}
          deleteMailFunc={deleteMailFunc}
          showDelete={filterMail !== "Deleted Items"}
        />
      </div>
    </div>
  );
}

export default App;
