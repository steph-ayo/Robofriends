import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Item Search</h1>
      <SearchBar></SearchBar>
    </div>
  );
}

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ]);

  // Function to handle input changes and update the search term
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an item"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {items
          .filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}
