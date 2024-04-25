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
    text: {
      primary: "#000000", // Define a cor do texto como preto
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#fff",
    },
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

  const handleAutocompleteChange = (value: string) => {
    if (value) {
      handleStatusClick(parseInt(value));
    }
  };

  const handleEnter = (event: React.KeyboardEvent) => {
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

      <CustomizedSwitches checked={isDarkTheme} onChange={toggleTheme} />

      <div className="root">
        <div className="h1">
          <h1>Http Cat Generator</h1>
        </div>
        <div className="search">
          <Autocomplete
            options={generateItems()}
            onKeyDown={(event) => {
              handleEnter(event);
            }}
            onChange={(_, value) => {
              if (value !== null) {
                handleAutocompleteChange(value);
              }
            }}
            onInputChange={(_, value) => setSearchQuery(value)} // Atualiza searchQuery conforme o usuário digita
            renderInput={(params) => (
              <TextField
                color="info"
                style={{"caretColor": "#7fff00"}}
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
                <p style={{ color: selectedTheme.palette.text.primary }}>
                  {HttpStatusMessages[randomCode].descricao}
                </p>
              </div>
            </>
          ) : null}
          <Button
            className="button"
            onClick={handleClick}
            style={{ background: "#2330a9", color: "#ffffff" }}
            size="large"
          >
            Get Random HTTP Status
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HttpCatButton;
