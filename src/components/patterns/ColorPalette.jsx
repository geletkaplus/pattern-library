import { createGlobalStyle } from 'styled-components';

const ColorPalette = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;

    // Primary
    --primary: #ff0000;
    --primary100: #ff3939;

    // Secondary
    --secondary: #800F2F;
    --secondary100: #A4133C;

    // Accent
    --accent: #ff8800;
    --accent100: #ff9500;
    
    // Neutral
    --neutral: #e8d1c5;
    --neutral100: #eddcd2;
   
    // Gray
    --gray: #8a817c;
    --gray100: #bcb8b1;
  }

`;

export default ColorPalette;
