import { roboto } from "@theme-ui/presets";
import { Theme } from "@theme-ui/css";
import {
  darkBlue,
  darkerGrey,
  darkMediumGrey,
  mediumLightBlue,
  violetMedium,
} from "./colors";

export const whiteTheme: Theme = {
  ...roboto,
  colors: {
    primary: darkMediumGrey,
    secondary: mediumLightBlue,
    background: darkerGrey,
  },
  styles: {
    ...roboto.styles,
    root: {
      ...roboto.styles.root,
      color: violetMedium,
    },
  },
};
