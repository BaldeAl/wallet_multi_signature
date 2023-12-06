import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SharedAccount
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export const sharedAccountABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_user1', internalType: 'address', type: 'address' },
      { name: '_user2', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requester',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ApproveWithdrawal',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'destination',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'RequestWithdrawal',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'requester', internalType: 'address', type: 'address' }],
    name: 'approveWithdrawal',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'requester', internalType: 'address', type: 'address' }],
    name: 'getPendingWithdrawal',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSharedBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'pendingWithdrawals',
    outputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'destination', internalType: 'address payable', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'destination', internalType: 'address payable', type: 'address' },
    ],
    name: 'requestWithdrawal',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'sharedBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'user1',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'user2',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export const sharedAccountAddress = {
  11155111: '0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export const sharedAccountConfig = {
  address: sharedAccountAddress,
  abi: sharedAccountABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link sharedAccountABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof sharedAccountABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof sharedAccountABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractRead({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    ...config,
  } as UseContractReadConfig<
    typeof sharedAccountABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"getPendingWithdrawal"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountGetPendingWithdrawal<
  TFunctionName extends 'getPendingWithdrawal',
  TSelectData = ReadContractResult<typeof sharedAccountABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof sharedAccountABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractRead({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'getPendingWithdrawal',
    ...config,
  } as UseContractReadConfig<
    typeof sharedAccountABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"getSharedBalance"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountGetSharedBalance<
  TFunctionName extends 'getSharedBalance',
  TSelectData = ReadContractResult<typeof sharedAccountABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof sharedAccountABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractRead({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'getSharedBalance',
    ...config,
  } as UseContractReadConfig<
    typeof sharedAccountABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"pendingWithdrawals"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountPendingWithdrawals<
  TFunctionName extends 'pendingWithdrawals',
  TSelectData = ReadContractResult<typeof sharedAccountABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof sharedAccountABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractRead({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'pendingWithdrawals',
    ...config,
  } as UseContractReadConfig<
    typeof sharedAccountABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"sharedBalance"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountSharedBalance<
  TFunctionName extends 'sharedBalance',
  TSelectData = ReadContractResult<typeof sharedAccountABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof sharedAccountABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractRead({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'sharedBalance',
    ...config,
  } as UseContractReadConfig<
    typeof sharedAccountABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"user1"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountUser1<
  TFunctionName extends 'user1',
  TSelectData = ReadContractResult<typeof sharedAccountABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof sharedAccountABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractRead({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'user1',
    ...config,
  } as UseContractReadConfig<
    typeof sharedAccountABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"user2"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountUser2<
  TFunctionName extends 'user2',
  TSelectData = ReadContractResult<typeof sharedAccountABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof sharedAccountABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractRead({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'user2',
    ...config,
  } as UseContractReadConfig<
    typeof sharedAccountABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link sharedAccountABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof sharedAccountAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof sharedAccountABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof sharedAccountABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof sharedAccountABI, TFunctionName, TMode>({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"approveWithdrawal"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountApproveWithdrawal<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof sharedAccountAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof sharedAccountABI,
          'approveWithdrawal'
        >['request']['abi'],
        'approveWithdrawal',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'approveWithdrawal'
      }
    : UseContractWriteConfig<
        typeof sharedAccountABI,
        'approveWithdrawal',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'approveWithdrawal'
      } = {} as any,
) {
  return useContractWrite<typeof sharedAccountABI, 'approveWithdrawal', TMode>({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'approveWithdrawal',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"deposit"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountDeposit<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof sharedAccountAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof sharedAccountABI,
          'deposit'
        >['request']['abi'],
        'deposit',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'deposit' }
    : UseContractWriteConfig<typeof sharedAccountABI, 'deposit', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'deposit'
      } = {} as any,
) {
  return useContractWrite<typeof sharedAccountABI, 'deposit', TMode>({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'deposit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"requestWithdrawal"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountRequestWithdrawal<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof sharedAccountAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof sharedAccountABI,
          'requestWithdrawal'
        >['request']['abi'],
        'requestWithdrawal',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'requestWithdrawal'
      }
    : UseContractWriteConfig<
        typeof sharedAccountABI,
        'requestWithdrawal',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'requestWithdrawal'
      } = {} as any,
) {
  return useContractWrite<typeof sharedAccountABI, 'requestWithdrawal', TMode>({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'requestWithdrawal',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link sharedAccountABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function usePrepareSharedAccountWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof sharedAccountABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    ...config,
  } as UsePrepareContractWriteConfig<typeof sharedAccountABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"approveWithdrawal"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function usePrepareSharedAccountApproveWithdrawal(
  config: Omit<
    UsePrepareContractWriteConfig<typeof sharedAccountABI, 'approveWithdrawal'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'approveWithdrawal',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof sharedAccountABI,
    'approveWithdrawal'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"deposit"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function usePrepareSharedAccountDeposit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof sharedAccountABI, 'deposit'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'deposit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof sharedAccountABI, 'deposit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link sharedAccountABI}__ and `functionName` set to `"requestWithdrawal"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function usePrepareSharedAccountRequestWithdrawal(
  config: Omit<
    UsePrepareContractWriteConfig<typeof sharedAccountABI, 'requestWithdrawal'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    functionName: 'requestWithdrawal',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof sharedAccountABI,
    'requestWithdrawal'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link sharedAccountABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof sharedAccountABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractEvent({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    ...config,
  } as UseContractEventConfig<typeof sharedAccountABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link sharedAccountABI}__ and `eventName` set to `"ApproveWithdrawal"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountApproveWithdrawalEvent(
  config: Omit<
    UseContractEventConfig<typeof sharedAccountABI, 'ApproveWithdrawal'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractEvent({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    eventName: 'ApproveWithdrawal',
    ...config,
  } as UseContractEventConfig<typeof sharedAccountABI, 'ApproveWithdrawal'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link sharedAccountABI}__ and `eventName` set to `"Deposit"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountDepositEvent(
  config: Omit<
    UseContractEventConfig<typeof sharedAccountABI, 'Deposit'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractEvent({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    eventName: 'Deposit',
    ...config,
  } as UseContractEventConfig<typeof sharedAccountABI, 'Deposit'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link sharedAccountABI}__ and `eventName` set to `"RequestWithdrawal"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xB56ebdb5dd4DEE6bb2e0cbbdEDfaF27fCA6e4f09)
 */
export function useSharedAccountRequestWithdrawalEvent(
  config: Omit<
    UseContractEventConfig<typeof sharedAccountABI, 'RequestWithdrawal'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof sharedAccountAddress } = {} as any,
) {
  return useContractEvent({
    abi: sharedAccountABI,
    address: sharedAccountAddress[11155111],
    eventName: 'RequestWithdrawal',
    ...config,
  } as UseContractEventConfig<typeof sharedAccountABI, 'RequestWithdrawal'>)
}
