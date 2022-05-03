import {extendTheme} from 'native-base'

export const themeTodouvry = extendTheme({
  colors: {
    todoDark: {
      900: '#0A0A0A',
      800: '#1D1D1D',
      700: '#2E2E2E',
      600: '#3F3F3F',
      500: '#4F4F4F',
      400: '#6F6F6F',
      300: '#8F8F8F',
      200: '#BFBFBF',
      100: '#EFEFEF'
    },
    todoBlue: {
      100: '#DAF8FB',
      200: '#BCF3F8',
      300: '#9EEDF4',
      400: '#80E7F1',
      500: '#62E2EE',
      600: '#43DCEA',
      700: '#25D7E7',
      800: '#17C4D3',
      900: '#14A8B5'
    },
    todoRed: {
      700: '#BD0E0B',
      500: '#F22B29',
      300: '#F44845'
    },
    todoWhite: {
      900: '#FFF8F8'
    }
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark'
  },
  breakpoints: {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280
  },
  fontConfig: {},
  components: {
    Center: {
      baseStyle: {
        _dark: {
          bg: 'todoDark.800'
        },
        _light: {
          bg: 'todoWhite.900'
        }
      }
    },
    Text: {
      baseStyle: {
        _light: {
          color: 'todoDark.900'
        },
        _dark: {
          color: 'todoBlue.500'
        }
      }
    },
    Heading: {
      baseStyle: {
        _light: { color: 'todoDark.800' },
        _dark: { color: 'todoWhite.900' },

      }
    },
    FormControlErrorMessage:{
      baseStyle: {
        _light: {
          _text: {
            color: 'todoRed.500'
          }
        }
      }
    },
    Button: {
      variants: {
        solid: {
          _light: {
            bg: 'todoRed.500',
            _pressed: {
              bg: 'todoRed.300'
            }
          },
          _dark: {
            bg: 'todoRed.500',
            _pressed: {
              bg: 'todoRed.300'
            }
          }
        }
      }
    }
  }
})
