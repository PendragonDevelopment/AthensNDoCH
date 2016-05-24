import React, {Component, PropTypes} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class MainNavigation extends Component {
    render() {
        var navigationRoutes = _.filter(FlowRouter._routes, (route) => {
            return route.group.name === "nav"
        });

        var currentRoute = FlowRouter.current().route.name;

        return <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Athens NDoCH</a>
                <div className="">
                    <ul className="nav navbar-nav navbar-right" id="nav-collapse">
                        {
                            navigationRoutes.map(route => {
                                return <li key={route.name}>
                                    <a href={'#' + route.name} className={ route.name === currentRoute ? 'active page-scroll' : 'page-scroll' }>
                                        {route.name}
                                    </a></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    }
}
