 

const GalleryCard = ({item}) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>< img src={item.img} className="w-full  h-[450px]" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-lg font-medium">{item.title}</h2>
          <p className="text-3xl font-bold">{item.description}</p>
        </div>
      </div>
    );
};

export default GalleryCard;