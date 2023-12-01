

const Banner = () => {
    return (
        <div className="carousel w-full  ">
        <div className="carousel-item relative w-full">
          <img src='https://i.ibb.co/1TF0Lqb/construction-workers-hardhats-plan-skyscraper-using-blueprint-teamwork-generated-by-ai-24640-99855.jpg)' className="w-full rounded-lg" />
          <div className="absolute h-full flex items-center 
           bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        
             <div className="text-white   ml-12  ">
             <img className="pt-5" src="https://i.ibb.co/cNwYDxr/slide-v4-image1.png" alt="" />
              <div className=" space-y-7 ">
              <h1 className='text-6xl   uppercase'>construction <br /> desing & service</h1>
                <p>Ipsum is simply dummy text of the printing and typesetting industry</p>
                <div>
                <button className="btn btn-outline border-0 border-b-4 text-xl font-semibold mr-5 uppercase bg-orange-500">learn More</button>  <button className="btn btn-outline border-0 border-b-4 text-xl font-semibold uppercase bg-orange-500">get a quotes</button>
              </div>
              
             </div>
             <img  src="https://i.ibb.co/nz15LTj/slide-v4-image2.png" alt="" />
             </div>
             <div className="w-[500px] pl-10">  <img src="https://i.ibb.co/qsMCg4T/slide-v4-image3.png" alt="" /></div>
          </div>
          
        </div>
      </div>
    );
};

export default Banner;