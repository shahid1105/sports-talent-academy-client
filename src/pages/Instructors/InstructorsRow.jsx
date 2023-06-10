const InstructorsRow = ({ instructor, index }) => {
  const { name, image, email } = instructor;
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
        <div className="font-bold">{name}</div>
      </td>
      <td>{email}</td>
      <td>
        <button className="btn btn-ghost btn-xs bg-slate-300 font-bold">
          See Classes
        </button>
      </td>
    </tr>
  );
};

export default InstructorsRow;
