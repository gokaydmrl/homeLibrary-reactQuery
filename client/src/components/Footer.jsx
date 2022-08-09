import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      created by <strong> Gökay Demirel</strong>
      <h6>gokaydemirel96@gmail.com </h6>
      <a href="https://github.com/gokaydmrl">
        <AiFillGithub color="black" size={20} />
      </a>
    </div>
  );
};

export default Footer;
