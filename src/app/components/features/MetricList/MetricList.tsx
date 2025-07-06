import { Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import MetricCard from "./MetricCard";

export interface TimeMetric {
  value: number;
  unit: string;
}

export interface MetricCardsProps {
  oee: number | undefined;
  totalDowntime: TimeMetric;
  cleaningTime: TimeMetric;
  availability: TimeMetric;
}

const GridConfig = {
  xs: 12,
  sm: 6,
  md: 6,
  lg: 3,
};

const MetricList = ({
  oee,
  totalDowntime,
  cleaningTime,
  availability,
}: MetricCardsProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid size={GridConfig}>
          <MetricCard
            title={t("metrics.overallEquipmentEfficiency")}
            value={oee || 0}
            unit="%"
            color="success"
          />
        </Grid>
        <Grid size={GridConfig}>
          <MetricCard
            title={t("metrics.totalDowntime")}
            value={totalDowntime.value}
            unit={totalDowntime.unit}
            color="error"
          />
        </Grid>
        <Grid size={GridConfig}>
          <MetricCard
            title={t("metrics.cleaningTime")}
            value={cleaningTime.value.toFixed(0)}
            unit={cleaningTime.unit}
            color="warning"
          />
        </Grid>
        <Grid size={GridConfig}>
          <MetricCard
            title={t("metrics.availability")}
            value={availability.value}
            unit={availability.unit}
            color="info"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MetricList;
