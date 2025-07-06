import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ErrorState from "../components/ui/ErrorState";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <ErrorState
      title={t("error.pageNotFound")}
      description={t("error.pageNotFoundDescription")}
      actionText={t("error.goToHome")}
      onActionClick={() => navigate("/")}
    />
  );
};

export default NotFound;