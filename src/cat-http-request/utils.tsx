import { HttpStatusCode } from "axios";
import { useState } from "react";


import { HttpStatusMessages } from "./http-cat-generator";

const HttpCatButton = () => {
  const [randomCode, setRandomCode] = useState<any>();

  const handleClick = () => {
    const items = Object.values(HttpStatusCode).filter(
      (value) => typeof value === "number"
    );
    const randomCode = items[Math.floor(Math.random() * items.length)];
    setRandomCode(randomCode);
  };

  return (
    <>
      <h1>HTTP CAT GENERATOR</h1>
      <div className="card">
        {randomCode ? (
          <>
            <img
              src={`https://http.cat/${randomCode}`}
              alt={`HTTP Status ${randomCode}`}
            />
            <div>
              <h3>{HttpStatusMessages[randomCode].titulo}</h3>
              <p>{HttpStatusMessages[randomCode].descricao}</p>
            </div>
          </>
        ) : null}
        <button onClick={handleClick}>Get Random HTTP Status</button>
      </div>
    </>
  );
};

export default HttpCatButton;
