const ClassCard = ({ classData }) => {
  const { name, image, instructorName, availableSeats, price } = classData;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl h-[300px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Class Name:{" "}
            <span className="text-violet-700 italic font-bold">{name}</span>
          </h2>
          <h2 className="mt-1 mb-3">
            Instructor Name:{" "}
            <span className="text-fuchsia-600 font-bold">{instructorName}</span>
          </h2>
          <div className="flex gap-24">
            <div>
              <p className="font-bold">
                Available Seats:{" "}
                <span className="text-orange-400">{availableSeats}</span>
              </p>
            </div>
            <div>
              <p className="font-bold">
                Price:
                <span className="text-orange-400"> ${price}</span>
              </p>
            </div>
          </div>
          <div className="card-actions mt-4">
            <button className="btn bg-slate-600 text-white font-bold">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
