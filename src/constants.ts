export const FACTORY_ADDRESS = '0xf2A5DD9ff3aA93807986DeAA9fD316471BD959Cd'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0xc32ed61a35ac401654bdc05f40637b01ce2fe2a5446cc86df1d00ac7faae2bcc'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  STABLE = 1000,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.STABLE]: 20,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
