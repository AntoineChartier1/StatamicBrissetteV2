/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
        ".node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            colors: {
                rougeBrissette: "#e73b44",
                vert: "#396b2a",
            },
            fontFamily: {
                sora: ["Sora", "sans-serif"],
            },
            keyframes: {
                "open-menu": {
                    "0%": { transform: 'scaleY(0)' },
                    "80%": { transform: 'scaleY(1.2)' },
                    "100%": { transform: 'scaleY(1)' },
                },
            },
            animation: {
                "open-menu": "open-menu 0.3s ease-in-out forwards",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("flowbite/plugin")
    ],
};
