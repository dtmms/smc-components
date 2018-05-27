import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

import {withTheseNavItems} from 'attainia-web-components/layout'
import {
    AuthProvider,
    LoginContainer,
    PasswordHelpContainer,
    RegistrationContainer,
    RegistrationConfirmationContainer,
    RegisterApplicationContainer
} from 'attainia-web-components/auth'

import {withLoginEnhancers} from 'attainia-web-components/auth/enhancers'

// TODO: implement authentication
// import {withAuthentication} from 'attainia-web-components/auth/decorators'

import Wheel from './components'

import store from './store'
import theme from './theme'

const withLayout = withTheseNavItems([
    {label: 'Wheel', link: '/Wheel', iconName: 'cube'}
])

export default (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/login" component={withLoginEnhancers(LoginContainer)} />
                        <Route exact path="/password-help" component={PasswordHelpContainer} />
                        <Route exact path="/register" component={RegistrationContainer} />
                        <Route exact path="/confirm-registration" component={RegistrationConfirmationContainer} />
                        <Route exact path="/register-application" component={RegisterApplicationContainer} />
                        <Route exact path="/Wheel" component={withLayout(Wheel)} />
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </Provider>
    </ThemeProvider>
)
