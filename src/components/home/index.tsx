import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>hello world</h1>
      <Link to={"/about"}>about</Link>
    </>
  );
};

export default Home;
