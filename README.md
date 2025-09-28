# Solidity Smart Contract Training

This repository is designed for learning Solidity smart contract development using Hardhat. It includes a sample `Lock` contract, tests, and deployment scripts to demonstrate key concepts in blockchain development.

## Features

- Sample `Lock` smart contract that locks Ether for a specified period.
- Hardhat configuration for local development and deployment to testnets like Base Sepolia.
- Ignition module for contract deployment.
- Unit tests using Hardhat's testing framework.
- Deployment scripts for easy contract interaction.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- A wallet with test Ether on Base Sepolia (for deployment)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd solidity_smart_contract
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your private key: `PRIVATE_KEY=your_64_character_hex_private_key`
   - Note: Ensure the private key is exactly 64 hexadecimal characters (32 bytes). Do not include the `0x` prefix.

## Usage

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

To see gas usage:

```bash
REPORT_GAS=true npx hardhat test
```

### Deploy Contracts

Deploy to local network:

```bash
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

Deploy to Base Sepolia:

```bash
npx hardhat ignition deploy ./ignition/modules/Lock.ts --network base_sepolia
```

### Run Local Node

```bash
npx hardhat node
```

### Interact with Deployed Contract

Use the deploy script:

```bash
npx hardhat run scripts/deploy.js
```

Or specify network:

```bash
npx hardhat run scripts/deploy.js --network base_sepolia
```

## Project Structure

- `contracts/`: Solidity smart contracts
- `ignition/modules/`: Deployment modules
- `scripts/`: Interaction scripts
- `test/`: Unit tests
- `hardhat.config.ts`: Hardhat configuration

## Troubleshooting

### Invalid Account Error

If you encounter: "\* Invalid account: #0 for network: base_sepolia - private key too short, expected 32 bytes"

- Ensure your `PRIVATE_KEY` in `.env` is exactly 64 hexadecimal characters long.
- Example: `PRIVATE_KEY=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef`
- If using a wallet, export the private key without the `0x` prefix.

### Other Common Issues

- Ensure you have test Ether on Base Sepolia for deployment.
- Check network URLs in `hardhat.config.ts` if deploying to other networks.

## Learning Resources

- [Hardhat Documentation](https://hardhat.org/docs)
- [Solidity Documentation](https://docs.soliditylang.org/)
- [Base Sepolia Faucet](https://sepoliafaucet.com/) for test Ether

## License

This project is for educational purposes. See LICENSE for details.
