// Copyright 2017-2019 @polkadot/react-components authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StringOrNull } from '@polkadot/react-components/types';
import { AccountId, Balance, BlockNumber, Call, Hash, SessionIndex } from '@polkadot/types/interfaces';
import { IExtrinsic } from '@polkadot/types/types';
import { SubmittableExtrinsic } from '@polkadot/api/promise/types';

export type CallParam = any;

export type CallParams = [] | [CallParam] | [CallParam, CallParam] | [CallParam, CallParam, CallParam];

export interface CallOptions <T> {
  defaultValue?: T;
  isSingle?: boolean;
  paramMap?: (params: any) => CallParams;
  transform?: (value: any) => T;
}

export interface ModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export type TxDef = SubmittableExtrinsic | IExtrinsic | Call | null;

export interface TxSource {
  tx: TxDef;
  isSubmittable: boolean;
}

export type TxIsSubmittableFn = (...args: any[]) => boolean;

export type TxIsSubmittable = boolean;

export interface Slash {
  accountId: AccountId;
  amount: Balance;
}

export interface SessionRewards {
  blockHash: Hash;
  blockNumber: BlockNumber;
  isEventsEmpty: boolean;
  reward: Balance;
  sessionIndex: SessionIndex;
  slashes: Slash[];
}

export interface TxSenders {
  isSubmittable: boolean;
  sendTx: () => void;
  sendUnsigned: () => void;
}

export interface TxProps {
  accountId?: StringOrNull;
  onChangeAccountId?: (_: StringOrNull) => void;
  onQueue?: () => void;
  onSuccess?: () => void;
  onFailed?: () => void;
  onStart?: () => void;
  onUpdate?: () => void;
}

export interface TxState extends TxSenders {
  isSending: boolean;
  accountId?: StringOrNull;
  onChangeAccountId: (_: StringOrNull) => void;
}
