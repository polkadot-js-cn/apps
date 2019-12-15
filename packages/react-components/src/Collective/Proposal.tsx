// Copyright 2017-2019 @polkadot/app-democracy authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DerivedCollectiveProposal } from '@polkadot/api-derive/types';
import { I18nProps, VotingType } from '@polkadot/react-components/types';
import { CollectiveProps } from './types';

import React from 'react';

import { AddressMini, Voting } from '@polkadot/react-components';
import ProposalCell from '@polkadot/app-democracy/Overview/ProposalCell';
import { formatNumber } from '@polkadot/util';

import translate from '../translate';

interface Props extends CollectiveProps, I18nProps {
  proposal: DerivedCollectiveProposal;
}

function Proposal ({ className, collective, proposal: { hash, votes, proposal }, t }: Props): React.ReactElement<Props> | null {
  if (!votes || !proposal) {
    return null;
  }

  const { ayes, index, nays, threshold } = votes;

  return (
    <tr className={className}>
      <td className='number top'><h1>{formatNumber(index)}</h1></td>
      <ProposalCell
        className='top'
        proposalHash={hash}
        proposal={proposal}
      />
      <td className='number top'>
        <label>{t('threshold')}</label>
        {formatNumber(ayes.length)}/{formatNumber(threshold)}
      </td>
      <td className='top'>
        {ayes.map((address, index): React.ReactNode => (
          <AddressMini
            key={`${index}:${address}`}
            label={index === 0 ? t('Aye') : undefined}
            value={address}
            withBalance={false}
          />
        ))}
      </td>
      <td className='top'>
        {nays.map((address, index): React.ReactNode => (
          <AddressMini
            key={`${index}:${address}`}
            label={index === 0 ? t('Nay') : undefined}
            value={address}
            withBalance={false}
          />
        ))}
      </td>
      <td className='number top together'>
        <Voting
          hash={hash}
          idNumber={index}
          proposal={proposal}
          type={collective === 'council' ? VotingType.Council : VotingType.TechnicalCommittee}
        />
      </td>
    </tr>
  );
}

export default translate(Proposal);
