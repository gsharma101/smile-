import { CauseCard } from "../components";
import { CardImage1, CardImage2, CardImage3 } from "../assets";
export default function causes() {
  return (
    <section className="flex w-full justify-between p-12">
      <CauseCard
        img={CardImage1}
        heading="Morocco strikes with  earthquake"
        description="Current situation for Morocco have gone horrible due to the strike of Earthquake"
        price="$4400"
        donation="Donated till now"
      />
      <CauseCard
        img={CardImage2}
        heading="Harmful Disease in Air"
        description="World have been infected with deadly life taking virus ..... "
        price="$7888"
        donation="Donated till now"
      />
      <CauseCard
        img={CardImage3}
        heading="Patna suffer with heavy Flood"
        description="People in patna have suffered a very heavy flood in past few days"
        price="$11000"
        donation="Donated till now"
      />
    </section>
  );
}
