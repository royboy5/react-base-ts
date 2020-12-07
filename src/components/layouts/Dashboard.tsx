import React, { FC } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../Navigation';

const Dashboard: FC = ({ children }) => (
  <div>
    <Navigation />
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Dashboard
        </h1>
      </div>
    </header>
    {children}
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboard;
