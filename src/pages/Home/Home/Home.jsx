import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../../PopularClasses/PopularClasses";
import PopularInstructor from "../../PopularInstructor/PopularInstructor";
import Collection from "../Collection/Collection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sports Talent Academy | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Collection></Collection>
    </div>
  );
};

export default Home;
