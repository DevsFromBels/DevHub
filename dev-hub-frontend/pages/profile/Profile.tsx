import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();
  return <div>Welcome to profile {userId}</div>;
};

export { Profile };
