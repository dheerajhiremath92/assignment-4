import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Song from './pages/Song'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { indigo} from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
    primary: {
      light: indigo[100],
      main: indigo[500],
      dark: '#002984'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider >
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/"/>
            <Route exact path="/coldplay">
              <Song songName="Coldplay"/>
            </Route>
            <Route path="/titanic">
              <Song songName="Titanic"/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
