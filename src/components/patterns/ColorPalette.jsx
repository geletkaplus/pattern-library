import { createGlobalStyle } from 'styled-components';

const ColorPalette = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;

    // Primary
    --primary-50: #ff0000;
    --primary-100: #ff3939;

    // Secondary
    --secondary-50: #800F2F;
    --secondary-100: #A4133C;

    // Accent
    --accent-50: #ff8800;
    --accent-100: #ff9500;
    
    // Neutral
    --neutral-50: #e8d1c5;
    --neutral-100: #eddcd2;
   
    // Gray
    --gray-50: #8a817c;
    --gray-100: #bcb8b1;
  }

`;

export default ColorPalette;
