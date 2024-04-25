/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
        ".node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            colors: {
                rougeBrissette: "#e73b44",
                noir: "#222",
                vert: "#396b2a",
                dore: "#D0B787",
            },
            fontFamily: {
                sora: ["Sora", "sans-serif"],
            },
            keyframes: {
                "open-menu": {
                    "0%": { transform: "scaleY(0)" },
                    "100%": { transform: "scaleY(1)" },
                },
                "close-menu": {
                    "0%": { transform: "scaleY(1)" },
                    "100%": { transform: "scaleY(0)" },
                },
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
            animation: {
                "open-menu": "open-menu 0.2s ease-in-out forwards",
                "close-menu": "close-menu 0.2s ease-in-out forwards",
                "infinite-scroll": "infinite-scroll 60s linear infinite",
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
