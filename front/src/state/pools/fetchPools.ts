import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import cakeABI from 'config/abi/cake.json'
import bushABIV1 from 'config/abi/bushV1.json'
import wftmABI from 'config/abi/weth.json'
import { QuoteToken } from 'config/constants/types'
import multicall from 'utils/multicall'
import { getAddress, getWftmAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => p.sousId !== 0)
  const callsStartBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'startBlock',
    }
  })
  const callsEndBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'bonusEndBlock',
    }
  })

  const starts = await multicall(sousChefABI, callsStartBlock)
  const ends = await multicall(sousChefABI, callsEndBlock)

  return poolsWithEnd.map((cakePoolConfig, index) => {
    const startBlock = starts[index]
    const endBlock = ends[index]
    return {
      sousId: cakePoolConfig.sousId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
    }
  })
}

export const fetchPoolsTotalStatking = async () => {
  const nonFtmPools = poolsConfig.filter((p) => p.stakingTokenName !== QuoteToken.FTM)
  const ftmPool = poolsConfig.filter((p) => p.stakingTokenName === QuoteToken.FTM)
  const v1Bushs = poolsConfig.filter((p) => p.bushVersion === 1)

  const callsNonFtmPools = nonFtmPools.map((poolConfig) => {
    return {
      address: poolConfig.stakingTokenAddress,
      name: 'balanceOf',
      params: [getAddress(poolConfig.contractAddress)],
    }
  })
  const callsFtmPools = ftmPool.map((poolConfig) => {
    return {
      address: getWftmAddress(),
      name: 'balanceOf',
      params: [getAddress(poolConfig.contractAddress)],
    }
  })

  const callsV1Bushs = v1Bushs.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'depositFeeToBurn', // only available for version > 0
      sousId: poolConfig.sousId,
    }
  })

  const nonFtmPoolsTotalStaked = await multicall(cakeABI, callsNonFtmPools)
  const ftmPoolsTotalStaked = await multicall(wftmABI, callsFtmPools)
  const V1BushsDepositFee = await multicall(bushABIV1, callsV1Bushs)

  const bushDepositFees = {}
  v1Bushs.forEach((poolConfig, index) => {
    bushDepositFees[poolConfig.sousId] = V1BushsDepositFee[index][0]
  })

  return [
    ...nonFtmPools.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(nonFtmPoolsTotalStaked[index]).toJSON(),
      depositFee: bushDepositFees[p.sousId] ?? 0,
    })),
    ...ftmPool.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(ftmPoolsTotalStaked[index]).toJSON(),
      depositFee: bushDepositFees[p.sousId] ?? 0,
    })),
  ]
}
