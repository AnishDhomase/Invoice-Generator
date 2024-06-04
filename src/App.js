import { useState } from "react";
import { ItemInput } from "./ItemInput";
import { TaxCalc } from "./TaxCalc";
import { Summary } from "./Summary";

function App() {
  const [item, setItem] = useState(null);

  function handleItem(newItem) {
    setItem(newItem);
  }

  return (
    <div className="outer">
      {!item ? (
        <ItemInput onAddItem={handleItem} />
      ) : (
        <button className="againAdd" onClick={() => setItem(null)}>
          Add Another item
        </button>
      )}
      <Summary item={item} />
      <TaxCalc item={item} />
    </div>
  );
}

export default App;
