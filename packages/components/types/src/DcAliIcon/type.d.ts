import { default as DcIcon } from './index.vue';
/**
 * 定义props类型
 */
export interface DcIconProps {
    prefixCls?: string;
    iconName: string;
    width?: string | number;
    height?: string | number;
}
/**
 * 定义instance类型
 */
export type DcIconInstance = InstanceType<typeof DcIcon>;
