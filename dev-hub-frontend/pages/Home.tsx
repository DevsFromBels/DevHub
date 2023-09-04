import { Link } from '../components/Link';
import Layout from '../Layouts/Layout';
import { useStore } from "../store/store";
import '../styles/Home.css'

const Home = () => {
  const { user, updateUser } = useStore();

  return (
    <Layout>
      <h2>{user.login}</h2>
      <input
        placeholder="Name"
        value={user.login}
        onChange={(e) =>
          updateUser({
            login: e.target.value,
            email: "",
            password: "",
          })
        }
      />
      <br/>
      <Link href='/login'>Go to login</Link>
    </Layout>
  );
};

export { Home };
