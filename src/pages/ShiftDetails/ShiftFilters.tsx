import { Box, Chip } from "@mui/material";
import { shiftCategoryColors } from "../../utils/shiftParser";

interface ShiftFiltersProps {
  shiftLogCategories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ShiftFilters: React.FC<ShiftFiltersProps> = ({
  shiftLogCategories,
  selectedCategory,
  onCategoryChange,
}) => {
  const getChipColor = (category: string) => {
    const colorMap = shiftCategoryColors as Record<
      string,
      "success" | "error" | "warning"
    >;
    return colorMap[category] || "default";
  };

  return (
    <Box mb={2} >
      {shiftLogCategories.map((category) => (
        <Chip
          key={category}
          label={category}
          color={getChipColor(category)}
          variant={selectedCategory === category ? "filled" : "outlined"}
          size="medium"
          onClick={() => onCategoryChange(category)}
          data-testid="shift-filter-chip"
          sx={{
            marginRight: 1,
            cursor: "pointer",
            opacity: selectedCategory === category ? 1 : 0.7,
            "&:hover": {
              opacity: 1,
            },
          }}
        />
      ))}
    </Box>
  );
};

export default ShiftFilters;
