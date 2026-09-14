import { useState } from 'react';

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
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;