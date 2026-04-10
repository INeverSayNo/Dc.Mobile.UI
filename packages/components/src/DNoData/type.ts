
export type ImgType = "noSearch" | "noData" ;
export interface DNoDataProps {
  layout?: "vertical" | "horizontal";
  type?: ImgType;
  errImg?: string;
  tips?: string;
  className?: string | string[]
}

export interface DNoDataEmits {
  (eventName: "clickTips"): void;
  (eventName: "clickImages"): void;
  (eventName: "click"): void;
}
