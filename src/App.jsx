import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { itemName: "Apple", quantity: 10, price: 100 },
    { itemName: "Milk", quantity: 5, price: 80 },
  ]);

  return (
    <>
      <h1>My Shop Inventory</h1>
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