import CaseStudies from './components/CaseStudies';
import Companies from './components/Companies';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';
import Headings from './components/Headings';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import WorkProcess from './components/WorkProcess';

function App() {
  return (
    <div className="flex flex-col gap-[100px] pt-[30px] px-[60px] 2xl:p-[100px]">
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
      <WorkProcess />
      <Headings
        heading={'Team '}
        subheading={
          'Meet the skilled and experienced team behind our successful digital marketing strategies'
        }
      />
      <Team />
      <Headings
        heading={'Testimonials'}
        subheading={
          'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'
        }
      />
      <Testimonial />
      <Headings
        heading={'Contact Us'}
        subheading={`Connect with Us: Let's Discuss Your Digital Marketing Needs`}
        width={'less'}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
