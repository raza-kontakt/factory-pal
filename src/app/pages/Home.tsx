import { Button } from "@mui/material";
import Navbar from "../components/common/Navbar";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <h1>{t("home.title")}</h1>
      <Button variant="contained">{t("home.title")}</Button>
    </>
  );
};

export default Home;
