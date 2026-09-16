import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([ 
    { itemName: "Apple", quantity: 10, price: 100 },
    { itemName: "Milk", quantity: 5, price: 80 },
  ]);
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    function handleAddItem() {
      if (itemName === "") {
        alert("Item name cannot be empty");
        return;
      }
      setItems([...items, { itemName, quantity, price }]);
      setItemName("");
      setQuantity("");
      setPrice("");
    }
    function handleDeleteItem(indexToDelete) {
  setItems(items.filter((item, index) => index !== indexToDelete));
}
  return (
    <>
      <h1>My Shop Inventory</h1>
      <input
  type="text"
  value={itemName}
  onChange={(e) => setItemName(e.target.value)}
  placeholder="Item name"
  
/>
<input
type="text"
value={quantity}
onChange={(e) => setQuantity(e.target.value)}
placeholder="Quantity"
/>
<input
type="text"
value={price}
onChange={(e) => setPrice(e.target.value)}
placeholder="Price"
/>

<button onClick={handleAddItem}>Add Item</button>
      <table>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.itemName}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td><button onClick={() => handleDeleteItem(index)}>Delete</button></td>
          </tr>
        ))}
      </table>
      <p>Total: {items.reduce((sum, item) => sum + (item.quantity * item.price), 0)}</p>
    </>
  );
}


export default App;