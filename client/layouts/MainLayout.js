import React, { PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store from '../store';
import MainNavigation from '../containers/MainNavigation'

injectTapEventPlugin();

export default MainLayout = ({ content }) => {
  return <div>
        <MainNavigation />
        <Provider store={store}>
          {content()}
        </Provider>
        <section id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <h2>Projects</h2>
                        <hr className="light" />
                        <p>Project Information</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
}

MainLayout.propTypes = {
  content: PropTypes.func.isRequired,
};
