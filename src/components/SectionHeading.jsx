export default function SectionHeading({ heading, desctiption }) {
  return (
    <div>
      <h2 className="heading">{heading}</h2>
      <p className="description">{desctiption}</p>
    </div>
  );
}
