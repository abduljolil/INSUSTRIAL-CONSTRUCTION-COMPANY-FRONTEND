import { useEffect, useState } from "react";
import TitleSection from "../../../components/TitleSection";
import { json } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard";


const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data)) // Use setService to update the state
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    
    return (
        <div>
            <TitleSection title='our services'></TitleSection>
            <div className="flex sm:flex-col md:flex-row justify-between">
                <div className="text-3xl font-semibold w-1/2">
                    We Craft Beautifully Useful
                    Marketing And Digital Products
                    That Grow <span className="font-bold">- Our Lebuild.</span>
                </div>
                <div className="w-1/2 ">
                    <h2 className="font-semibold">There are many variations of passages of Lorem Ipsum available, have suffered in form, by injected humour</h2>
                    <p className=" pt-5">If you are going to use a passage of Lorem Ipsum, you need to be sure anything embarrassing hidden in the middle of text.</p>
                </div>
            </div>
            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
            {
                service?.map(item=><ServiceCard key={item.title} item={item}></ServiceCard>)
            }
            </div>

        </div>
    );
};

export default Services;