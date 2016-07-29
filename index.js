exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
      cursorColor: '#02fdff',
      foregroundColor: '#c5c8c6',
      backgroundColor: '#232c31',
      borderColor: '#2d3c46',
      css: `
        ${config.css || ''}
        .tab_active:before { border-color: #232c31 }
      `,
      colors: {
        black: '#2d3c46',
        red: '#a54242',
        green: '#8c9440',
        yellow: '#de935f',
        blue: '#5f819d',
        magenta: '#85678f',
        cyan: '#5e8d87',
        white: '#6c7a80',
        lightBlack: '#425059',
        lightRed: '#cc6666',
        lightGreen: '#b5bd67',
        lightYellow:'#f0c674',
        lightBlue: '#81a2be',
        lightMagenta: '#b294ba',
        lightCyan: '#8abeb7',
        lightWhite: '#c5c8c6'
      }
    }
  });
}
