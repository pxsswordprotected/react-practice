const Q2Alert = ({ type, children }) => {
  let classes = "p-4 rounded border ";

  if (type == "success") {
    classes += "bg-green-50 text-green-700 border-green-200";
  }
  if (type == "error") {
    classes += "bg-red-50 text-red-700 border-red-200";
  }

  return (
    <>
      <div className={classes}>
        <strong className="font-bold">
          {type === "success" ? "Success!" : "Error!"}
        </strong>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Q2Alert;

