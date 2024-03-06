import { Link } from "react-router-dom";
const FourOFour = () => {
  return (
    <div className="flex justify-center text-xl font-normal p-4 text-red-400">
      Page not found(404), Please go back to {"--->"}
      <Link to={"/"} className="text-green-600">
        {" "}
        Home{" "}
      </Link>
    </div>
  );
};

export default FourOFour;
