/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '58px', letterSpacing: '-0.5px', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '46px', letterSpacing: '-0.25px', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '39px', letterSpacing: '0px', fontWeight: '500' }],
        'h4': ['24px', { lineHeight: '34px', letterSpacing: '0px', fontWeight: '600' }],
        'h5': ['20px', { lineHeight: '30px', letterSpacing: '0px', fontWeight: '500' }],
        'h6': ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '26px', letterSpacing: '0px', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '22px', letterSpacing: '0px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '18px', letterSpacing: '0px', fontWeight: '400' }],
        'placeholder': ['28px', { lineHeight: '39px', letterSpacing: '0px', fontWeight: '500' }],
        'displayLarge': ['64px', { lineHeight: '72px', letterSpacing: '-1px', fontWeight: '700' }],
        'displayMedium': ['48px', { lineHeight: '58px', letterSpacing: '-0.5px', fontWeight: '600' }],
        'displaySmall': ['36px', { lineHeight: '46px', letterSpacing: '-0.25px', fontWeight: '500' }],
        'linkText': ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '500' }],
        'highlightText': ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '600' }],
        'errorText': ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '700' }],
        'successText': ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '700' }],
        'disabledText': ['14px', { lineHeight: '22px', letterSpacing: '0px', fontWeight: '300' }],
        'buttonPrimary': ['16px', { lineHeight: '40px', letterSpacing: '0px', fontWeight: '600' }],
        'buttonSecondary': ['16px', { lineHeight: '36px', letterSpacing: '0px', fontWeight: '500' }],
        'buttonSmall': ['14px', { lineHeight: '32px', letterSpacing: '0px', fontWeight: '500' }],
        'blockquote': ['20px', { lineHeight: '32px', letterSpacing: '0px', fontWeight: '500' }],
        'breadcrumbs': ['12px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '400' }],
        'tooltipText': ['12px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '400' }],
        'codeBlock': ['14px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '400' }],
        'inlineCode': ['14px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '400' }],
        'preformattedText': ['14px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '400' }],
        'helperText': ['12px', { lineHeight: '18px', letterSpacing: '0px', fontWeight: '400' }],
      },
      colors: {
        'primary': {
          DEFAULT: '#56f799',
          hover: '#1c2cff',
        }
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'scroll-left': 'scroll-left 1000s linear infinite',
        'scroll-right': 'scroll-right 1000s linear infinite'
      }
    },
  },
  plugins: [],
}