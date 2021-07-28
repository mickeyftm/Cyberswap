import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://swap.thexdao.com/#/swap?outputCurrency=0x68F7880F7af43a81bEf25E2aE83802Eb6c2DdBFD',
      },
      {
        label: 'Liquidity',
        href:
          'https://swap.thexdao.com/#/add/ETH/0x68F7880F7af43a81bEf25E2aE83802Eb6c2DdBFD',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Launchpad',
  //   icon: 'BushIcon',
  //   href: '/bush',
  // },
  // {
  //   label: 'Techrate Audit',
  //   icon: 'ShieldIcon',
  //   href: 'https://thexdao.com/files/audit_techrate.pdf',
  //   target: '_blank',
  // },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon',
  //   href: 'https://certik.org/projects/cyberswaptoken',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Chart',
  //   icon: 'InfoIcon',
  //   href: 'https://dex.guru/token/0x68F7880F7af43a81bEf25E2aE83802Eb6c2DdBFD-bsc',
  //   target: '_blank',
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/Zer0-crypto/Cyberswap',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/thexfoundationdiscussion',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/BvgpHXDtRQ',
      },
    ],
  },
]

export default config
