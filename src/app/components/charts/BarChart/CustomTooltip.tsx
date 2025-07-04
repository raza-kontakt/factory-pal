// Custom tooltip component
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      id: string;
      label: string;
      value: number;
      type: string;
      description: string;
      category: string;
    };
  }>;
}

// Unit formatting helper
const formatUnit = (type: string): string => {
  switch (type) {
    case "percentage":
      return "%";
    case "secs":
      return " seconds";
    case "hours":
      return " hours";
    case "number":
      return "";
    default:
      return "";
  }
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const unit = formatUnit(data.type);

    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "250px",
        }}
      >
        <p style={{ margin: "0 0 8px 0", fontWeight: "600", color: "#1f2937" }}>
          {data.label}
        </p>
        <p style={{ margin: "0 0 4px 0", color: "#6b7280" }}>
          <strong>Value:</strong> {data.value}
          {unit}
        </p>
        <p style={{ margin: "0 0 4px 0", color: "#6b7280" }}>
          <strong>Category:</strong> {data.category}
        </p>
        <p style={{ margin: "0", color: "#6b7280", fontSize: "0.875rem" }}>
          {data.description}
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
