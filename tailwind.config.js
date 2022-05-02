module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellowCard: '#FFF7D9',
        redCard: '#FFEEE2',
        greenCard: '#EEFCEF',
        purpleCard: '#F4F5F9',
        blueCard: '#E6F5FA',
        lightGreyIcons: '#E2E2E2',
        greyIcons: '#ECE3C0',
        greyFonts: '#AAA799',
      },
      fontSize: {
        xxs: '10px',
      },
      maxWidth: {
        icon26: '26px',
        navbar: '46px',
        leftNavbar: '250px',
      },
      borderRadius: {
        cardRadius: '30px',
      },
      spacing: {
        44: '44px',
        18: '18px',
      },
    },
  },
  plugins: [],
};
