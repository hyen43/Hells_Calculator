"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
//https://nextjs.org/learn/basics/assets-metadata-css/global-styles 참고해서 만듦, 변경 가능 
    html,body {
    padding: 0;
    margin: 0;
    /* font-family:  */
    line-height: 1.6;
    }

    * {
    box-sizing: border-box;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    img {
    max-width: 100%;
    display: block;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    }
    button {
    border: none;
    outline: none;
    background-color: inherit ;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent; // 뒷 배경을 부모와 같게 맞춰줌
    }
    h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }
`;

export default GlobalStyles;
