module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'linebreak-style': ['off'], // Ignora los errores de CRLF y LF
    'react/react-in-jsx-scope': 'off', // Desactiva la regla que requiere React en el scope para JSX
    'prettier/prettier': ['error', {
      'bracketSpacing': true,
      'importOrderSeparation': false,
    }],
  },
};