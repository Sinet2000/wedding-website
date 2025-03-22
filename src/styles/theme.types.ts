import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      background: string;
      white: string;
      text: string;
    };
    fonts: {
      primary: string;
      secondary: string;
      calligraphyOne: string;
      calligraphyTwo: string;
      calligraphyThree: string;
      calligraphySix: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    transitions: {
      default: string;
    };
  }
}
