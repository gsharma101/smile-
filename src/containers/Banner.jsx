import BannerCards from "../components/BannerCards";
import { Home, Hert, Hand, HandLove } from "../assets/icons";
export default function Banner() {
  return (
    <section className="section-banner flex justify-center w-full">
      <div className="flex rounded-2xl p-10 justify-between banner w-3/4">
        <BannerCards img={Home} number="563" para="Project Completed" />
        <BannerCards img={Hert} number="425" para="Trusted Partner" />
        <BannerCards img={Hand} number="978" para="Money Donated" />
        <BannerCards img={HandLove} number="32" para="Active Volenteer" />
      </div>
    </section>
  );
}
