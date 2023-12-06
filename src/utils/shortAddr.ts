import { Address } from 'viem';

export default function shortAddr(address: Address, chars = 4): string {
  if (address.length <= 2 * chars) {
    return address;
  }

  return address.substring(0, chars + 2) + '...' + address.substring(address.length - chars);
}
