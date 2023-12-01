 
import TitleSection from '../../../components/TitleSection';

const AboutUs = () => {
    return (
       <div>
        <TitleSection title='about us'></TitleSection>
         <div className="hero   bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
               
              <div className="w-1/2"> <img src="https://i.ibb.co/hY9CyYG/about-style4-image-1.jpg" className=" w-full rounded- shadow-2xl" /></div>
               
                <div className='w-1/2  p-10'>
                    <h1 className="text-5xl font-bold">OUR 10 YEARS WORKING
                        EXPERIENCE DESIGN.</h1>
                    <h2 className="py-6 font-bold">Nulla feugiat aliquam purus, ac ultrices augue aliquam vel. Sed venenatis a nunc.</h2>
                    <h2 className="py-6">Donec scelerisque dolor id nunc dictum, interdum gravida mauris rhoncus. Aliquam at ultrices nunc. In sem leo, fermentum at lorem in, porta finibus mauris. Aliquam consectetur, ex in gravida porttitor</h2>
                    <div className="mt-10 py-8 pl-8 font-bold text-xl uppercase bg-orange-500">
                    <li>
                    <span className='text-white'>10</span> YEARS EXPERIENCE.
                    </li>
                    <li>
                    <span className='text-white'>350</span> PROJECTS COMPLATED.
                    </li>
                    <li>
                    <span className='text-white'>20+</span> WORLDWIDE BRANCHES.
                    </li>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default AboutUs;