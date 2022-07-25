import React from "react";

const Obje = ({ obje }) => {
  return (
    <div>
      <h3 style={{ color: obje.dbColor }}>{obje.title} </h3>
      <p>{obje.content === "" ? "içerik girilmedi" : obje.content}</p>
    </div>
  );
};

export default Obje;
