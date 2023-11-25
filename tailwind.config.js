
module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    minWidth: {
      '40': '10rem',
      '60': '15rem',
      '80': '20rem',
      '100': '25rem',
    },
    maxWidth: {
      '120': '30rem',
      '160': '40rem',
      '200': '50rem',
    }
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        black: {
          "primary": "#FFFFFF",
          "secondary": "#FFFFFF",
          "accent": "#FFFFFF",
          "base-100": "#000000",
          "base-200": "#141414",
          "base-300": "#262626",
          "base-content": "#FFFFFF",
          "neutral": "#FFFFFF",
          "info": "#0000ff",
          "success": "#008000",
          "warning": "#ffff00",
          "error": "#ff0000",
          "--rounded-box": "1rem",
          "--rounded-btn": "1rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": ".2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        }
        ,
      }
    ],
  }
}

