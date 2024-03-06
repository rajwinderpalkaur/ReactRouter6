import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-green-400 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  console.log("I AM RUNNING NOW");
  const response = await fetch("https://api.github.com/users/rajwinderpalkaur");
  return response.json();
};
