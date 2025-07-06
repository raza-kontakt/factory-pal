export const CATEGORY_COLORS: Record<string, string> = {
  efficiency: '#10b981',
  shift: '#3b82f6',
  downtime: '#ef4444',
} as const;

export const CHART_CONFIG = {
  defaultHeight: 400,
  mobileHeight: 300,
  smallMobileHeight: 250,
  mobileBreakpoint: 768,
  smallMobileBreakpoint: 480,
  margins: {
    top: 20,
    right: 30,
    left: 20,
    bottom: 60,
  },
  tickFontSize: 12,
  maxLabelLength: 8,
} as const;

export const CHART_STYLES = {
  gridStroke: '#f3f4f6',
  tickColor: '#6b7280',
  tooltipShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  containerShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  tooltipBorderRadius: '8px',
  barRadius: [4, 4, 0, 0] as const,
} as const; 