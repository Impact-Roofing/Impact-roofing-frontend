// features/home/HomeContainer.tsx
import Hero from "./Hero";
import Map from "./Map";
import HowItWorks from "@/features/home/HowItWorks";
import Marketplace from "@/features/home/Marketplace";
// import VideoBanner from "./VideoBanner";
// import StormAlert from "./StormAlert";
// ...el resto de secciones cuando existan

export default function HomeContainer() {
    return (
        <main>
            <Hero />
            <Map/>
            <HowItWorks/>
            <Marketplace/>
            {/* <VideoBanner /> */}
            {/* <StormAlert /> */}
        </main>
    );
}