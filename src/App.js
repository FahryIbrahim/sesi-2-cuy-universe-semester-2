import React, { useState, useEffect } from "react";

// Remove this commented out code.
// import Introduction from "./components/introduction";
// import Profile from "./components/profile";

function App() {
  const [pacarSaya, setPacarSaya] = useState(0);
  const [namaPacar, setNamaPacar] = useState("");
  useEffect(() => {
    if (pacarSaya === 1) {
      setNamaPacar("Shania Gracia");
    } else if (pacarSaya === 2) {
      setNamaPacar("Shania Gracia, Freyanashifa");
    } else if (pacarSaya === 3) {
      setNamaPacar("Shania Gracia, Freyanashifa, Reva Fidela");
    } else if (pacarSaya === 4) {
      setNamaPacar("Shania Gracia, Freyanashifa, Reva Fidela, Azizi Shafa Asadel");
    }
  }, [pacarSaya]);
  return (
    <>
      <h5>Pacar saya {namaPacar}</h5>
      <h1>saya memiliki : {pacarSaya} pacar</h1>
      <button onClick={() => setPacarSaya((prev) => prev + 1)}>
        Tambah Pacar
      </button>{" "}
      <button
        onClick={() => {
          if (pacarSaya > 0) {
            setPacarSaya((prev) => prev - 1);
          }
        }}
      >
        Putusin Pacar
      </button>
      {/* <Profile /> */}
      {/* <Introduction name="Fahry Ibrahim" /> */}
      {/* <Introduction name="Shania Gracia" /> */}
    </>
  );
}

export default App;
