import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, MenuIcon } from '@pancakeswap-libs/uikit'

const CoreTag = (props) => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />} {...props}>
    Core
  </Tag>
)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />} {...props}>
    Community
  </Tag>
)

const FantomTag = (props) => (
  <Tag variant="binance" outline startIcon={<MenuIcon />} {...props}>
    Fantom
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

export { CoreTag, CommunityTag, FantomTag, DualTag }
