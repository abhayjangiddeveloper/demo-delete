import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>hello about</h1>
      <Link to={"/about"}>about</Link>
    </>
  );
};

export default About;
