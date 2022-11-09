import React from 'react';
import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import { Date } from "@strapi/icons"

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    // app.addMenuLink({
    //   to: `/plugins/${pluginId}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${pluginId}.plugin.name`,
    //     defaultMessage: name,
    //   },
    //   Component: async () => {
    //     const component = await import(/* webpackChunkName: "[request]" */ './pages/App');

    //     return component;
    //   },
    //   permissions: [
    //     // Uncomment to set the permissions of the plugin here
    //     // {
    //     //   action: '', // the action name should be plugin::plugin-name.actionType
    //     //   subject: null,
    //     // },
    //   ],
    // });

    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.registerPlugin(plugin);

    app.customFields.register([
      {
        name: "performance-date",
        pluginId: "performance",
        type: "date",
        intlLabel: {
          id: "performance.date.label",
          defaultMessage: "Performance date",
        },
        intlDescription: {
          id: "performance.date.description",
          defaultMessage: "Date of the performance",
        },
        icon: Date,
        components: {
          Input: async () => import(/* webpackChunkName: "input-component" */ "./components/Date"),
        }
      },
      {
        name: "performance-start",
        pluginId: "performance",
        type: "time",
        intlLabel: {
          id: "performance.start.label",
          defaultMessage: "Performance start time",
        },
        intlDescription: {
          id: "performance.start.description",
          defaultMessage: "Start time of the performance",
        },
        icon: Date,
        components: {
          Input: async () => import(/* webpackChunkName: "input-component" */ "./components/Start"),
        }
      },
      {
        name: "performance-duration",
        pluginId: "performance",
        type: "time",
        intlLabel: {
          id: "performance.duration.label",
          defaultMessage: "Performance duration",
        },
        intlDescription: {
          id: "performance.duration.description",
          defaultMessage: "Duration of the performance",
        },
        icon: Date,
        components: {
          Input: async () => import(/* webpackChunkName: "input-component" */ "./components/Duration"),
        }
      },
    ]);
  },

  bootstrap(app) {},
  async registerTrads(app) {
    const { locales } = app;

    const importedTrads = await Promise.all(
      locales.map(locale => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
