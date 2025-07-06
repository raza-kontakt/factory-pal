import React from "react";
import {
  Box,
  Card,
  CardContent,
  Skeleton,
  type SkeletonProps,
} from "@mui/material";
import Container from "../../components/common/Container";
import SkeltonMetricDetails from "../../components/ui/Skelton/SkeltonMetricDetails";
import SkeltonTable from "../../components/ui/Skelton/SkeltonTable";

const detailFields = [
  { labelWidth: 80, valueWidth: 120 },
  { labelWidth: 60, valueWidth: 150 },
  { labelWidth: 100, valueWidth: 100 },
  { labelWidth: 50, valueWidth: 90, variant: "rounded", height: 28 },
];

const ShiftDetailsSkeleton: React.FC = () => {
  return (
    <Container>
      <Box>
        <Skeleton
          variant="text"
          width="300px"
          height={48}
          sx={{ borderRadius: 1, bgcolor: "#f3f4f6", mb: 1 }}
        />
      </Box>

      <Box>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            mb: 3,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box display="flex" flexWrap="wrap" gap={3} mb={3}>
              {detailFields.map((field, idx) => (
                <Box key={idx} flex="1" minWidth="200px">
                  <Skeleton
                    variant="text"
                    width={field.labelWidth}
                    height={24}
                    sx={{ bgcolor: "#f3f4f6", mb: 1 }}
                  />
                  <Skeleton
                    variant={field.variant as SkeletonProps["variant"]}
                    width={field.valueWidth}
                    height={field.height || 22}
                    sx={{
                      bgcolor: "#f3f4f6",
                      borderRadius:
                        field.variant === "rounded" ? "14px" : undefined,
                    }}
                  />
                </Box>
              ))}
            </Box>

            <Box sx={{ height: 1, bgcolor: "#e5e7eb", my: 2 }} />

            {[100, "100%", "60%"].map((width, i) => (
              <Skeleton
                key={i}
                variant="text"
                width={width}
                height={22 + (i === 0 ? 2 : 0)}
                sx={{ bgcolor: "#f3f4f6", mb: i < 2 ? 1 : 0 }}
              />
            ))}
          </CardContent>
        </Card>
      </Box>

      <SkeltonMetricDetails />

      <SkeltonTable />
    </Container>
  );
};

export default ShiftDetailsSkeleton;
