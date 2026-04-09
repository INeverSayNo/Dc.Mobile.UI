import DcAliIcon from "./DcIcon";
import DInput from "./DInput";
import DSearch from "./DSearch";
import DCard from "./DCard";
import DCell from "./DCell";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    DcAliIcon: typeof DcAliIcon;
    DInput: typeof DInput;
    DSearch: typeof DSearch;
    DCard: typeof DCard;
    DCell: typeof DCell;
  }
}
export default [DcAliIcon, DInput, DSearch, DCard, DCell];
