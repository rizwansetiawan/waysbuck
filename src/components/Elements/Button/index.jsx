const Button = (props) => {
  const { children } = props;

  return (
    <button
      type="submit"
      className="bg-[#BD0707] mt-7 h-[35px] text-white rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;
