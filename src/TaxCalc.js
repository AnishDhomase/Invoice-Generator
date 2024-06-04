export function TaxCalc({ item }) {
  if (!item) return <h2 className="taxMsg">Add item to calculate GST</h2>;

  return (
    <div className="taxOuter">
      <h2>Tax</h2>
      <div className="Tax">
        <li>
          <span className="txt">Tax</span>
          <span className="val">{item.taxPercentage} %</span>
        </li>
        <li>
          <span className="txt">SGST</span>
          <span className="val">{item.GST / 2} ₹</span>
        </li>
        <li>
          <span className="txt">CGST</span>
          <span className="val">{item.GST / 2} ₹</span>
        </li>
        <li>
          <span className="txt">GST</span>
          <span className="val">{item.GST} ₹</span>
        </li>
      </div>
    </div>
  );
}
