/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./pages/*.{html,js}"],
    theme: {
        screens: {
            small: "0px",
            mobile: "375px",
            mobileXL: "390px",
            mobileHorSmall: "567px",
            mobileHor: "640px",
            tablet: "767px",
            bigHor: "811px",
            bigPhoneHor: "844px",
            vertIpadMini: "820px",
            laptop: "976px",
            ipad: "1023px",
            hd: "1365px",
            fhd: "1440px",
        },
        extend: {
            fontFamily: {
                Manrope: "Manrope, sans-serif",
                DMserif: "DM Serif Display, serif",
                IBMserif: "IBM Plex Serif, serif",
            },
            colors: {
                offBlack: "#181818",
                offWhite: "#F2F2F2",
                darkParasol: "#1B3644",
                midParasol: "#20535F",
                tealParasol: "#088484",
                lightParasol: "#7DBBB8",
                lighterParasol: "#C5D7D9",
                darkBeige: "#DCD8CF",
                vividBeige: "#EDDAD6",
                greige: "#EDECE7",
            },
        },
    },
    plugins: [],
};
