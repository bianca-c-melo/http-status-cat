import {
  Button,
  Menu,
  MenuItem,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../index.css";
import { HttpStatusMessages } from "./http-cat-generator";
import CustomizedSwitches from "./switch";
import { HttpStatusCode } from "axios";

// Define as cores para o tema light
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

// Define as cores para o tema dark
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const HttpCatButton = () => {
  const [randomCode, setRandomCode] = useState<any>();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(true); // Estado para controlar o tema

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
      <MenuItem key={code} onClick={() => handleStatusClick(code)}>
        {code}
      </MenuItem>
    ));
  };

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  // Seleciona o tema com base no estado do tema atual
  const selectedTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <div className="root">
        <h1>Http Cat Generator</h1>
        <div className="card">
          <Button
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={handleMenuToggle}
            size="large"
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
            }}
          >
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </Button>
          {isMenuOpen && (
            <Menu
              anchorEl={null}
              open={isMenuOpen}
              onClose={() => setMenuOpen(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {generateMenuItems()}
            </Menu>
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
          <Button className="big-button" onClick={handleClick}>
            Get Random HTTP Status
          </Button>
          <CustomizedSwitches checked={isDarkTheme} onChange={toggleTheme} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HttpCatButton;
