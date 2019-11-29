import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        outline: 0;
        margin: 0;
    }

    html, body, #root{
        min-height: 100%;
    }

    body{
        -webkit-font-smothing: antialiased !important;
        background: #7159c1;
    }

    body, input, button {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #222;
    }

    button{
        cursor: pointer;
    }
`;
