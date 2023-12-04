import { useLoaderData } from "react-router-dom";



const Details = () => {
    const employee = useLoaderData();
    // console.log(employee);
    return (
        <div className="lg:flex">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body flex justify-center items-center">
                    <h2 className="card-title ">Name: {employee.name}</h2>
                </div>
                <figure><img src={employee.image} alt="Shoes" /></figure>
            </div>
            <div></div>
        </div>
    );
};

export default Details;