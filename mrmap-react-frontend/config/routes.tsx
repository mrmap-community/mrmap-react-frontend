﻿import { CrownOutlined, HeartOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-layout';
//@ts-ignore
import React from 'react';
const IconMap = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
  crown: <CrownOutlined />,
};

export const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
  menus.map(({ icon, routes, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon as string],
    routes: routes && loopMenuItem(routes),
  }));




const defaultMenus = [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
    wrappers: [
      '@/wrappers/auth',
    ],
  },
  {
    path: '/registry',
    name: 'registry',
    icon: 'database',
    routes: [
      {
        key: 'WebMapServiceList',
        name: 'WebMapService',
        path: '/registry/WebMapService',
        component: './registry/WmsTable',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        path: '/registry/wms/:id/security',
        component: './registry/WmsSecuritySettings',
        hideInMenu: true,
        routes: [{ path: 'rules' }, { path: 'rules/:ruleId/edit' }, { path: 'rules/add' }],
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'WebMapServiceDetails',
        name: 'details',
        path: '/registry/WebMapService/:id',
        component: './registry/WmsDetail',
        hideInMenu: true,
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'WebMapServiceNestedLayer',
        name: 'Layer',
        path: '/registry/WebMapService/:id/Layer',
        component: './registry/LayerTable',
        hideInMenu: true,
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'WebMapServiceNestedKeyword',
        name: 'Keyword',
        path: '/registry/WebMapService/:id/Keyword',
        component: './registry/KeywordTable',
        hideInMenu: true,
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'WebFeatureServiceList',
        name: 'WebFeatureService',
        path: '/registry/WebFeatureService',
        component: './registry/WfsTable',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'WebFeatureServiceDetails',
        name: 'details',
        path: '/registry/WebFeatureService/:id',
        component: './registry/WfsDetail',
        hideInMenu: true,
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'WebFeatureServiceNestedFeatureType',
        name: 'FeatureType',
        path: '/registry/WebFeatureService/:id/FeatureType',
        component: './registry/FeatureTypeTable',
        hideInMenu: true,
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        name: 'csw',
        path: '/registry/csw',
        component: './registry/CswTable',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        name: 'datasets',
        path: '/registry/datasets',
        component: './registry/DatasetTable',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'LayerList',
        name: 'Layer',
        path: '/registry/Layer',
        component: './registry/LayerTable',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'LayerNestedKeyword',
        name: 'Keyword',
        path: '/registry/Layer/:id/Keyword',
        component: './registry/KeywordTable',
        hideInMenu: true,
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'FeatureTypeList',
        name: 'FeatureType',
        path: '/registry/FeatureType',
        component: './registry/FeatureTypeTable',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'FeatureTypeNestedKeyword',
        name: 'Keyword',
        path: '/registry/FeatureType/:id/Keyword',
        component: './registry/KeywordTable',
        hideInMenu: true,
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        name: 'maps',
        path: '/registry/maps',
        component: './registry/MapTable',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        path: '/registry/maps/add',
        component: './registry/MapEditor',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        path: '/registry/maps/:id/edit',
        component: './registry/MapEditor',
        wrappers: [
          '@/wrappers/auth',
        ],
      },
      {
        key: 'KeywordList',
        name: 'Keyword',
        path: '/registry/Keyword',
        component: './registry/KeywordTable',
        wrappers: [
          '@/wrappers/auth',
        ],
      }
    ],
  },
  {
    path: '/jobs',
    name: 'jobs',
    icon: 'database',
    component: 'jobs'
  },
  {
    path: '/',
    redirect: '/welcome',
    wrappers: [
      '@/wrappers/auth',
    ],
  },
  {
    component: './404',
  },
];

export default defaultMenus;