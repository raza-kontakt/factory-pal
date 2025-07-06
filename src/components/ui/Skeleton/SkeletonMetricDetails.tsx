import { Box, Card, CardContent, Skeleton } from "@mui/material";

const cardConfigs = [
  { borderTopColor: "#22c55e", width: 80, labelWidth: 140 },
  { borderTopColor: "#ef4444", width: 100, labelWidth: 120 },
  { borderTopColor: "#f59e0b", width: 70, labelWidth: 100 },
  { borderTopColor: "#22c55e", width: 90, labelWidth: 120 },
];

const SkeletonMetricDetails = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
          mb: 4,
        }}
      >
        {cardConfigs.map((card, idx) => (
          <Card
            key={idx}
            sx={{
              borderRadius: "12px",
              minHeight: "140px",
              borderTop: `4px solid ${card.borderTopColor}`,
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Skeleton
                variant="text"
                width={card.width}
                height={40}
                sx={{
                  bgcolor: "#f3f4f6",
                  mb: 1,
                  mx: "auto",
                  fontSize: "2rem",
                }}
              />
              <Skeleton
                variant="text"
                width={card.labelWidth}
                height={18}
                sx={{ bgcolor: "#f3f4f6", mx: "auto" }}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default SkeletonMetricDetails;
