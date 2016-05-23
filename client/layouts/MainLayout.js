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
      </div>
}

MainLayout.propTypes = {
  content: PropTypes.func.isRequired,
};
