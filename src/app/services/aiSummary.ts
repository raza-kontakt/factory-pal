import axios from "axios";
import type { Shift } from "../types/Shift";

const aiSummaryApi = axios.create({
  baseURL: "https://summarizeshift-dzhmub6p3a-uc.a.run.app",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface AISummaryResponse {
  success: boolean;
  summary: string;
  wordCount: number;
  shiftId: string;
  shiftName: string;
  timestamp: string;
}

export interface AISummaryRequest {
  id: string;
  name: string;
  isComplete: boolean;
  date: string;
  description: string;
  logs: Shift["logs"];
  language: string;
}

export const generateAISummary = async (
  shift: Shift,
  language: string = "en"
): Promise<AISummaryResponse> => {
  const requestData: AISummaryRequest = {
    id: shift.id,
    name: shift.name,
    isComplete: shift.isComplete,
    date: shift.date,
    description: shift.description,
    logs: shift.logs,
    language,
  };

  const response = await aiSummaryApi.post("/", requestData);

  if (!response.data.success) {
    throw new Error("Failed to generate AI summary");
  }

  return response.data;
};

export default aiSummaryApi;
