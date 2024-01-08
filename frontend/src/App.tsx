import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/api/")
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(console.error);
  }, [setMessage]);
  return (
    <div className="App">
      <header className="App-header">
        <p>{`${message} 2928` || "Loading..."}</p>
       Infor projekt
      </header>
    </div>
  );
}

export default App;
