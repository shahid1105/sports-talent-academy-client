const InstructorsRow = ({ instructor, index }) => {
  const { name, image, classesTaken, numberOfClasses, email } = instructor;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{name}</div>
        </div>
      </td>
      <td>{email}</td>
      <td className="text-center">{numberOfClasses}</td>
      <td>
        {classesTaken.map((className, index) => (
          <div key={index} className="badge badge-outline">
            {className}
          </div>
        ))}
      </td>
      <th>
        <button className="btn btn-ghost btn-xs bg-slate-300 font-bold">
          See Classes
        </button>
      </th>
    </tr>
  );
};

export default InstructorsRow;
