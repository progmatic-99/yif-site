// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from '@chakra-ui/react'
import type { ComponentStyleConfig } from '@chakra-ui/theme'

// Version 1: Using objects
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'white',
      },
    },
  },
})
