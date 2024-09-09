export default function footerlist({ listheading, l1, l2, l3, l4 }) {
  return (
    <div>
      <div>
        <h2>{listheading}</h2>
      </div>
      <div>
        <ul className="list-none">
          <li>{l1}</li>
          <li>{l2}</li>
          <li>{l3}</li>
          <li>{l4}</li>
        </ul>
      </div>
    </div>
  );
}
