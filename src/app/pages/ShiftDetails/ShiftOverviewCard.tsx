import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";
import { useTranslation } from "react-i18next";
import type { Shift } from "../../types/Shift";

const ShiftOverViewCard = ({
  shift,
  shiftDuration,
}: {
  shift: Shift;
  shiftDuration: string;
}) => {
  const { t } = useTranslation();

  return (
    <StyledCard>
      <StyledCardContent>
        <Box display="flex" flexWrap="wrap" gap={3} mb={3}>
          <Box flex="1" minWidth="200px">
            <Typography variant="h6" color="primary" gutterBottom>
              {t("shiftDetails.shiftId")}
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              {shift.id}
            </Typography>
          </Box>
          <Box flex="1" minWidth="200px">
            <Typography variant="h6" color="primary" gutterBottom>
              {t("shiftDetails.date")}
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              {moment(shift.date).format("DD.MM.YYYY HH:mm")}
            </Typography>
          </Box>
          <Box flex="1" minWidth="200px">
            <Typography variant="h6" color="primary" gutterBottom>
              {t("shiftDetails.shiftDuration")}
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              {shiftDuration}
            </Typography>
          </Box>
          <Box flex="1" minWidth="200px">
            <Typography variant="h6" color="primary" gutterBottom>
              {t("shiftDetails.status")}
            </Typography>
            <Chip
              label={
                shift.isComplete
                  ? t("shiftDetails.completed")
                  : t("shiftDetails.inProgress")
              }
              color={shift.isComplete ? "success" : "warning"}
              sx={{
                color: "white",
              }}
              variant="filled"
            />
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" color="primary" gutterBottom>
          {t("shiftDetails.description")}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {shift.description}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export default ShiftOverViewCard;
