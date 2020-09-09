import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import ProductCrud from '../components/product/ProductCrud'
import Error404 from '../components/Error404/Error404'
import Signup from '../components/SingUp'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/teste' component={Signup} />
        <Route path='/products' component={ProductCrud} />
        <Route path='/404'  component={Error404} />
        <Redirect to='/404'/>
    </Switch>