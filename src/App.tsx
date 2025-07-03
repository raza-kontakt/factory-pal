import { Button } from "@mui/material";
import "./global.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("home.title")}</h1>
      <Button variant="contained">{t("home.title")}</Button>
    </>
  );
}

export default App;
