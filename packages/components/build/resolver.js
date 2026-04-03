export function DcResolver() {
  return {
    type: "component",
    resolve: (name) => {
      if (name.startsWith("Dc")) {
        const partialName = name.slice(2);
        console.log(partialName);

        return {
          name: "Dc" + partialName,
          from: `dc-mobile-ui`,
          sideEffects: `dc-mobile-ui/es/${partialName}/style/index.css`,
        };
      }
    },
  };
}
