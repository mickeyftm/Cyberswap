import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  tokenSymbol?: string
  quoteTokenSymbol?: string
  isTokenOnly?: boolean
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  tokenSymbol,
  quoteTokenSymbol,
  isTokenOnly
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <div style={{width:60, height:60, position:'relative'}} >
        <Image src={`/images/tokens/${tokenSymbol}.png`} alt={tokenSymbol} ml="40px" width={isTokenOnly? 60:40} height={isTokenOnly? 60:40} />
        {!isTokenOnly && <div style={{position:'absolute', width:40, left:20, top:20}} >
          <Image src={`/images/tokens/${quoteTokenSymbol}.png`} alt={quoteTokenSymbol} ml="40px" width={40} height={40} />
        </div>}
      </div>
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel}</Heading>
        <Flex justifyContent="center">
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
