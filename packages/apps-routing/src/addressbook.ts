// Copyright 2017-2019 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from './types';

import AddressBook from '@polkadot/app-address-book';

export default ([
  {
    Component: AddressBook,
    display: {
      needsApi: []
    },
    i18n: {
      defaultValue: '通讯录'
    },
    icon: 'address book',
    name: 'addressbook'
  }
] as Routes);
