import "styled-components";
import { ColorsTypes, MediaTypes } from "styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorsTypes;
    media: MediaTypes;
  }
}
