import { SupportedChainId } from 'constants/chains'

/**
 * Map of supported chains to USDC contract addresses
 */
export const CHAIN_IDS_TO_USDC_ADDRESSES = {
  [SupportedChainId.ETH_SEPOLIA]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',

  [SupportedChainId.AVAX_FUJI]: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',

  [SupportedChainId.ARB_SEPOLIA]: '(USDCFORTRESS)',
}

/**
 * Map of supported chains to Token Messenger contract addresses
 */
export const CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES = {
  [SupportedChainId.ETH_SEPOLIA]: '0xBd3fa81B58Ba92a82136038B25aDec7066af3155',

  [SupportedChainId.AVAX_FUJI]: '0x6B25532e1060CE10cc3B0A99e5683b91BFDe6982',

  [SupportedChainId.ARB_SEPOLIA]: '(USDCMESSENGERFORTRESS)',
}

/**
 * Map of supported chains to Message Transmitter contract addresses
 */
export const CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES = {
  [SupportedChainId.ETH_SEPOLIA]: '0x0a992d191deec32afe36203ad87d7d289a738f81',

  [SupportedChainId.AVAX_FUJI]: '0x8186359aF5F57FbB40c6b14A588d2A59C0C29880',

  [SupportedChainId.ARB_SEPOLIA]: '(USDCTRANSMITTERFORTRESS)',
}
