import Abouts from "./Abouts/Abouts";
import Banner from "./Banner/Banner";
import Speciality from "./Speciality/Speciality";

const Home = () => {
  return (
    <div>
      {/* this is the banner section code-for-sanim */}
      <Banner></Banner>
      <Abouts></Abouts>
      <Speciality></Speciality>
    </div>
  );
};

export default Home;
