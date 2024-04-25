import {
  Button,
  ThemeProvider,
  createTheme,
  TextField,
  Autocomplete,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import "../index.css";
import { HttpStatusMessages } from "./http-cat-generator";
import CustomizedSwitches from "./switch";
import { HttpStatusCode } from "axios";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const HttpCatButton = () => {
  const [randomCode, setRandomCode] = useState<any>();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para a barra de pesquisa

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

  const generateItems = () => {
    const items = Object.values(HttpStatusCode).filter(
      (value) => typeof value === "number"
    );

    const stringItems = items.map((num) => num.toString());

    return stringItems;
  };

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  const handleAutocompleteChange = (value) => {
    if (value) {
      handleStatusClick(value);
    }
  };

  const handleEnter = (event) => {
    const items = generateItems();
    if (event.key === "Enter") {
      const code = searchQuery;
      if (items.includes(code)) {
        handleStatusClick(parseInt(searchQuery));
      } 
    }
  };

  const selectedTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <div className="root">
        <h1>Http Cat Generator</h1>
        <div className="search">
        <Autocomplete
          options={generateItems()}
          onKeyDown={(event) => {
            handleEnter(event);
          }}
          onChange={(_, value) => handleAutocompleteChange(value)}
          onInputChange={(_, value) => setSearchQuery(value)} // Atualiza searchQuery conforme o usuário digita
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search HTTP Status"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              variant="outlined"
              fullWidth
            />
          )}
        />
        </div>
        <div className="card">
          <Button
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={handleMenuToggle}
            size="large"
            style={{
              position: "absolute",
              top: "2rem",
              marginTop: "2rem",
              left: "1rem",
            }}
          ></Button>
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
          <Button
            className="button"
            onClick={handleClick}
            style={{ background: "#172070" }}
            size="large"
          >
            Get Random HTTP Status
          </Button>
          <CustomizedSwitches checked={isDarkTheme} onChange={toggleTheme} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HttpCatButton;
