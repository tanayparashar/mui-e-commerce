import Menu from "./components/Menu/v1/Menu";
import Layout from "./layout/GlobalLayout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Menu />
        <h1>Welcome to my app</h1>
        <p>This is the main content of my app.</p>
      </Layout>
    </>
  );
}

export default App;
