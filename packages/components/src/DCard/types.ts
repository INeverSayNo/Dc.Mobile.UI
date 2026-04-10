export interface DCardProps {
  dividerDashed?: boolean;
  footerLayout?: "between" | "center" | "right";
  isShowCollapse?: boolean
  shadow?: boolean;
  footerTitle?: string
  customClass?: string | string[]
  showFooter?: boolean
}

export interface DCardEmits {
  (eventName: "clickFooter"): void;
  (eventName: "clickHeader"): void;
}
