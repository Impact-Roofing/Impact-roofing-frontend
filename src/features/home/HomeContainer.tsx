// features/home/HomeContainer.tsx
import Hero from "./Hero";
import HeroToMapBridge from "./HeroToMapBridge";
import Map from "./Map";
import HowItWorks from "@/features/home/HowItWorks";
import Marketplace from "@/features/home/Marketplace";
import RoofingPartner from "@/features/home/RoofingPartner";
import FAQ from "@/features/home/FAQ";
import ContactUs from "@/features/home/ContactUs";
import About from "@/features/home/about";
import Metrics from "@/features/home/metrics";

export default function HomeContainer() {
    return (
        <main>
            <Hero />
            <HeroToMapBridge />
            <About/>
            <Metrics/>
            <HowItWorks/>
            <Marketplace/>
            <RoofingPartner/>
            <FAQ/>
            <ContactUs/>

        </main>
    );
}