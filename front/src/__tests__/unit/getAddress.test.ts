import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    250: '0x68F7880F7af43a81bEf25E2aE83802Eb6c2DdBFD',
    4200: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 250)`, () => {
    process.env.REACT_APP_CHAIN_ID = '250'
    const expected = address[250]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 4200)`, () => {
    process.env.REACT_APP_CHAIN_ID = '4200'
    const expected = address[4200]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[250]
    expect(getAddress(address)).toEqual(expected)
  })
})
