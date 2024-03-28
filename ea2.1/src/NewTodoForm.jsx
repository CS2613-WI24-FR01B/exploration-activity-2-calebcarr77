import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  //setNewItem function changes the value of newItem, newItem is default ""
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    //prevents page from refreshing
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        {/* label is For input text box */}
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          //on change, set input value equal to newItem value
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
