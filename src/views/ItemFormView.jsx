import React, { useEffect, useState } from "react";
import ListUsersComponent from "../components/ListUsersComponent";

const initialState = [{ id: 1, name: "Islas" },{ id: 1, name: "Coder" }];

const ItemFormView = () => {
  const [users, setUsers] = useState(initialState);
  const [text, setText] = useState("");

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  useEffect(() => {
    console.log("render ItemFormView");
  });

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6">
          <input className="form-control" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="col-5">
          <button className="btn btn-secondary" onClick={handleAdd}>
            add
          </button>
        </div>
      </div>
      <ListUsersComponent users={users} />
    </React.Fragment>
  );
};

export default ItemFormView;
