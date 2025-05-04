const ARNK_API_KEY = process.env.NEXT_PUBLIC_ARNK_API_KEY;
const ETHEREUM = process.env.NEXT_PUBLIC_ETHEREUM;
const BINANCE = process.env.NEXT_PUBLIC_BINANCE;
const POLYGON = process.env.NEXT_PUBLIC_POLYGON;
const BASE = process.env.NEXT_PUBLIC_BASE;
const HOLESKY = process.env.NEXT_PUBLIC_HOLESKY;
const POLYGON_AMOY = process.env.NEXT_PUBLIC_POLYGON_AMOY;
const SEPOLIA = process.env.NEXT_PUBLIC_SEPOLIA;

export const SUPPORTED_NETWORKS = {
  // Mainnets
  1: {
    name: "Ethereum",
    rpcUrl: `${ETHEREUM}${ARNK_API_KEY}`,
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    isTestnet: false,
  },
  56: {
    name: "Binance Smart Chain",
    rpcUrl: `${BINANCE}${ARNK_API_KEY}`,
    currency: "BNB",
    explorerUrl: "https://bscscan.com",
    isTestnet: false,
  },
  137: {
    name: "Polygon",
    rpcUrl: `${POLYGON}${ARNK_API_KEY}`,
    currency: "POL",
    explorerUrl: "https://polygonscan.com",
    isTestnet: false,
  },
  8453: {
    name: "Base",
    rpcUrl: `${BASE}${ARNK_API_KEY}`,
    currency: "ETH",
    explorerUrl: "https://basescan.org",
    isTestnet: false,
  },
  // Testnets
  17000: {
    name: "Holesky",
    rpcUrl: `${HOLESKY}${ARNK_API_KEY}`,
    currency: "ETH",
    explorerUrl: "https://holesky.etherscan.io",
    isTestnet: true,
  },
  80002: {
    name: "Polygon Amoy",
    rpcUrl: `${POLYGON_AMOY}${ARNK_API_KEY}`,
    currency: "POL",
    explorerUrl: "https://www.oklink.com/amoy",
    isTestnet: true,
  },
  11155111: {
    name: "Sepolia",
    rpcUrl: `${SEPOLIA}${ARNK_API_KEY}`,
    currency: "ETH",
    explorerUrl: "https://sepolia.etherscan.io",
    isTestnet: true,
  },
};

export const COMMISSION_FEE = process.env.NEXT_PUBLIC_COMMISSION_FEE; // ETH
export const RECIPIENT_ADDRESS = process.env.NEXT_PUBLIC_ADMIN;

export const TOKEN_TEMPLATES = [
  {
    name: "Standard ERC20",
    description: "A standard ERC20 token with basic functionality",
    features: ["Transfer", "Approve", "TransferFrom"],
  },
  {
    name: "Mintable",
    description: "Token with minting capability for authorized addresses",
    features: ["Transfer", "Approve", "TransferFrom", "Mint"],
  },
  {
    name: "Burnable",
    description: "Token that can be burned to reduce supply",
    features: ["Transfer", "Approve", "TransferFrom", "Burn"],
  },
  {
    name: "Full Featured",
    description: "Complete token with all features",
    features: [
      "Transfer",
      "Approve",
      "TransferFrom",
      "Mint",
      "Burn",
      "Pause",
      "Snapshot",
    ],
  },
];
