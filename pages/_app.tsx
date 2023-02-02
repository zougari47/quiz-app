import { Grid, createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#E7EBF0',
        },
      },
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Quizzical - Quiz App</title>
        <meta
          name="description"
          content="Test your knowledge and challenge your friends with our fun and interactive quiz app. Featuring a wide range of topics and difficulty levels. Play now and see who's the smartest!"
        ></meta>
      </Head>
      <CssBaseline />
      <main>
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '95vh' }}
        >
          <Component {...pageProps} />
        </Grid>
      </main>
    </ThemeProvider>
  )
}
