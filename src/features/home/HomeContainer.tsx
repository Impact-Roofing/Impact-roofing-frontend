// features/home/HomeContainer.tsx
import Hero from "./Hero";
import HeroToMapBridge from "./HeroToMapBridge";
import Marketplace from "@/features/home/Marketplace";
import ContactUs from "@/features/home/ContactUs";
import About from "@/features/home/about";
import Metrics from "@/features/home/metrics";
import Services from "@/features/home/services";
import OurTeam from "@/features/home/OurTeam";
import SVGBridge from "@/features/home/SVGBridge";

export default function HomeContainer() {
    return (
        <main>
            <Hero />
            <HeroToMapBridge />
            <About/>
            <Metrics/>
            <Services/>
            <Marketplace/>
            <OurTeam/>
            <SVGBridge/>
            <ContactUs/>
        </main>
    );
}