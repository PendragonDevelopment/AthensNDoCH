import React, {Component, PropTypes} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class MainNavigation extends Component {
    render() {
        var navigationRoutes = _.filter(FlowRouter._routes, (route) => {
            return route.group.name === "nav"
        });

        var currentRoute = FlowRouter.current().route.name;

        return <nav>
            <ul>
                {
                    navigationRoutes.map(route => {
                        return <li key={route.name}><a href={route.path} className={ route.name === currentRoute ? 'active' : '' }>{route.name}</a></li>
                    })
                }
            </ul>
        </nav>
    }
}
