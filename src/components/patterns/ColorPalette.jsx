import { createGlobalStyle } from 'styled-components';

const ColorPalette = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;
    // Primary
    --primary-50: #F3DBD5;
    --primary-100: #E0A594;
    --primary-200: #F57753;
    --primary: #C25131;
    --primary-400: #97432B;
    --primary-500: #5C1A08;

    // Secondary
    --secondary-50: #F1F2F1;
    --secondary-100: #E4F0E7;
    --secondary-200: #B7C7BB;
    --secondary: #8C9E91;
    --secondary-400: #647569;
    --secondary-500: #3F4C43;

    // Accent
    --accent-50: #FFFAF7;
    --accent-100: #FFCEB2;
    --accent-200: #D9AB91;
    --accent: #B08770;
    --accent-400: #876552;
    --accent-500: #5F4536;
    
    // Neutral
    --neutral-50: #FAF8F5;
    --neutral-100: #FFF6EB;
    --neutral-200: #E5DACC;
    --neutral: #BCB1A2;
    --neutral-400: #93887A;
    --neutral-500: #6B6155;
   
    // Gray
    --gray-50: #F6F7F7;
    --gray-100: #D9DEE2;
    --gray-200: #ACB3B9;
    --gray: #7E8589;
    --gray-400: #434A4F;
    --gray-500: #18191C;
  }

`;

export default ColorPalette;
