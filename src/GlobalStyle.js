import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        color:#eee;
    }

    a{
        text-decoration:inherit;
        color:inherit;
    }
    ul,ol{
        list-style:none;
    }
    body{
        background-color:#333;
    }
`;

export default GlobalStyles;
