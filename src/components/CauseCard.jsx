export default function CauseCard({
  img,
  heading,
  description,
  price,
  donation,
}) {
  return (
    <div className="flex bg-white rounded-2xl flex-col w-1/4">
      <div className="card-top">
        <img src={img} alt="img" />
      </div>
      <div className="card-bottom p-4">
        <h3 className="flex flex-col justify-start footerListHeading font-bold text-sm">{heading}</h3>
        <p className="colorgrey text-sm">{description}</p>
        <div>
          <span className="font-bold">{price}</span>
          <span className="text-xs colorgrey">{donation}</span>
        </div>
        <div className="card-bar"></div>
      </div>
    </div>
  );
}
