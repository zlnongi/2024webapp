import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const onClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&limit=10")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  return (
    <div>
      <button onClick={onClick}>클릭</button>
      {data?.map((item, i) => {
        return (
          <>
            <div key={i}>
              {item.id} / {item.title}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
