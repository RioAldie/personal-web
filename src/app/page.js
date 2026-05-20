import Stacks from '@/components/stack/stacks';
import ListProject from '@/components/projects/listProject';
import CertificateContainer from '@/components/certificates/container';
import HeroSection from '@/components/hero/heroSection';
import ExperienceSection from '@/components/experience/experienceSection';

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto w-full p-4 flex flex-col gap-40 relative-content">
      <HeroSection />
      <Stacks />
      <ExperienceSection />
      <ListProject />
      <CertificateContainer />
    </main>
  );
}
