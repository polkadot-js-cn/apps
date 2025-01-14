// Copyright 2017-2019 @polkadot/react-components authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { I18nProps } from './types';

import React from 'react';
import styled from 'styled-components';
import { useApi } from '@polkadot/react-hooks';

import translate from './translate';
import Icon from './Icon';

export type LinkTypes = 'address' | 'block' | 'extrinsic';

interface Props extends I18nProps {
  className?: string;
  data: string;
  type: LinkTypes;
  withShort?: boolean;
}

const BASE = 'https://kusama.subscan.io';

const CHAINS: Record<string, string> = {
  Alexander: 'alexander',
  Kusama: 'kusama-cc1', // old name via W3F nodes
  'Kusama CC1': 'kusama-cc1',
  'Kusama CC2': 'kusama-cc2',
  'Kusama CC3': 'kusama-cc3'
};

const TYPES: Record<string, string> = {
  address: '/account/',
  block: '/block/',
  extrinsic: '/extrinsic/'
};

function LinkPolkascan ({ className, data, t, type, withShort }: Props): React.ReactElement<Props> | null {
  const { systemChain } = useApi();
  const extChain = CHAINS[systemChain];
  const extType = TYPES[type];

  if (!extChain || !extType) {
    return null;
  }

  return (
    <div className={`${className} ${withShort ? 'withShort' : ''}`}>
      <a
        href={`${BASE}${extType}${data}`}
        rel='noopener noreferrer'
        target='_blank'
      >
        {withShort
          ? <Icon name='external' />
          : t('View this {{type}} on subscan.io', { replace: { type } })
        }
      </a>
    </div>
  );
}

export default translate(
  styled(LinkPolkascan)`
    margin-top: 1rem;
    text-align: right;
  `
);
