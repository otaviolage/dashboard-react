import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Admin from '../pages/Admin'
import Purchased from '../pages/Purchased'


const Routes = ()=>{

    return (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cart" component={Cart}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/purchased" component={Purchased}/>
    </Switch>
    );
}

export default Routes