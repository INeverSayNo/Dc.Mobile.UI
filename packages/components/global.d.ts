declare module "vue" {
  export interface GlobalComponents {
    DcIcon: (typeof import("dc-mobile-ui"))["DcIcon"];
    DInput: (typeof import("dc-mobile-ui"))["DInput"];
    DSearch: (typeof import("dc-mobile-ui"))["DSearch"];
    DCard: (typeof import("dc-mobile-ui"))["DCard"];
    DCell: (typeof import("dc-mobile-ui"))["DCell"];
    DNoData: (typeof import("dc-mobile-ui"))["DNoData"];
    DTabs: (typeof import("dc-mobile-ui"))["DTabs"];
    DTab: (typeof import("dc-mobile-ui"))["DTab"];
    DMap: (typeof import("dc-mobile-ui"))["DMap"];
  }

  interface ComponentCustomProperties {}
}

export {};
