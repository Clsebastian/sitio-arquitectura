/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
        extend: {
            colors: {
                emet: {
                    blue: '#0C71C3',
                    dark: '#004b8d',
                    text: '#777777',
                    heading: '#333333',
                    light: '#f7f7f7'
                }
            }
        }
    },
    plugins: [],
}
