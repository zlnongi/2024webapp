import React from "react";
import ReadCompo from "../../components/ReadCompo";
import { useParams } from "react-router-dom";

function ReadPage() {
  const { tno } = useParams();
  return (
    <div>
      <ReadCompo tno={tno} />
    </div>
  );
}

export default ReadPage;
