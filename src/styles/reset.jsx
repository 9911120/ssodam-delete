import {css} from '@emotion/react';

const reset = css`
    @font-face {
        font-family: 'Pretendard Variable';
        font-weight: 45 920;
        font-style: normal;
        font-display: swap;
        src: local('Pretendard Variable'), url('/fonts/Pretendard/PretendardVariable.woff2') format('woff2-variations');
    }
    * {
        font-family: 'Pretendard Variable', sans-serif;
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    button{
        border:0;
        cursor:pointer;
        color:unset;
        background:unset;
        padding:0;
        font-size:unset;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
    textarea{
        resize:none;
    }
`;

export default reset;