import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import Model3DSection from '@/components/Model3DSection';
import TreatmentSection from '@/components/TreatmentSection';
import ExercisesSection from '@/components/ExercisesSection';
import PreventionSection from '@/components/PreventionSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <LoadingScreen />
      <Navigation />
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <StatsSection />
        <div id="3d-model">
          <Model3DSection />
        </div>
        <div id="treatments">
          <TreatmentSection />
        </div>
        <ExercisesSection />
        <div id="prevention">
          <PreventionSection />
        </div>
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
