export interface DCellProps {
  layout?: "left" | "right";
  title: string;
  value: string;
  isLink?: boolean;
}

export interface DCellEmits {
  (eventName: "click"): void;
  (eventName: "titleClick"): void;
  (eventName: "valueClick"): void;
}
