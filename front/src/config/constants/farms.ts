import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    isOldPsc: true,
    isTokenOnly: true,
    lpSymbol: 'HTZ',
    lpAddresses: {
      4200: '',
      250: '0xe7D6971b2e041D736c7aDdcAf2B9d57D376bE5c7', // HTZ-USDC LP
    },
    tokenSymbol: 'HTZ',
    tokenAddresses: {
      4200: '',
      250: '0x68F7880F7af43a81bEf25E2aE83802Eb6c2DdBFD',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 1,
    isOldPsc: true,
    lpSymbol: 'HTZ-FTM LP',
    lpAddresses: {
      4200: '',
      250: '0x5551a831074685a0A1989E8faECdBC5D2a7ce7Af',
    },
    tokenSymbol: 'HTZ',
    tokenAddresses: {
      4200: '',
      250: '0x68F7880F7af43a81bEf25E2aE83802Eb6c2DdBFD',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 2,
    isOldPsc: true,
    lpSymbol: 'HTZ-FUSD LP',
    lpAddresses: {
      4200: '',
      250: '0xE271bC2D5146f296BD2a97561aD956a8c493bF52',
    },
    tokenSymbol: 'FUSD',
    tokenAddresses: {
      4200: '',
      250: '0xad84341756bf337f5a0164515b1f6f993d194e1f',
    },
    quoteTokenSymbol: QuoteToken.HTZ,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 3,
    isPsc: true,
    lpSymbol: 'HTZ-USDC LP',
    lpAddresses: {
      4200: '',
      250: '0xe7D6971b2e041D736c7aDdcAf2B9d57D376bE5c7',
    },
    tokenSymbol: 'HTZ',
    tokenAddresses: {
      4200: '',
      250: '0x68F7880F7af43a81bEf25E2aE83802Eb6c2DdBFD',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 4,
    isPsc: true,
    lpSymbol: 'FTM-USDC LP',
    lpAddresses: {
      4200: '',
      250: '0x4d981FF6B90757c465E942975292A265Ce0A2D35',
    },
    tokenSymbol: 'FTM',
    tokenAddresses: {
      4200: '',
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
    hidden: true,
  },
  {
    pid: 5,
    isPsc: true,
    lpSymbol: 'HTZ-WETH LP',
    lpAddresses: {
      4200: '',
      250: '0xdD1C2969Bf45049700953F16f3bD930485Eda79C',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      4200: '',
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 6,
    isPsc: true,
    lpSymbol: 'HTZ-Link LP',
    lpAddresses: {
      4200: '',
      250: '0x0710a6547A99e6688AEDFA798bCF030E44f306aC',
    },
    tokenSymbol: 'Link',
    tokenAddresses: {
      4200: '',
      250: '0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 7,
    isPsc: true,
    lpSymbol: 'HTZ-CRV LP',
    lpAddresses: {
      4200: '',
      250: '0xe33bC14c102AB296c40dc1E356732864FFc2cd3E',
    },
    tokenSymbol: 'CRV',
    tokenAddresses: {
      4200: '',
      250: '0x1E4F97b9f9F913c46F1632781732927B9019C68b',
    },
    quoteTokenSymbol: QuoteToken.HTZ,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 8,
    isPsc: true,
    lpSymbol: 'WETH-DAI LP',
    lpAddresses: {
      4200: '',
      250: '0xa1ef54f9CB592497c4e65aC048fC5d71dEE6E7b0',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      4200: '',
      250: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 9,
    isPsc: true,
    lpSymbol: 'WETH-FTM LP',
    lpAddresses: {
      4200: '',
      250: '0xd47BDB5831D6b2594602794d1E76a8274Ed58490',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      4200: '',
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 10,
    isPsc: true,
    lpSymbol: 'WETH-WBTC LP',
    lpAddresses: {
      4200: '',
      250: '0x58caB6FA93546e408e59556AEc7754d2b29BE14D',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      4200: '',
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 11,
    isPsc: true,
    lpSymbol: 'FTM-FUSD LP',
    lpAddresses: {
      4200: '',
      250: '0x239194E016BA0121513E86A317cb86B63fB0DCDA',
    },
    tokenSymbol: 'FUSD',
    tokenAddresses: {
      4200: '',
      250: '0xad84341756bf337f5a0164515b1f6f993d194e1f',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 12,
    isPsc: true,
    lpSymbol: 'FTM-WBTC LP',
    lpAddresses: {
      4200: '',
      250: '0xbFa8fecDCD1B5844055e68b852766c8E249eb4aE',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      4200: '',
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  
]

export default farms
