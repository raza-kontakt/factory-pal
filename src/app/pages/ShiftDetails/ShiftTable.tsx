import { useTranslation } from "react-i18next";
import type { Log, Shift } from "../../types/Shift";
import { shiftCategoryColors } from "../../utils/shiftParser";
import Table from "../../components/common/Table/Table";
import { Box, Chip } from "@mui/material";
import type { ReactNode } from "react";

interface ShiftTableProps {
  shift: Shift;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ShiftTable: React.FC<ShiftTableProps> = ({
  shift,
  selectedCategory,
  onCategoryChange,
}) => {
  const { t } = useTranslation();

  const getChipColor = (category: string) => {
    const colorMap = shiftCategoryColors as Record<
      string,
      "success" | "error" | "warning"
    >;
    return colorMap[category] || "default";
  };

  // Filter logs based on selected category
  const filteredLogs =
    selectedCategory === "All"
      ? shift.logs
      : shift.logs.filter((log: Log) => log.category === selectedCategory);

  const transformedData: Record<string, ReactNode>[] = filteredLogs.map(
    (log: Log) => ({
      id: log.id,
      label: log.label,
      value: log.value,
      type: log.type,
      description: log.description,
      category: (
        <Chip
          label={log.category}
          color={getChipColor(log.category)}
          size="medium"
          onClick={(e) => {
            e.stopPropagation();
            onCategoryChange(log.category);
          }}
        />
      ),
    })
  );

  const columns = [
    {
      Header: t("table.logs.id"),
      accessor: "id",
    },
    {
      Header: t("table.logs.label"),
      accessor: "label",
    },
    {
      Header: t("table.logs.value"),
      accessor: "value",
    },
    {
      Header: t("table.logs.type"),
      accessor: "type",
    },
    {
      Header: t("table.logs.description"),
      accessor: "description",
    },
    {
      Header: t("table.logs.category"),
      accessor: "category",
    },
  ];

  return (
    <Box mb={4}>
      <Table data={transformedData} columns={columns} loading={false} />
    </Box>
  );
};

export default ShiftTable;
