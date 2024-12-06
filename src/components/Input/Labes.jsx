const Label = (props) => {
  const { htmlfor, children } = props;
  return (
    <label
      htmlFor={htmlfor}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
    </label>
  );
};
export default Label;
