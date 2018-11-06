/* eslint-env node */

'use strict';
const PRODUCTION_MICRO_SERVICES_HOST = 'https://api.britishgas.co.uk';
const LOCAL_MICRO_SERVICES_HOST = '';
module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'ember-bootcamp-project',
    environment,
    rootURL: '/apps/home-services/',
    locationType: 'auto',
    metricsAdapters: [{
      name: 'Yard',
      environments: ['all'],
      config: {
        prefix: 'yrdHomeService'
      }
    }, {
      name: 'appDynamics',
      environments: ['all']
    }],
    gReCaptcha: {
      size: 'invisible',
      siteKey: '6LeDnB4UAAAAAIby2KErIEeMiV-vXhvL-uvKyUSL'
    },
    EmberENV: {
      sitetagger: {
        stAccount: 10086
      },
      optilead: {
        site: 'britishgas'
      },
      yardInterface: {
        prefix: 'yrdHomeService'
      },
      brightTag: {
        site: 'HrfMxbT'
      },
      trackJs: {
        token: '',
        application: ''
      },
      appDynamics: {
        key: 'AD-AAB-AAM-AEM'
      },
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      },
      BRAND: 'britishgas',
      OAUTH: {
        AUTH_HOST: '',
        CLIENT_ID: '4d85090c-8b6d-4cba-9327-c024643be989',
        SECRET_ID: 'df3c9eb4-0868-440b-9e25-ba1ab011926c',
        SECONDARY_REDIRECT: '/',
        STATE_REDIRECT: '/home-services/quote/',
        PORT: 443,
        PROTOCOL: 'https://',
        CALL_BACK: '/AuthorizationCallback/'
      },
      API: {
        HOST: '',
        NAMESPACE: 'api/secure',
        KEY: 'GaHdgFIVA9XmuYQLgSVAvfxCv6a8f8c6'
      },
      API_MICRO_SERVICES: {
        HOST: PRODUCTION_MICRO_SERVICES_HOST,
        NAMESPACE: 'v1'
      }
    },

    APP: {
      addressFinderWithSupplyCheck: false
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.EmberENV.OAUTH.PORT = 4200;
    ENV.EmberENV.OAUTH.PROTOCOL = 'http://';
    ENV.rootURL = '/';

    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.EmberENV.OAUTH.SECONDARY_REDIRECT = '/#/';
    ENV.EmberENV.OAUTH.CALL_BACK = '/auth';

    ENV.EmberENV.API_MICRO_SERVICES.HOST = LOCAL_MICRO_SERVICES_HOST;
    ENV.gReCaptcha.siteKey = '6LeCNhoUAAAAANUUanEmAXeAj7LrFh38KV2Q3LzG';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    ENV.rootURL = '/';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.EmberENV.LOG_STACKTRACE_ON_DEPRECATION = false;
    ENV.EmberENV.API_MICRO_SERVICES.HOST = LOCAL_MICRO_SERVICES_HOST;
    ENV.APP.autoboot = false;
  }

  if (process.env.DEPLOY_ENV === 'staging') {
    ENV.deployEnvironment = 'staging';
    ENV.rootURL = '/apps/home-services/';
    ENV.EmberENV.OAUTH.SECRET_ID = '7ed50971-cb8d-4ebf-bee0-4913544cf894';
    ENV.EmberENV.OAUTH.CLIENT_ID = 'cbdcfa43-dd67-4c38-b418-83572a936fca';
    ENV.gReCaptcha.siteKey = '6Ld2v00UAAAAAOem7bcwHatt0ZQ74zxpGFPr-ENE';
    ENV.EmberENV.API_MICRO_SERVICES.HOST = process.env.STAGING_MICRO_SERVICES_HOST || '';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.EmberENV.trackJs = {
      token: '92dc4639902d4f0f97de2706e556c7d6',
      application: 'homeservices'
    };
  }

  return ENV;
};
