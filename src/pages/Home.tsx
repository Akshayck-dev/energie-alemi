import HomeHero from '../sections/HomeHero';
import HomeFeatures from '../sections/HomeFeatures';
import HomeServices from '../sections/HomeServices';
import HomePromise from '../sections/HomePromise';
import HomeMeeting from '../sections/HomeMeeting';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeFeatures />
      <HomeServices />
      <HomePromise />
      <HomeMeeting />
    </div>
  );
}
