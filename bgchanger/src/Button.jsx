const Button = ({ btncolor, parentClick }) => {

  const changeColor = (e) => {
    e.preventDefault();
    var value = e.target.innerHTML;
    parentClick(value);
  };

  return (
    <div>
      <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: btncolor }}
        onClick={changeColor}
      >
        {btncolor}
      </button>
    </div>
  );
};
export default Button