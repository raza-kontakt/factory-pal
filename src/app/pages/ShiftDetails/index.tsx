import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { getShift } from "../../services/shift";
import { getShiftLogsCategories } from "../../utils/shiftParser";
import Heading from "../../components/ui/Heading";
import Container from "../../components/common/Container";
import ErrorState from "../../components/ui/ErrorState";
import ShiftOverviewCard from "./ShiftOverviewCard";
import MetricList from "../../components/features/MetricList/MetricList";
import ShiftDetailsSkeleton from "./ShiftDetailsSkeleton";
import AISummary from "../../components/features/AISummary/AISummary";
import ShiftTable from "./ShiftTable";
import BarChart from "../../components/charts/BarChart/BarChart";
import ShiftFilters from "./ShiftFilters";
import { computeShiftData } from "../../utils/shiftParser";

const ShiftDetails: React.FC = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const {
    data: shift,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["shift", id, i18n.language],
    queryFn: () => getShift(id!, i18n.language),
    enabled: !!id,
  });

  if (isLoading) return <ShiftDetailsSkeleton />;

  if (error || !shift) {
    return (
      <ErrorState
        title={t("error.shiftNotFound")}
        description={t("error.shiftNotFoundDescription")}
        actionText={t("error.goToHome")}
        onActionClick={() => navigate("/")}
      />
    );
  }

  const shiftLogCategories = getShiftLogsCategories(shift);
  const allCategories = ["All", ...shiftLogCategories];

  const parsedShift = computeShiftData(shift);
  const { computed } = parsedShift;

  return (
    <Container noPadding>
      <Heading variant="h4">{shift.name}</Heading>

      <ShiftOverviewCard
        shift={shift}
        shiftDuration={`${computed.duration.value} ${computed.duration.unit}`}
      />

      <MetricList
        oee={computed.oee}
        totalDowntime={computed.totalDowntime}
        cleaningTime={computed.cleaningTime}
        availability={computed.availability}
      />

      <AISummary shift={shift} />

      <ShiftFilters
        shiftLogCategories={allCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <ShiftTable
        shift={shift}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <BarChart
        shift={shift}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </Container>
  );
};

export default ShiftDetails;
