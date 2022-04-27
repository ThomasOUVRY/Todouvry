import {extendTheme} from 'native-base';


export const themeTodouvry = extendTheme({
    colors: {
        dark: {
            "900": "#0A0A0A",
            "800": "#1D1D1D",
            "700": "#2E2E2E",
            "600": "#3F3F3F",
            "500": "#4F4F4F",
            "400": "#6F6F6F",
            "300": "#8F8F8F",
            "200": "#BFBFBF",
            "100": "#EFEFEF",
        },
        text: {},
    },
    config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'dark',
    },
});
