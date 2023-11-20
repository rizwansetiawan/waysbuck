const Button = (props) => {
  const {
    children,
    className = "bg-[#BD0707] font-semibold mt-7 h-[35px] text-white rounded-md",
  } = props;

  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
};

export default Button;
