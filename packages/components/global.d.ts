declare module "vue" {
  export interface GlobalComponents {
    DInput: (typeof import("dc-mobile-ui"))["DInput"];
  }

  interface ComponentCustomProperties {}
}

export {};
