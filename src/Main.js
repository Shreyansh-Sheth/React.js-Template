//Do all Stuff Here
//

import React, { useState } from "react";

export default function Main() {
  let [name, setName] = useState("Shreyansh");

  return (
    <div>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
