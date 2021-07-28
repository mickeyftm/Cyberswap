import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://thexdao.com',
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
    href: 'https://thexdao.com/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://thexdao.com/#/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://thexdao.com/#/lottery',
  },
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
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Chart',
  //   icon: 'InfoIcon',
  //   href: 'https://dex.guru/token/0x68F7880F7af43a81bEf25E2aE83802Eb6c2DdBFD-bsc',
  //   // @ts-ignore
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
        // @ts-ignore
        target: '_blank',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://doc.thexdao.com/',
      //   target: '_blank',
      // },
      // {
      //   label: 'Blog',
      //   href: 'https://cyberswaptokendex.medium.com/',
      //   target: '_blank',
      // },
      // {
      //   label: 'Announcements',
      //   href: 'https://t.me/cyberswaptoken',
      //   target: '_blank',
      // },
      {
        label: 'Telegram',
        href: 'https://t.me/thexfoundationdiscussion',
        // @ts-ignore
        target: '_blank',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/BvgpHXDtRQ',
        // @ts-ignore
        target: '_blank',
      },
    ],
  },
]

export default config
