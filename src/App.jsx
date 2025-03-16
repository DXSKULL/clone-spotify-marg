import { useEffect } from "react";
import "./assets/css/style.css";
import AppRouter from "./components/core/AppRouter";
import Layout from "./components/core/Layout";
import { checkAccessToken } from "./services/auth";

export default function App() {
  useEffect(() => {
    async function getAccessToken() {
      try {
        await checkAccessToken();
      } catch (error) {
        console.log(error);
      }
    }
    getAccessToken();
  }, []);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}
