import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SeasonalBanner from "@/components/SeasonalBanner";
import OurStory from "@/components/OurStory";
import MenuSection from "@/components/MenuSection";
import RoasterySection from "@/components/RoasterySection";
import BeanFinder from "@/components/BeanFinder";
import ReviewsSection from "@/components/ReviewsSection";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <SeasonalBanner />
          <OurStory />
          <MenuSection />
          <RoasterySection />
          <BeanFinder />
          <ReviewsSection />
          <LocationHours />
        </main>
        <Footer />
        <ReservationModal />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
