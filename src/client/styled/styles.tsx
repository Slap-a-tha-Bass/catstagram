const styles = {
    fonts: {
      heading: `"Source Code Pro", monospace`,
      primary: `"Source Code Pro", monospace`,
    },
  };
  // Dark Theme
  export const darkTheme = {
    title: "Dark",
    primary: `rgba(35,35,35, 0.3)`,
    secondary: `rgb(117, 31, 255)`,
    info: `rgb(117, 31, 255)`,
    dark: `black`,
    text: `#fff`,
    bgColor: `linear-gradient(
      344deg,
      rgba(6, 6, 6, 1) 0%,
      rgba(20, 20, 20, 1) 100%
    )`,
    ...styles,
  };
  
  // Light Theme
  export const lightTheme = {
    title: "Light",
    primary: `rgba(220,220,220, 0.3)`,
    secondary: `rgb(117, 31, 255)`,
    info: `black`,
    dark: `black`,
    text: `#000`,
    bgColor: `linear-gradient(344deg, #FCFCFC 0%, #F9F9F9 100%);`,
    ...styles,
  };
  