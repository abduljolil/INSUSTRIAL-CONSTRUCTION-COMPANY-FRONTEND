import React from 'react';

const TitleSection = ({title}) => {
    return (
        <div className="text-center md:w-4/12 mx-auto py-8">
             <h1 className=' text-3xl text-orange-500 uppercase font-bold border-y-4 py-4'>{title}</h1>
        </div>
    );
};

export default TitleSection;