import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  /* Brand Colors */
  --color-brand-primary: #2B4877;
  --color-brand-secondary:rgba(145, 150, 158, 0.27);

  /* Grey Scale */
  --color-grey-0: #FFFFFF;
  --color-grey-50: #FBFBFB;
  --color-grey-100: #F4F4F4;
  --color-grey-300: #C7C7C7;
  --color-grey-700: #4D4C4C;

  /* Border Widths */
  --border-width-xs: 0.5px;
  --border-width-sm: 1px;

  /* Border Radius */
  --border-radius-md: 5px;

  /* Typography */
  --font-family-base: "Noto Sans", sans-serif;
  --font-size-base: 1.5rem;
  --line-height-base: 1.5;
}
  
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
  
html {
  font-size: 62.5%;
}
  
body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-grey-700);
  background-color: var(--color-grey-50);
  min-height: 100vh;

    /* Chrome, Safari, Edge, Opera */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
}

h3{
  color: #4D4C4C;
}
`;

export default GlobalStyles;
