export interface Log {
  id: string;
  label: string;
  value: number;
  type: "secs" | "hours" | "percentage" | "number" | "minutes";
  description: string;
  category: string;
}

export interface Shift {
  id: string;
  name: string;
  isComplete: boolean;
  date: string;
  description: string;
  logs: Log[];
}

export type ShiftWithoutLogs = Omit<Shift, "logs">;


