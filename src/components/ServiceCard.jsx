 

const ServiceCard = ({item}) => {
   
    return (
        <div className="card hover:bg-orange-500 hover:text-white bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={item.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description} </p>
          
        </div>
      </div>
    );
};

export default ServiceCard;