import type { Shift, ShiftWithoutLogs } from "../types/Shift";
import factoryAnalyticsData from "../utils/consts/factory_analytics_data";
import factoryAnalyticsDataDe from "../utils/consts/factory_analytics_data_de";
import { wait } from "../utils";
import { getParsedShift } from "../utils/shiftParser";

const STANDARD_MOCK_WAIT_TIME = 500;

const getDataByLanguage = (language: string = "en") => {
  return language === "de" ? factoryAnalyticsDataDe : factoryAnalyticsData;
};

const getShifts = async (
  language: string = "en"
): Promise<ShiftWithoutLogs[]> => {
  await wait(STANDARD_MOCK_WAIT_TIME);
  const data = getDataByLanguage(language);
  return data.map(({ id, name, date, description, isComplete }) => ({
    id,
    name,
    date,
    description,
    isComplete,
  }));
};

const getShift = async (
  id: string,
  language: string = "en"
): Promise<Shift | undefined> => {
  await wait(STANDARD_MOCK_WAIT_TIME);
  let data = getDataByLanguage(language).find(
    (shift) => shift.id === id
  ) as Shift;
  data = getParsedShift(data);
  return data;
};

export { getShifts, getShift };
