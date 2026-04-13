import DcAliIcon from "./DcAliIcon";
import DInput from "./DInput";
import DSearch from "./DSearch";
import DCard from "./DCard";
import DCell from "./DCell";
import DNoData from "./DNoData";
import DTabs from "./DTabs";
import DTab from "./DTab";
import DMap from "./DMap";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    DcAliIcon: typeof DcAliIcon;
    DInput: typeof DInput;
    DSearch: typeof DSearch;
    DCard: typeof DCard;
    DCell: typeof DCell;
    DNoData: typeof DNoData;
    DTab: typeof DTab;
    DTabs: typeof DTabs;
    DMap: typeof DMap;
  }
}
export default [
  DcAliIcon,
  DInput,
  DSearch,
  DCard,
  DCell,
  DNoData,
  DTab,
  DTabs,
  DMap,
];
