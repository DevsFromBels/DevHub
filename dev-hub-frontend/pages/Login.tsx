import Layout from "../Layouts/Layout";
import { useState, useCallback } from "react";
import { Link } from "../components/Link";
import { getHello } from "../api/getHello";
import { IDataLogin } from '../types/pages.type'


const Login = () => {
  const [data, setData] = useState<IDataLogin | undefined>();

  const handleGetData = useCallback(async () => {
    setData(await getHello());
  }, []);

  return (
    <Layout>
      <div>Login</div>
      {data && <div>{data.message}</div>}
      <button onClick={handleGetData}>Get Data From Server</button>
      <Link href="/">Go to home</Link>
    </Layout>
  );
};

export { Login };
