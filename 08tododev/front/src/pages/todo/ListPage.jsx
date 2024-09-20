import React from "react";
import ListCompo from "../../components/todo/ListCompo";

function ListPage() {
  return (
    <div>
      <h3 className="text-2xl py-3 text-end">글 리스트</h3>
      <hr className="py-3" />
      <ListCompo />
    </div>
  );
}

export default ListPage;
