import Dining from "../components/private-dining/dining";
import HeroPrivateDining from "../components/private-dining/hero-private-dining";
import PrivateDiningSection from "../components/private-dining/private-dining-section";
import EventDining from "../components/private-dining/event-dining";

const page = () => {
  return (
    <>
      <HeroPrivateDining />
      <Dining />
      <PrivateDiningSection />
      <EventDining />
    </>
  );
};

export default page;
