import CaseStudies from './components/CaseStudies';
import Companies from './components/Companies';
import CTA from './components/CTA';
import Header from './components/Header';
import Headings from './components/Headings';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="flex flex-col gap-[80px] py-[30px] p-[100px]">
      <Navbar />
      <Header />
      <Companies />
      <Headings
        heading={'Services'}
        subheading={
          'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'
        }
      />
      <Services />
      <CTA />
      <Headings
        heading={'Case Studies'}
        subheading={
          'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'
        }
      />
      <CaseStudies />
      <Headings
        heading={'Our Working Process '}
        subheading={'Step-by-Step Guide to Achieving Your Business Goals'}
        width={'less'}
      />
    </div>
  );
}

export default App;
