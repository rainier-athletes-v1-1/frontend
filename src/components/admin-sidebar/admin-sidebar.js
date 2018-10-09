import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../lib/routes';

import './_admin-sidebar.scss';

// const mapDispatchToProps = dispatch => ({

// });

export default class AdminSidebar extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = '';
  // }

  render() {
    return (
      <nav className="col-md-3 d-none d-md-block sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link disabled sidebar-heading" href="#">
                Take me to:
              </a>
            </li>
            <li className="nav-item" 
              onClick={ this.props.onClick }
              href={ routes.ADMIN_DATA_ROUTE }>
              {/* <Link to={routes.ADMIN_DATA_ROUTE} className="nav-link"> */}
              <a className="nav-link">
                Administrative Data
                </a>
              {/* </Link> */}
            </li>
            {/* <li className="nav-item">
              <Link to={routes.POINTS_TRACKER_ROUTE} className="nav-link">
                Create a New Points Tracker
                </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled sidebar-heading" href="#">
                Export Data:
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/studentdata">
                Student Data
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/extract">
                Export Points Trackers
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

AdminSidebar.propTypes = {
  onClick: PropTypes.func,
};

// export default connect(null, mapDispatchToProps)(AdminDashboardSidebar);
