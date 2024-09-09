export default function BannerCards({ img, number, para }) {
  return (
    <div>
      <div className="flex flex-col text-white items-center justify-center">
        <img src={img} alt="image" width={70} height={70} />
        <div>
          <h3 className="color-yellow footerListHeading font-bold text-5xl">{number}</h3>
        </div>
        <div>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}
