/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-base-2": "#ebebeb",
        linen: "#eeeee4",
        white: "#fff",
        mediumslateblue: "#7171ff",
        gray: {
          "100": "#848484",
          "200": "#7e7e7e",
          "300": "#7d7d7d",
          "400": "#141414",
          "500": "rgba(20, 20, 20, 0.1)",
          "600": "rgba(20, 20, 20, 0.2)",
        },
        lightgray: {
          "100": "#d3d3d3",
          "200": "#cacaca",
          "300": "#d4d4c9",
        },
        darkgray: {
          "100": "#969696",
          "200": "rgba(175, 175, 175, 0.2)",
          "300": "rgba(150, 150, 150, 0.09)",
        },
        silver: {
          "100": "#c4c4c4",
          "200": "#c3c3c3",
        },
        dimgray: {
          "100": "#5a5a5a",
          "200": "#515151",
          "300": "#6b6b6b",
          "600": "rgba(107, 107, 107, 0.09)",
        },
        darkslategray: {
          "100": "#4b4b4b",
          "200": "#414141",
          "300": "#363636",
        },
        tomato: "#fc3a3a",
      },
      spacing: {},
      fontFamily: {
        nunito: "Nunito",
        roboto: "Roboto",
        inter: "Inter",
        outfit: "Outfit",
      },
      borderRadius: {
        xl: "20px",
        mini: "15px",
        "3xs": "10px",
        "8xs": "5px",
        "11xl": "30px",
        "4xl-5": "23.5px",
        "6xl": "25px",
        "53xl-7": "72.7px",
        "51xl": "70px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      xl: "20px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq320: {
        raw: "screen and (max-width: 320px)",
      },
      mq265: {
        raw: "screen and (max-width: 265px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
