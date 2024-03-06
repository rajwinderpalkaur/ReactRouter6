import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <h1 className="flex justify-center text-green-800 text-3xl font-normal">
      {" "}
      User Imformation: {userId}
    </h1>
  );
};

export default User;
