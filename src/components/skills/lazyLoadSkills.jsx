// Import dynamic from 'next/dynamic' to enable lazy loading
import dynamic from 'next/dynamic';

// Dynamically import the SkillsContainer component
const LazySkillsContainer = dynamic(
  () => import('./SkillsContainer'),
  {
    loading: () => <p>Loading skills...</p>, // Optional: Fallback while the component is being loaded
    ssr: false, // Disable server-side rendering if the component is client-side only
  }
);

export default LazySkillsContainer;
