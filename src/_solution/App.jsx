import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function LogIn({ loggedIn, handleLogin }) {
  console.log("1 LogIn render start");

  function subscribe() {
    handleLogin(true);
  }

  useEffect(() => {
    console.log("2 useEffect start");
    let isMounted = true;

    // timeout simulates async api call
    setTimeout(() => {
      isMounted && subscribe();
    }, 3000);

    return () => {
      console.log("3 useEffect clean-up");
      isMounted = false;
    };
  });

  return (
    <div>
      {loggedIn ? "Logged in" : "Logging in..."}
      {console.log("4 LogIn render end")}
    </div>
  );
}

function App() {
  console.log("5 App render start");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  function handleLogin(logIn) {
    setLoggedIn(logIn);
  }

  return (
    <div className="App">
      <section>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </section>
      <section>
        {showLogIn && (
          <div className="log-in">
            <LogIn loggedIn={loggedIn} handleLogin={handleLogin} />
          </div>
        )}
        <button onClick={() => setShowLogIn(!showLogIn)}>
          {showLogIn ? "Abort log-in" : "Log-In"}
        </button>
        <div>User is {loggedIn ? "logged in" : "logged out"}</div>
      </section>
      {console.log("6 App render end")}
    </div>
  );
}

export default App;
