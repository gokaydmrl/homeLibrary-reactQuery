import React from "react";
import { BsBookshelf } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { GiBookshelf } from "react-icons/gi";
const LoginIcon = () => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <BsBookshelf size={200} />
      {/* <GiBookshelf
        size={40}
        style={{
            position: "absolute",
            margin:"1px"
        }}
      /> */}

      <ImBooks
        size={40}
        style={{
          position: "absolute",
          marginLeft: "40px",
          marginTop: "55px",
        }}
      />
      <ImBooks
        size={40}
        style={{
          position: "absolute",
          marginRight: "80px",
          marginTop: "10px",
        }}
      />
    </div>
  );
};

export default LoginIcon;
