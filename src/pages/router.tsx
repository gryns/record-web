import React, { } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home'
import My from './my'
export default function routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my" component={My} />
        </Switch>
    </BrowserRouter>
}