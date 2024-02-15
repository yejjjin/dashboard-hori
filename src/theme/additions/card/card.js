// import { mode } from "@chakra-ui/theme-tools";
// const Card = {
//   baseStyle: (props) => ({
//     p: "20px",
//     display: "flex",
//     flexDirection: "column",
//     width: "100%",
//     position: "relative",
//     container: {
//       borderRadius: "20px",
//     },
//     minWidth: "0px",
//     wordWrap: "break-word",
//     bg: mode("#ffffff", "navy.800")(props),
//     backgroundClip: "border-box",
//   }),
//   variants: {
//     primary: (props) => ({
//       boxShadow: "none",
//       bg: mode("white", "gray.700")(props),
//     }),
//   },
// };

// export const CardComponent = {
//   components: {
//     Card,
//   },
// };

import { mode } from "@chakra-ui/theme-tools";
export const cardStyles = {
  components: {
    Card: {
      baseStyle: {
        container: {
          bg: mode("white", "gray.700"),
          boxShadow: "none",
          borderRadius: "20px",
        },
      },
      // variants: {
      //     primary: (props) => ({}),
      // },
    },
  },
};
