import { useAuth } from "../context/AuthContext";
import PublicHome from "../components/PublicHome";
import PrivateHome from "../components/PrivateHome";

const Home = () => {
  const { user } = useAuth();

  return user ? <PrivateHome /> : <PublicHome />;
};

export default Home;
