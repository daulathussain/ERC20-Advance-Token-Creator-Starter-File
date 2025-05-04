export const truncateAddress = (address) => {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatTokenAmount = (amount, decimals = 18) => {
  if (!amount) return "0";

  try {
    // Convert to a readable format
    const formattedAmount = parseFloat(amount) / Math.pow(10, decimals);

    // Handle large numbers
    if (formattedAmount > 1e9) {
      return `${(formattedAmount / 1e9).toFixed(2)}B`;
    } else if (formattedAmount > 1e6) {
      return `${(formattedAmount / 1e6).toFixed(2)}M`;
    } else if (formattedAmount > 1e3) {
      return `${(formattedAmount / 1e3).toFixed(2)}K`;
    }

    // For small numbers
    return formattedAmount.toLocaleString(undefined, {
      maximumFractionDigits: 6,
    });
  } catch (error) {
    console.error("Error formatting token amount:", error);
    return "0";
  }
};

export const getExplorerUrl = (chainId, hash, type = "tx") => {
  const explorers = {
    1: "https://etherscan.io",
    56: "https://bscscan.com",
    137: "https://polygonscan.com",
    8453: "https://basescan.org",
    17000: "https://holesky.etherscan.io",
    80002: "https://www.oklink.com/amoy",
    11155111: "https://sepolia.etherscan.io",
  };

  const baseUrl = explorers[chainId] || explorers[1];

  switch (type) {
    case "tx":
      return `${baseUrl}/tx/${hash}`;
    case "address":
      return `${baseUrl}/address/${hash}`;
    case "token":
      return `${baseUrl}/token/${hash}`;
    default:
      return `${baseUrl}/${type}/${hash}`;
  }
};
