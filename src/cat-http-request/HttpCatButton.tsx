import { HttpStatusCode } from "axios";
import { useState } from "react";
import { HttpStatusMessages } from "./http-cat-generator";

const HttpCatButton = () => {
  const [randomCode, setRandomCode] = useState<any>();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleStatusClick = (code: number) => {
    setMenuOpen(false);
    setRandomCode(code);
  };

  const handleClick = () => {
    const items = Object.values(HttpStatusCode).filter(
      (value) => typeof value === "number"
    );
    const randomCode = items[Math.floor(Math.random() * items.length)];
    setRandomCode(randomCode);
  };

  const generateMenuItems = () => {
    const items = Object.values(HttpStatusCode).filter(
      (value) => typeof value === "number"
    );
    return items.map((code: any) => (
      <li key={code} onClick={() => handleStatusClick(code)}>
        {code}
      </li>
    ));
  };

  return (
    <>
      <h1>Http Cat Generator</h1>
      <div className="card">
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          ☰
        </button>
        {isMenuOpen && (
          <div className="menu">
            <ul className="menu-list">
              {generateMenuItems()}
            </ul>
          </div>
        )}
        {randomCode ? (
          <>
            <img
              className="responsive-image"
              src={`https://http.cat/${randomCode}`}
              alt={`HTTP Status ${randomCode}`}
            />
            <div>
              <h3>{HttpStatusMessages[randomCode].titulo}</h3>
              <p>{HttpStatusMessages[randomCode].descricao}</p>
            </div>
          </>
        ) : null}
        <button className='big-button' onClick={handleClick}>Get Random HTTP Status</button>
      </div>
    </>
  );
};

export default HttpCatButton;
