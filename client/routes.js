/* eslint-disable global-require */
import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Reporter from './components/Reporter';

export const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Reporter,
      }
    ],
    children: Object,
  }
];
