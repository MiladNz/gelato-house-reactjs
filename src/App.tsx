import { Layout } from "./components/layout";
import HomePage from "./components/pages/home";

function App() {
  return (
    <>
      {/* <h1 className="bg-blue-200">Hello GelatoHouse</h1> */}
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
