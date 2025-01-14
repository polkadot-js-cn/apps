// Copyright 2017-2019 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from './types';

import Sudo from '@polkadot/app-sudo';

export default ([
  {
    Component: Sudo,
    display: {
      needsAccounts: true,
      needsApi: [
        'tx.sudo.setKey'
      ],
      needsSudo: true
    },
    i18n: {
      defaultValue: '超级权限'
    },
    icon: 'unlock',
    name: 'sudo'
  }
] as Routes);
