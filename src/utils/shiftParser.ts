import moment from "moment";
import type { Shift, Log } from "../types/Shift";

export interface ParsedShift extends Shift {
  computed: {
    duration: { value: number; unit: string };
    oee: number | undefined;
    cleaningTime: { value: number; unit: string };
    totalDowntime: { value: number; unit: string };
    availability: { value: number; unit: string };
  };
}

export const convertToMinutes = (value: number, unit: string): number => {
  const unitMap: { [key: string]: moment.unitOfTime.DurationConstructor } = {
    secs: "seconds",
    hours: "hours",
    minutes: "minutes",
  };

  const mappedUnit = unitMap[unit] || "minutes";
  return Math.round(moment.duration(value, mappedUnit).asMinutes());
};

export const transformLogForDisplay = (
  log: Log
): Log & { displayValue: number } => {
  const displayValue = log.value;

  return {
    ...log,
    displayValue,
  };
};

export const getDisplayUnit = (log: Log): string => {
  switch (log.type) {
    case "percentage":
      return "%";
    case "secs":
    case "hours":
      return "min";
    case "number":
      return "";
    default:
      return "";
  }
};

export const transformLogsForDisplay = (
  logs: Log[]
): (Log & { displayValue: number })[] => {
  return logs.map(transformLogForDisplay);
};

export const computeShiftData = (shift: Shift): ParsedShift => {
  const duration =
    shift.logs.find((log) => log.id === "shift_duration")?.value || 0;

  const oee = shift.logs.find((log) => log.id === "oee")?.value || 0;

  const cleaningTimeValue =
    shift.logs.find((log) => log.id === "cln_shift")?.value || 0;

  const unexplainedDowntime =
    shift.logs.find((log) => log.id === "unexplained")?.value || 0;

  const mechanicalProblems =
    shift.logs.find((log) => log.id === "mech_problems")?.value || 0;

  const totalDowntime =
    unexplainedDowntime + mechanicalProblems + cleaningTimeValue;

  const availabilityTime = Math.round(duration - totalDowntime);

  const availability = Math.round((availabilityTime / duration) * 100);

  return {
    ...shift,
    computed: {
      duration: { value: duration, unit: "minutes" },
      oee,
      cleaningTime: { value: cleaningTimeValue, unit: "minutes" },
      totalDowntime: { value: totalDowntime, unit: "minutes" },
      availability: { value: availability, unit: "%" },
    },
  };
};

export const shiftCategoryColors = {
  efficiency: "success",
  downtime: "error",
  quality: "warning",
};

export const getShiftLogsCategories = (shift: Shift) => {
  return [...new Set(shift.logs.map((log) => log.category))];
};

export const getParsedShift = (shift: Shift): Shift => {
  const shiftUpdatedLogs: Log[] = shift.logs.map((item): Log => {
    if (item.id === "oee" && item.type === "percentage") {
      return {
        ...item,
        value: item.value * 100,
      };
    }
    if (item.id === "shift_duration") {
      return {
        ...item,
        value: convertToMinutes(item.value, item.type),
        type: "minutes" as const,
      };
    }
    if (item.id === "cln_shift") {
      return {
        ...item,
        value: convertToMinutes(item.value, item.type),
        type: "minutes" as const,
      };
    }
    if (item.id === "mech_problems") {
      return {
        ...item,
        value: convertToMinutes(item.value, item.type),
        type: "minutes" as const,
      };
    }
    if (item.id === "unexplained") {
      return {
        ...item,
        value: convertToMinutes(item.value, item.type),
        type: "minutes" as const,
      };
    }
    return item;
  });

  return {
    ...shift,
    logs: shiftUpdatedLogs,
  };
};
