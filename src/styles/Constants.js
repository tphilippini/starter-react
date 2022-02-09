import { css } from "styled-components";

const Constants = css`
  /* @import url('https://fonts.googleapis.com/css2?family=Fugaz+One:wght@100;200;300;400;500;600;700;800;900&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap'); */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

  :root {
    // Font
    --font-main: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    --font-size: 16px;
    --font-weight: 200;
    // Colors
    --white: #fff;
    --black: #000;
    --gray: #7f7f7f;
    --blue: #057dcd;
    // Other
    --max-width: 1500px;
    --transition: all 0.25s ease-in-out;
  }
`;

export default Constants;
