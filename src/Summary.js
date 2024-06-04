export function Summary({ item, itemTax }) {
  return (
    <div>
      {item && (
        <footer>
          <h2>Summary</h2>
          <div className="content">
            <li>
              <span className="txt">Item Name</span>
              <span className="val">{item.name}</span>{" "}
            </li>
            <li>
              <span className="txt">Item Quantity</span>{" "}
              <span className="val">{item.qty}</span>
            </li>
            <li>
              <span className="txt">Item Price</span>{" "}
              <span className="val">{item.price}</span>
            </li>
            <li>
              <span className="txt">Item Total</span>{" "}
              <span className="val">{item.price * item.qty + item.GST}</span>
            </li>
          </div>
        </footer>
      )}
    </div>
  );
}
