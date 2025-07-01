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
    <>
      {/* px-[20px] md:px-[60px] 2xl:p-[100px] */}
      <div className="flex h-full flex-col gap-[70px] pt-[30px] overflow-hidden  bg-white">
        <div className="h-full flex  flex-col justify-between gap-[70px]">
          <div className="px-[20px]  md:px-[60px] 2xl:px-[100px]">
            {' '}
            <Navbar />
          </div>
          <div className="px-[20px]  md:px-[60px] 2xl:px-[100px]">
            <Header />
          </div>
        </div>

        <div className="h-full">
          <Companies />
        </div>
        <div className="px-[20px]  md:p-[60px] 2xl:px-[100px] flex flex-col gap-[50px]">
          <Headings
            heading={'Services'}
            subheading={
              'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'
            }
          />
          <Services />
        </div>

        <div className="px-[20px] md:px-[60px] 2xl:px-[100px]">
          {' '}
          <CTA />
        </div>
        <div className="px-[20px] md:p-[60px] 2xl:px-[100px] flex flex-col gap-[50px]">
          <Headings
            heading={'Case Studies'}
            subheading={
              'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'
            }
          />
          <CaseStudies />
        </div>
        <div className="px-[20px] md:p-[60px] 2xl:px-[100px] flex flex-col gap-[50px]">
          {' '}
          <Headings
            heading={'Our Working Process '}
            subheading={'Step-by-Step Guide to Achieving Your Business Goals'}
            width={'less'}
          />
          <WorkProcess />
        </div>
        <div className="px-[20px] md:px-[60px] 2xl:px-[100px] flex flex-col gap-[50px]">
          <Headings
            heading={'Team '}
            subheading={
              'Meet the skilled and experienced team behind our successful digital marketing strategies'
            }
          />
          <Team />
        </div>

        <div className="px-[20px] md:p-[60px] 2xl:px-[100px] flex flex-col gap-[50px]">
          <Headings
            heading={'Testimonials'}
            subheading={
              'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'
            }
          />
          <Testimonial />
        </div>
        <div className="px-[20px] md:p-[60px] 2xl:px-[100px] flex flex-col gap-[50px]">
          {' '}
          <Headings
            heading={'Contact Us'}
            subheading={`Connect with Us: Let's Discuss Your Digital Marketing Needs`}
            width={'less'}
          />
          <Contact />
        </div>
      </div>
      <div className="flex flex-col pt-[100px] bg-white overflow-hidden px-0 md:px-[60px] 2xl:px-[100px]">
        <Footer />
      </div>
    </>
  );
}

export default App;
