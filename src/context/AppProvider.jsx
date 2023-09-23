import { createContext, useContext, useEffect, useState } from "react";
import { ref, child, get } from "firebase/database";
import { db } from "../config/firebase-config";

const chatContext = createContext();

const AppProvider = ({ children }) => {
  const [rollNo, setRollNo] = useState();
  const [fetchedPassword, setFetchedPassword] = useState();
  const [fetchedEmail, setFetchedEmail] = useState();
  const [data, setData] = useState();

  const handleFetchData = async () => {
    get(child(ref(db), "Users/" + rollNo))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const res = snapshot.val();
          setFetchedEmail(res?.user?.email);
          setFetchedPassword(res?.user?.password);
          setData(res);
          localStorage.setItem("rollNo", rollNo);
        } else {
          console.log("Data not available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <chatContext.Provider
      value={{
        rollNo,
        setRollNo,
        fetchedPassword,
        setFetchedPassword,
        fetchedEmail,
        setFetchedEmail,
        data,
        handleFetchData,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};

export const AppState = () => {
  return useContext(chatContext);
};

export default AppProvider;
