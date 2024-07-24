import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Blockchain Developer",
          "GoLang Developer",
          "Certified Kubernetes Application Developer",
          "Hyperledger Fabric Certified Practitioner"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
