import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Router, Switch } from 'react-router';

import { defaultTheme, GlobalStyle } from './styles';
import { NotFoundPage, LayoutWrapper } from './components';
import { News, Article } from './containers';
import { ROUTES } from './shared';
import { history } from './utils';

// todo: add RWD
function App(props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <GlobalStyle/>
        <div className={props.className}>
          <Router history={history}>
            <LayoutWrapper>
              <Switch>
                <Route exact path={ROUTES.NEWS} component={News}/>
                <Route exact path={ROUTES.ARTICLE_ID} render={(loc) => <Article id={loc.match.params.id}/>}/>
                <Route patch="*" component={NotFoundPage}/>
              </Switch>
            </LayoutWrapper>
          </Router>
        </div>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
