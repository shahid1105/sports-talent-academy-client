const PopularInstructorCard = ({ topInstructor }) => {
  const { name, image, email } = topInstructor;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px] p-4 rounded-md" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">TOP Instructor</div>
          </h2>
          <p>Email: {email}</p>
          {/* <div className="card-actions justify-end">
            {classesTaken.map((className, index) => (
              <div key={index} className="badge badge-outline">
                {className}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
