import React from "react";
import Button from "./components/Button";
import "./index.css";

function App() {
  return (
    <div>
      <Button textOnly={false} className="btn-primary">
        click
      </Button>
      <Button textOnly={true}> out </Button>
    </div>
  );
}

export default App;
