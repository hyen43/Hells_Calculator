import { css, CSSProp } from "styled-components";

type MediaQueryProps = {
  mobile: number;
  tablet: number;
  // desktop: number;
};

const sizes: MediaQueryProps = {
  mobile: 320,
  tablet: 768,
};

// const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media screen and (max-width: ${sizes[label]}px) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});
type BackQuoteArgs = string[];

const media = {
  mobile: (
    literals: TemplateStringsArray,
    ...args: BackQuoteArgs
  ): CSSProp => css`
    @media only screen and (max-width: ${sizes.mobile}px) {
      ${css(literals, ...args)}
    }
  `,
  tablet: (
    literals: TemplateStringsArray,
    ...args: BackQuoteArgs
  ): CSSProp => css`
    @media only screen and (max-width: ${sizes.tablet}px) {
      ${css(literals, ...args)}
    }
  `,
} as Record<
  keyof typeof sizes,
  (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp
>;

export default media;
