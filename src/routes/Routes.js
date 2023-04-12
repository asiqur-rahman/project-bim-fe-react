import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// layout HOC
import withLayout from '../components/Layout';
import { allFlattenRoutes } from './index';
import { useEffect, useState } from 'react';


const Routes = () => {

    const [routes, setRoutes] = useState([]);

    useEffect(()=>{
        setRoutes(allFlattenRoutes);
    },[])

    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route, index) => {
                    return (
                        !route.children && (
                            <route.route
                                key={index}
                                path={route.path}
                                roles={route.roles}
                                exact={route.exact}
                                component={withLayout(props => {
                                    return <route.component {...props} />;
                                })}></route.route>
                        )
                    );
                })}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
