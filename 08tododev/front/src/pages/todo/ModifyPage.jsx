import React from "react";
import ModiCompo from "../../components/todo/ModiCompo";
import { useParams } from "react-router-dom";

function ModifyPage() {
  const { tno } = useParams();
  return (
    <div>
      <ModiCompo tno={tno} />
    </div>
  );
}

export default ModifyPage;
