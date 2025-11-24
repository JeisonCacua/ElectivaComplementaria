import Hero from "../components/Hero";
import MineralSection from "../components/MineralSection";
import AgriculturalSection from "../components/AgriculturaSection";
import SpeciesSection from "../components/SpeciesSection";
import VideoSection from "../components/VideoSection";

const Home = () => {
    return (
        <>
            <Hero />
            <VideoSection />
            <MineralSection />
            <AgriculturalSection />
            <SpeciesSection />
        </>
    );
};

export default Home;
