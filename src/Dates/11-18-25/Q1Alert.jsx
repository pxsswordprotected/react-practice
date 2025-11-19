const Q1Alert = ({ status, children }) => {
  // Base styles applied to all labels
  let classes =
    "text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full ";

  // Dynamic styles based on props
  if (status === "active") {
    classes += "bg-green-100 text-green-800";
  } else if (status === "offline") {
    classes += "bg-gray-100 text-gray-800";
  }

  return <span className={classes}>{children}</span>;
};
export default Q1Alert;
