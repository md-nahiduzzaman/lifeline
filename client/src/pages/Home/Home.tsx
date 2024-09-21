import Abouts from "./Abouts/Abouts";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Speciality from "./Speciality/Speciality";

const Home = () => {
  return (
    <div>
      {/* this is the banner section code-for-sanim */}
      <Banner></Banner>
      <Abouts></Abouts>
      <Speciality></Speciality>
      <div className="max-w-screen-xl mx-auto">
      <Services></Services>
      </div>
    </div>
  );
};

export default Home;
