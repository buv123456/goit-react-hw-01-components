import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

table, td, th{
  border-color: #c9c9c9;
  border-width: 0 1px 1px 0;
  border-style: solid;
}

img{
    display: block;
    max-width: 100%;
    object-fit: cover;
}
`;
