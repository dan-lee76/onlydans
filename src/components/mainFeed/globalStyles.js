import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
    :root{
        --post-border-color: ${({ theme }) => theme.postBorderColor}; 
        --bg-color: ${({ theme }) => theme.background};
        --text-color: ${({ theme }) => theme.text};
        --banner-location: ${({ theme }) => theme.bannerImg};
        --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    border-color: red;
  }
  `