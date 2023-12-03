import { useState } from "react";
import TitleSection from "../../../components/TitleSection";
import { useEffect } from "react";
import GalleryCard from "../../../components/GalleryCard";

 

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
      fetch('https://assingment-12-backend.vercel.app/gallery')
        .then(res => res.json())
        .then(data => setGallery(data)) // Use setService to update the state
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <div>
            <TitleSection title='OUR GALLERY'></TitleSection>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            {
                gallery?.map(item=><GalleryCard key={item.title} item={item}></GalleryCard>)
            }
            </div>
        </div>
    );
};

export default Gallery;