module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    maxHeight: {
      '0' : '0',
      '1/4' : '25%',
      '1/2' : '50%',
      '3/4' : '75%',
      'full' : '100%',

    },

    padding: {
      'sm': '8px',
      'md': '16px',
      'lg': '24px',
      'xl': '48px',
      'next': '400px',
    },

    fontFamily: {
      'display': ['Poppins', 'system-ui', 'sans-serif'],
      'body': ['Poppins', 'system-ui', 'sans-serif'],
      'Glory': ['Glory'],
    },

    extend: {
      backgroundImage: theme => ({
        'green-pattern' : "url(/public/img/bg-green.png)",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
