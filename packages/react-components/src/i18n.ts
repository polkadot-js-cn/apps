// Copyright 2017-2019 @polkadot/react-components authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import uiSettings, { LANGUAGE_DEFAULT } from '@polkadot/ui-settings';

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'i18nLangDetector',
  lookup: () => {
    const i18nLang = uiSettings.i18nLang;
    return i18nLang === LANGUAGE_DEFAULT
      ? undefined
      : i18nLang;
  }
});

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json'
    },
    // lng: 'zh',
    debug: false,
    defaultNS: 'ui',
    detection: {
      order: ['i18nLangDetector', 'navigator']
    },
    fallbackLng: ['zh'],
    interpolation: {
      escapeValue: false
    },
    load: 'languageOnly',
    ns: [
      'app-123code',
      'app-accounts',
      'app-address-book',
      'app-claims',
      'app-contracts',
      'app-council',
      'app-dashboard',
      'app-democracy',
      'app-explorer',
      'app-extrinsics',
      'app-generic-asset',
      'app-js',
      'app-parachains',
      'app-settings',
      'app-staking',
      'app-storage',
      'app-sudo',
      'app-toolbox',
      'app-transfer',
      'app-treasury',
      'apps',
      'apps-routing',
      'react-api',
      'react-components',
      'react-params',
      'react-query',
      'react-signer'
    ],
    keySeparator: false,
    nsSeparator: false,
    react: {
      wait: true
    }
  })
  .catch((error: Error): void =>
    console.log('i18n: failure', error)
  );

uiSettings.on('change', settings => {
  const lang = settings.i18nLang === LANGUAGE_DEFAULT
    ? i18n.services.languageDetector.detect()
    : settings.i18nLang;
  i18n.changeLanguage(lang);
});

export default i18n;
