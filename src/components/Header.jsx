import headerimage from "../assets/headerimage.svg";
import circle from "../assets/yellow-circle.svg";
import square from "../assets/green-square.svg";

export default function header() {
  return (
    <div className="flex p-20">
      <div className="flex items-center header-box__left w-3/5">
        <div className="flex flex-col content-center headertext">
          <h1 className="font-bold tracking-wide heading text-5xl">
            Empower Hope,
            <br />
            Transform Lives
          </h1>
          <p className="w-3/5">
            The essence of charity by conveying the idea of uplifting
            individuals and communities through the power of hope and positive
            change.
          </p>
        </div>
      </div>
      <div className="header-box__right">
        <div className="relative">
          <div className="absolute -top-10 -left-10">
            <img className="z-30 size-20" src={circle} alt="circle" />
          </div>
          <img className="z-20" src={headerimage} alt="header image" />
          <div className="absolute z-1 -bottom-5 -right-5">
            <img className="z-10 size-20" src={square} alt="square" />
          </div>
        </div>
      </div>
    </div>
  );
}
