import AboutUs from "./Home/AboutUs";
import Banner from "./Home/Banner";
import Contact from "./Home/Contact";
import Gallery from "./Home/Gallery";
import Services from "./Home/Services";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;