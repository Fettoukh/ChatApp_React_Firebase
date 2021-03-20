import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import "./App.css";
import { useStateValue } from "./reactContext/StateProvider";
import { actionTypes } from "./reactContext/reducer";
import { auth } from "./firebase";
import Login from "./components/Login";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: actionTypes.LOG_IN,
          user: {
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          },
        });
      } else {
        dispatch({
          type: actionTypes.LOG_OUT,
        });
      }
    });
    return () => {};
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
