import DcAliIcon from "./DcIcon";
import DInput from "./DInput";
import DSearch from "./DSearch";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    DcAliIcon: typeof DcAliIcon;
    DInput: typeof DInput;
    DSearch: typeof DSearch;
  }
}

export default [DcAliIcon, DInput, DSearch];
