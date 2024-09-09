import footerlogo from "../assets/footerlogo.svg";
import FooterList from "./footerlist";
export default function footer() {
  return (
    <footer className="text-white rounded-lg m-6">
      <div className="footer-container flex justify-between p-20">
        <div>
          <img src={footerlogo} alt="logo" />
        </div>
        <FooterList
          listheading="Company"
          l1="About"
          l2="Features"
          l3="Works"
          l4="Career"
        />

        <FooterList
          listheading="Help"
          l1="Customer Support"
          l2="Delivery Details"
          l3="Terms & Conditions"
          l4="Privacy Policy"
        />

        <FooterList
          listheading="Resources"
          l1="Free eBooks"
          l2="Development Tutorial"
          l3="How to - Blog"
          l4="Youtube Playlist"
        />
      </div>
      <div className="flex flex-col justify-center align-middle p-5">
        <div className="w-1/2 min-h-2"> </div>
        <p>© Copyright 2023-24, All Rights Reserved by Charity</p>
      </div>
    </footer>
  );
}
