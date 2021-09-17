import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import React from "react";

export const userContext = React.createContext({
  user: null,
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState(null);
  const value = { user, setUser };
  return (
    <userContext.Provider value={value}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </userContext.Provider>
  );
}

export default App;
