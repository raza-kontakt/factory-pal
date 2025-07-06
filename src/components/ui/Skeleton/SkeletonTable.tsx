import { Box, Card, CardContent, Skeleton } from "@mui/material";

const tableHeaders = [80, 120, 60, 80, 70];

const SkeletonTable = () => {
  return (
    <Box sx={{ mb: 4 }} data-testid="loading">
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Box
            sx={{
              display: "flex",
              bgcolor: "#f9fafb",
              borderBottom: "1px solid #e5e7eb",
              p: 2,
              gap: 2,
            }}
          >
            {tableHeaders.map((width, idx) => (
              <Box
                key={idx}
                sx={{
                  flex: 1,
                  display: idx === 4 ? { xs: "none", sm: "block" } : "block",
                }}
              >
                <Skeleton
                  variant="text"
                  width={width}
                  height={20}
                  sx={{ bgcolor: "#f3f4f6" }}
                />
              </Box>
            ))}
          </Box>

          {[...Array(8)].map((_, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                borderBottom: index < 7 ? "1px solid #f3f4f6" : "none",
                p: 2,
                gap: 2,
                "&:hover": {
                  bgcolor: "#f9fafb",
                },
              }}
            >
              {[1, 2, 1, 1, 1].map((flex, colIdx) => (
                <Box
                  key={colIdx}
                  sx={{
                    flex,
                    display:
                      colIdx === 4 ? { xs: "none", sm: "block" } : "block",
                  }}
                >
                  <Skeleton
                    variant={colIdx === 4 ? "rounded" : "text"}
                    width={`${50 + Math.random() * 50}px`}
                    height={colIdx === 4 ? 24 : 18}
                    sx={{
                      bgcolor: "#f3f4f6",
                      borderRadius: colIdx === 4 ? "12px" : undefined,
                    }}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SkeletonTable;
