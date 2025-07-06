import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { getShifts } from "../services/shift";
import Table from "../components/common/Table/Table";
import Heading from "../components/ui/Heading";
import Container from "../components/common/Container";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { data: shifts, isLoading } = useQuery({
    queryKey: ["shifts", i18n.language],
    queryFn: () => getShifts(i18n.language),
  });

  const parsedShifts = shifts?.map((shift) => ({
    ...shift,
    date: moment(shift.date).format("DD.MM.YYYY"),
    isComplete: shift.isComplete ? t("common.yes") : t("common.no"),
  }));

  const columns = [
    { Header: t("table.columns.id"), accessor: "id" },
    { Header: t("table.columns.name"), accessor: "name" },
    { Header: t("table.columns.date"), accessor: "date" },
    { Header: t("table.columns.description"), accessor: "description" },
    { Header: t("table.columns.completed"), accessor: "isComplete" },
  ];

  return (
    <Container noPadding>
      <Heading variant="h4" mb={4}>
        {t("home.shifts")}
      </Heading>
      <Table
        data={parsedShifts}
        columns={columns}
        loading={isLoading}
        onRowClick={(row) => {
          navigate(`/shift/${row.id}`);
        }}
      />
    </Container>
  );
};

export default Home;
