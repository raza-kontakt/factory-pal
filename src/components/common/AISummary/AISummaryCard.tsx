import {
  AccessTime,
  AutoAwesome,
  CalendarToday,
  Close,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Chip,
  styled,
  IconButton,
  CardContent,
  Card,
} from "@mui/material";
import { colors } from "../../../utils/consts/colors";
import moment from "moment";
import { useTranslation } from "react-i18next";
import type { AISummaryResponse } from "../../../services/aiSummary";

const AISummaryCard = ({
  summaryData,
  isSummarySuccess,
  showSummary,
  handleCloseSummary,
}: {
  summaryData: AISummaryResponse | undefined;
  isSummarySuccess: boolean;
  showSummary: boolean;
  handleCloseSummary: () => void;
}) => {
  const { t } = useTranslation();

  if (!summaryData || !isSummarySuccess || !showSummary) return null;

  return (
    <SummaryCard data-testid="ai-summary-card">
      <SummaryCardContent>
        <SummaryHeader>
          <SummaryHeaderLeft>
            <AutoAwesome sx={{ color: colors.primary.main }} />
            <SummaryTitle variant="h6">{t("aiSummary.title")}</SummaryTitle>
          </SummaryHeaderLeft>
          <CloseButton
            onClick={handleCloseSummary}
            data-testid="ai-summary-close"
          >
            <Close />
          </CloseButton>
        </SummaryHeader>

        <SummaryText variant="body1">{summaryData.summary}</SummaryText>

        <ChipContainer>
          <StyledChip
            label={`${summaryData.wordCount} ${t("aiSummary.words")}`}
            size="small"
          />
          <StyledChip
            icon={<CalendarToday sx={{ fontSize: 16 }} />}
            label={moment(summaryData.timestamp).format("MMM DD, YYYY")}
            size="small"
          />
          <StyledChip
            icon={<AccessTime sx={{ fontSize: 16 }} />}
            label={moment(summaryData.timestamp).format("HH:mm")}
            size="small"
          />
        </ChipContainer>
      </SummaryCardContent>
    </SummaryCard>
  );
};

const SummaryCard = styled(Card)`
  border-radius: 16px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
  border: 1px solid #e5e7eb !important;
`;

const SummaryCardContent = styled(CardContent)`
  padding: 24px !important;
`;

const SummaryHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SummaryHeaderLeft = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SummaryTitle = styled(Typography)`
  color: #1f2937 !important;
  font-weight: 600 !important;
`;

const CloseButton = styled(IconButton)`
  color: #6b7280 !important;
  padding: 4px !important;

  &:hover {
    background-color: #f3f4f6 !important;
    color: #374151 !important;
  }
`;

const SummaryText = styled(Typography)`
  color: #374151 !important;
  line-height: 1.7 !important;
  margin-bottom: 24px !important;
  font-size: 1rem !important;
`;

const ChipContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
`;

const StyledChip = styled(Chip)`
  background-color: #f3f4f6 !important;
  color: #6b7280 !important;
`;

export default AISummaryCard;
