import HeroSection from "./components/home/HeroSection";
import ScrollContainer from "./components/home/ScrollContainer";
import PageWrapper from "./components/home/shared/PageWrapper";
import { ScrollProvider } from "./components/home/shared/ScrollContext";
import Header from "./components/layout/Header";
import LeftSide from "./components/layout/LeftSide";
// import { ScrollProvider } from "./components/shared/ScrollContext";
// import PageWrapper from "./components/shared/PageWrapper";

// Import your section components
// import HeroSection from "./components/home/HeroSection";
// import AboutSection from "./components/home/AboutSection";
// import Services from "./components/home/Services";
// import Portfolio from "./components/home/Portfolio";
// import Testimonials from "./components/home/Testimonials";
// import ContactCTA from "./components/home/ContactCTA";

const SECTIONS = [
  { component: HeroSection, id: 'home' },
  // { component: AboutSection, id: 'about' },
  // { component: Services, id: 'services' },
  // { component: Portfolio, id: 'portfolio' },
  // { component: Testimonials, id: 'testimonials' },
  // { component: ContactCTA, id: 'contact' },
];

export default function Home() {
  return (
    <ScrollProvider totalPages={SECTIONS.length}>
      <Header />
      <LeftSide />
      <ScrollContainer>
        {SECTIONS.map(({ component: Component, id }, index) => (
          <PageWrapper key={id} pageIndex={index}>
            <Component />
          </PageWrapper>
        ))}
      </ScrollContainer>
    </ScrollProvider>
  );
}