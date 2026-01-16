import Layout from "@/components/layout/Layout";
import AnimatedHero from "@/components/home/AnimatedHero";
import EditorialIntro from "@/components/home/EditorialIntro";
import StatsSection from "@/components/home/StatsSection";
import VideoTextSplit from "@/components/home/VideoTextSplit";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import ServicesHomeSection from "@/components/home/ServicesHomeSection";
import PlansHomeSection from "@/components/home/PlansHomeSection";
import FullWidthVideoDivider from "@/components/home/FullWidthVideoDivider";
import CoverageSection from "@/components/home/CoverageSection";
import FeatureSection from "@/components/home/FeatureSection";
import TechSection from "@/components/home/TechSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import FAQSection from "@/components/home/FAQSection";
import StatementSection from "@/components/home/StatementSection";
import FinalVideoSection from "@/components/home/FinalVideoSection";

const Index = () => {
  return (
    <Layout>
      <AnimatedHero />
      <EditorialIntro />
      <StatsSection />
      <VideoTextSplit />
      <HowItWorksSection />
      <ServicesSection />
      <ServicesHomeSection />
      <PlansHomeSection />
      <FullWidthVideoDivider />
      <CoverageSection />
      <FeatureSection />
      <TechSection />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <StatementSection />
      <FinalVideoSection />
    </Layout>
  );
};

export default Index;
