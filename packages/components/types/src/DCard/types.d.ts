export interface DCardProps {
    dividerDashed?: boolean;
    footerLayout?: "between" | "center" | "right";
    isShowCollapse?: boolean;
    shadow?: boolean;
    footerTitle?: string;
    customClass?: string | string[];
}
export interface DCardEmits {
    (eventName: "clickFooter"): void;
    (eventName: "clickHeader"): void;
}
