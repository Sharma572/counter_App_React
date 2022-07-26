import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [count, update] = useState(0);

  function updateCount(eve) {
    if (eve == "add") {
      update(count + 1);
    } else if (eve == "sub" && count > 0) {
      update(count - 1);
    }
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => updateCount("add")}>add</button>
      <button onClick={() => updateCount("sub")}>subtract</button>
    </div>
  );
}
