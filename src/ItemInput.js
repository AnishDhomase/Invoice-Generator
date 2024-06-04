import { useState } from "react";

export function ItemInput({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(null);
  const [itemCategory, setItemCategory] = useState("Other");

  function addItem(ev) {
    ev.preventDefault();
    if (!itemName || !itemPrice || !itemQuantity) {
      alert("Enter Valid item Details!");
      return;
    }
    let taxPercentage;
    if (itemCategory === "Food") taxPercentage = 5;
    else if (itemCategory === "Other") taxPercentage = 10;
    else if (itemCategory === "Vehicle") taxPercentage = 15;
    else if (itemCategory === "Electronics") taxPercentage = 20;
    else taxPercentage = 30;
    const GST = (itemQuantity * (itemPrice * taxPercentage)) / 100;
    const newItem = {
      name: itemName,
      price: itemPrice,
      qty: itemQuantity,
      type: itemCategory,
      GST: GST,
      taxPercentage: taxPercentage,
    };
    onAddItem(newItem);
    console.log(newItem);

    setItemName("");
    setItemPrice(0);
    setItemQuantity(0);
    setItemCategory("Other");
  }

  return (
    <form className="itemInput" onSubmit={addItem}>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(ev) => setItemName(ev.target.value)}
      />
      <input
        type="number"
        placeholder="Item Price"
        value={itemPrice}
        onChange={(ev) => setItemPrice(Number(ev.target.value))}
      />
      <input
        type="number"
        placeholder="Item Quantity"
        value={itemQuantity}
        onChange={(ev) => setItemQuantity(Number(ev.target.value))}
      />
      <span className="itemCat">
        <label>Item Category</label>
        <select
          value={itemCategory}
          onChange={(ev) => setItemCategory(ev.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Electronics">Electronics</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Luxury">Luxury</option>
          <option value="Other">Other</option>
        </select>
      </span>
      <button onClick={addItem}>Calculate GST</button>
    </form>
  );
}
