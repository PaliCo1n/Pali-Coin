import Image from "next/image";
import Link from "next/link";
import React from "react";

const BuyPage = () => {
  return (
    <>
      <div className="px-4 sm:px-4 lg:px-2 xl:px-1 py-6 bg-gray-50 font-poppins">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-lg sm:text-4xl font-bold bg-gradient-to-r from-paliPink via-gray-400 to-paliGreen text-transparent bg-clip-text shadow-soft mb-4 font-poppins">
              How to Invest in PALI Coin
            </h1>
            <span className="text-gray-800">
              Buy / Sell / Swap / Invest in PALI Coin{" "}
            </span>
          </div>{" "}
          {/* Contract Address */}
          <div className="mb-4 mt-4 ">
            <span className="text-lg sm:text-md xs:text-sm text-gray-400 text-center">
              <strong>PALI Coin CONTRACT ADDRESS:</strong>{" "}
              <span className="text-paliGreen font-semibold break-all bg-gray-200 p-2 rounded-lg">
                0xdf630b84f681c94f7cdbfb230479a0138692f264
              </span>
            </span>{" "}
            <br></br>
          </div>
          <div className="mt-4">
            {" "}
            <span className="text-gray-700 ">
              Please Copy the PALI Coin contract address{" "}
              <span className="text-3xl w-15 h-15">☝🏼</span> and paste it in
              your preferred trading platforms to be able to import and make
              sure you select Polygon network
            </span>
          </div>
          <div className="font-sans mt-5 bg-gray-200 py-5">
            <div className="flex flex-row">
              <h1 className="text-lg sm:text-2xl font-bold text-paliPink">
                How to find PALI Coin{" "}
              </h1>
              <div className="h-[30px] w-[40px] relative">
                <Image
                  src="/images/17.png"
                  alt="PALI Coin Logo"
                  fill
                  sizes="100vw"
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            <p className="text-lg mt-4 text-gray-700">
              - Connect your trusted preferred crypto wallet and follow the
              steps to find and import PALI Coin
            </p>
            <p className="text-lg mt-4 text-gray-700">
              {" "}
              - Ensure you have enough funds to make the purchase
            </p>
          </div>
          {/* Attention Section */}
          <div>
            <h4 className="text-md font-semibold text-gray-800 mt-6 mb-4">
              PLEASE PAY CLOSE ATTENTION TO THE FOLLOWING:
            </h4>
            <ul className="list-disc ml-8 text-gray-700">
              <li>
                CHOOSING THE CORRECT PALI COIN as there are many coins having
                similar name
              </li>
              <li>SECURING YOUR WALLET AND DIGITAL ASSETS</li>
              <li>THE DISCLAIMER AT THE BOTTOM OF THIS PAGE</li>
            </ul>
            {/* Beginners Section */}
            <h2 className="text-lg font-semibold text-pali-teal-dark mt-6 mb-4">
              Guide to Invest in PALI Coin
            </h2>
            <span className="text-gray-700 leading-7 mb-4">
              PALI Coin is a cryptocurrency built on the Polygon blockchain,
              part of the Web3 ecosystem. Blockchain technology powers
              decentralized and automated systems, eliminating intermediaries,
              reducing fees, enhancing privacy, and enabling self-custody of
              digital assets. If you&apos;re new to blockchain, there are many
              online resources to help you explore this transformative
              technology.
            </span>
            <span className="text-gray-700 leading-7 mb-4">
              You can buy PALI Coin directly from trusted cryptocurrency
              platforms or swap it with popular cryptocurrencies like ETH, USDT,
              BNB, BTC, or MATIC.
            </span>
            <span className="text-gray-700 mb-4">
              <br />
              <strong>Symbols:</strong>
              <ul className="list-disc ml-8 mt-2">
                <li>PALI Coin: PALI</li>
                <li>Polygon&apos;s native token: MATIC</li>
              </ul>
            </span>
            {/* Buying Guide */}
            <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
              How to Buy or Swap PALI Coin
            </h2>
            <ol className="list-decimal ml-8 text-gray-700 leading-7">
              <li className="mb-2">
                <strong>Setting Up a Wallet:</strong> Use MetaMask or Trust
                Wallet. Add the Polygon network to your wallet.
              </li>
              <li className="mb-2">
                <strong>Funding Your Wallet:</strong> Deposit cryptocurrencies
                like ETH, USDT, or MATIC into your wallet.
              </li>
              <li className="mb-2">
                <strong>Swapping for PALI Coin on a DEX:</strong> Go to
                QuickSwap or Uniswap, connect your wallet, and swap your crypto
                for PALI Coin using the correct contract address.
              </li>
            </ol>
          </div>
          {/* Trusted Platforms */}
          <div className="mt-6 mb-4">
            <h2 className="text-lg font-semibold mb-3 text-paliGreen">
              📲 Trusted Platforms to Buy and Swap PALI Coin
            </h2>
            <div className="h-[300px] sm:h-[600px] md:h-[800px] relative">
              <Image
                src="/images/platforms.png"
                alt="PALI Coin Logo"
                fill
                sizes="100vw"
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <div>
            <div className="grid gap-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Centralized Exchanges (CEX):
              </h3>
              <ul className="list-disc ml-8 text-gray-700">
                <li>
                  <Link
                    href="https://www.binance.com/"
                    className="text-paliPink"
                  >
                    Binance{" "}
                    <span className="text-paliGreen">
                      https://www.binance.com/
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href=" https://www.kucoin.com/"
                    className="text-paliPink"
                  >
                    KuCoin{" "}
                    <span className="text-paliGreen">
                      https://www.kucoin.com/
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link href="https://www.gate.io/" className="text-paliPink">
                    Gate{" "}
                    <span className="text-paliGreen">https://www.gate.io/</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link href="https://crypto.com/" className="text-paliPink">
                    Crypto{" "}
                    <span className="text-paliGreen">https://crypto.com/</span>{" "}
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 ">
                Decentralized Exchanges (DEX):
              </h3>
              <ul className="list-disc ml-8 text-gray-700">
                <li>
                  <Link
                    href="https://quickswap.exchange/#/"
                    className="text-paliPink"
                  >
                    QuickSwap{" "}
                    <span className="text-paliGreen">
                      https://quickswap.exchange/#/
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.uniswap.org/swap"
                    className="text-paliPink"
                  >
                    Uniswap{" "}
                    <span className="text-paliGreen">
                      https://app.uniswap.org/swap
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.sushi.com/ethereum/swap"
                    className="text-paliPink"
                  >
                    Sushiswap{" "}
                    <span className="text-paliGreen">
                      https://www.sushi.com/ethereum/swap
                    </span>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-gray-800 px-2 py-10">
            <h2 className="text-xl font-bold mb-4">
              🛡️ Trusted Wallets for Users to Consider
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                    alt="MetaMask"
                    width={24}
                    height={24}
                    className="mr-2"
                  />

                  <a href="https://metamask.io/" className="text-paliGreen">
                    MetaMask
                  </a>
                </h3>
                <p>
                  <strong>Platform:</strong> Browser extension (Chrome, Firefox,
                  Edge) & Mobile (iOS, Android)
                </p>
                <p>
                  <strong>Supports:</strong> Ethereum and other EVM-compatible
                  chains (e.g., Polygon, Binance Smart Chain)
                </p>
                <p>
                  <strong>Key Features:</strong> Easy to use with a browser
                  extension and mobile app. Popular among decentralized app
                  users. Supports hardware wallet integration (Ledger, Trezor).
                </p>
                <p>
                  <strong>Why It&apos;s Trusted:</strong> Open-source and
                  well-established with a large user base. Regularly updated
                  with security patches. Provides features like custom networks
                  and token management.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Image
                    src="https://trustwallet.com/_next/static/media/raw.4edbb099.svg"
                    alt="Trust Wallet"
                    width={24}
                    height={24}
                    className="mr-2"
                  />

                  <a href="https://trustwallet.com/" className="text-paliGreen">
                    Trust Wallet
                  </a>
                </h3>
                <p>
                  <strong>Platform:</strong> Mobile (iOS, Android)
                </p>
                <p>
                  <strong>Supports:</strong> Ethereum, Binance Smart Chain,
                  Solana, and many others
                </p>
                <p>
                  <strong>Key Features:</strong> Multi-currency support for
                  hundreds of coins and tokens. In-app staking and decentralized
                  exchange (DEX) features. Supports NFTs and dApp browsers.
                </p>
                <p>
                  <strong>Why It&apos;s Trusted:</strong> Backed by Binance, one
                  of the largest crypto exchanges. Open-source and supports a
                  wide range of assets and networks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Image
                    src="https://www.svgrepo.com/show/331345/coinbase-v2.svg"
                    alt="Coinbase Wallet"
                    width={24}
                    height={24}
                    className="mr-2"
                  />

                  <a
                    href="https://www.coinbase.com/wallet"
                    className="text-paliGreen"
                  >
                    Coinbase Wallet
                  </a>
                </h3>
                <p>
                  <strong>Platform:</strong> Mobile (iOS, Android) & Browser
                  Extension (for Chrome)
                </p>
                <p>
                  <strong>Supports:</strong> Ethereum, Bitcoin, and other major
                  coins and tokens
                </p>
                <p>
                  <strong>Key Features:</strong> Easy integration with Coinbase
                  exchange. Decentralized and non-custodial (unlike the main
                  Coinbase exchange app). Supports dApps, NFTs, and staking.
                </p>
                <p>
                  <strong>Why It&apos;s Trusted:</strong> Backed by Coinbase, a
                  leading and regulated cryptocurrency exchange. User-friendly,
                  especially for beginners.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Image
                    src="https://www.blocknative.com/hubfs/Imported%20sitepage%20images/walletconnect-circle-blue.svg"
                    alt="WalletConnect"
                    width={24}
                    height={24}
                    className="mr-2"
                  />

                  <a
                    href="https://walletconnect.org/"
                    className="text-paliGreen"
                  >
                    WalletConnect
                  </a>
                </h3>
                <p>
                  <strong>Platform:</strong> Not a wallet itself, but a protocol
                  that connects many wallets to DApps
                </p>
                <p>
                  <strong>Supports:</strong> Ethereum and other blockchains
                </p>
                <p>
                  <strong>Key Features:</strong> Allows users to connect their
                  wallet (such as MetaMask, Trust Wallet, and many others) to a
                  DApp using a QR code or deep link. Supports both mobile and
                  desktop apps.
                </p>
                <p>
                  <strong>Why It&apos;s Trusted:</strong> Provides a secure way
                  to connect wallets to decentralized applications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Image
                    src="https://www.blocknative.com/hubfs/LAdger-test%20svg.svg"
                    alt="Ledger Wallet"
                    width={24}
                    height={24}
                    className="mr-2"
                  />

                  <a href="https://www.ledger.com/" className="text-paliGreen">
                    Ledger (Hardware Wallet)
                  </a>
                </h3>
                <p>
                  <strong>Platform:</strong> Hardware wallet (Ledger Nano S,
                  Ledger Nano X)
                </p>
                <p>
                  <strong>Supports:</strong> Ethereum, Bitcoin, and many other
                  cryptocurrencies
                </p>
                <p>
                  <strong>Key Features:</strong> Physical device that stores
                  private keys offline, making it one of the most secure
                  options. Supports a wide range of cryptocurrencies and has a
                  secure app for managing assets.
                </p>
                <p>
                  <strong>Why It&apos;s Trusted:</strong> Industry-leading
                  hardware wallet with top-tier security. Works with MetaMask
                  and other wallet interfaces for interacting with DApps.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Image
                    src="https://www.blocknative.com/hubfs/Icons%20and%20Illustrations/trezor%20wallet%20icon.svg"
                    alt="Trezor Wallet"
                    width={15}
                    height={15}
                    className="mr-2"
                  />

                  <a href="https://trezor.io/" className="text-paliGreen">
                    Trezor (Hardware Wallet)
                  </a>
                </h3>
                <p>
                  <strong>Platform:</strong> Hardware wallet (Trezor One, Trezor
                  Model T)
                </p>
                <p>
                  <strong>Supports:</strong> Ethereum, Bitcoin, and many others
                </p>
                <p>
                  <strong>Key Features:</strong> High security with offline
                  private key storage. Easy integration with software wallets
                  like MetaMask.
                </p>
                <p>
                  <strong>Why It&apos;s Trusted:</strong> One of the most
                  respected names in hardware wallets with a focus on security.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Image
                    src="https://www.blocknative.com/hubfs/Icons%20and%20Illustrations/fortmatic%20wallet%20icon.svg"
                    alt="Fortmatic (Magic)"
                    width={24}
                    height={24}
                    className="mr-2"
                  />

                  <a
                    href="https://www.fortmatic.com/"
                    className="text-paliGreen"
                  >
                    Fortmatic (Magic)
                  </a>
                </h3>
                <p>
                  <strong>Platform:</strong> Browser extension & Mobile (iOS,
                  Android)
                </p>
                <p>
                  <strong>Supports:</strong> Ethereum and other EVM chains
                </p>
                <p>
                  <strong>Key Features:</strong> No need for an extension or
                  seed phrase (login with email or phone number). Easy
                  integration for developers with a simple SDK.
                </p>
                <p>
                  <strong>Why It&apos;s Trusted:</strong> Simplifies the user
                  experience, especially for those who are new to crypto, while
                  maintaining a strong focus on security.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Image
                    src="https://logosandtypes.com/wp-content/uploads/2020/06/myetherwallet.svg"
                    alt="MyEtherWallet"
                    width={24}
                    height={24}
                    className="mr-2"
                  />

                  <a
                    href="https://www.myetherwallet.com/"
                    className="text-paliGreen"
                  >
                    MyEtherWallet (MEW)
                  </a>
                </h3>
                <p>
                  <strong>Platform:</strong> Web, Mobile (iOS, Android),
                  Hardware (via Ledger or Trezor)
                </p>
                <p>
                  <strong>Supports:</strong> Ethereum and ERC-20 tokens
                </p>
                <p>
                  <strong>Key Features:</strong> Fully decentralized and
                  non-custodial wallet. Allows users to create, manage, and
                  interact with Ethereum wallets. Integrates with hardware
                  wallets like Ledger and Trezor for added security.
                </p>
                <p>
                  <strong>Why It&apos;s Trusted:</strong> Open-source,
                  long-standing, and trusted by many Ethereum users. Offers
                  strong privacy and security features.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Image
                    src="https://user-images.githubusercontent.com/13770485/178499990-7943bfeb-025c-47ae-b8f3-c5a6cd6758a3.svg"
                    alt="Exodus Wallet"
                    width={24}
                    height={24}
                    className="mr-2"
                  />

                  <a href="https://www.exodus.com/" className="text-paliGreen">
                    Exodus Wallet
                  </a>
                </h3>
                <p>
                  <strong>Platform:</strong> Desktop & Mobile (iOS, Android)
                </p>
                <p>
                  <strong>Supports:</strong> Ethereum, Bitcoin, and many other
                  coins and tokens
                </p>
                <p>
                  <strong>Key Features:</strong> Multi-currency wallet with an
                  integrated exchange. User-friendly design and features like
                  portfolio tracking.
                </p>
                <p>
                  <strong>Why It&apos;s Trusted:</strong> Popular among users
                  who prefer an all-in-one wallet with the ability to buy, sell,
                  and swap cryptocurrencies. Focuses on security, privacy, and
                  ease of use.
                </p>
              </div>{" "}
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Image
                    src="https://cdn.prod.website-files.com/6602a0963a1822665f363ebf/660d47f2fac9c4d8c283dd75_argent%20logo.svg"
                    alt="Argent Wallet"
                    width={24}
                    height={24}
                    className=""
                  />
                  <a href="https://www.argent.xyz/" className="text-paliGreen">
                    Argent Wallet
                  </a>
                </h3>
                <p>
                  <strong>Platform:</strong> Mobile (iOS, Android)
                </p>
                <p>
                  <strong>Supports:</strong> Ethereum and ERC-20 tokens, DeFi,
                  and NFTs
                </p>
                <p>
                  <strong>Key Features:</strong> Non-custodial wallet with
                  advanced security features like multi-sig and recovery through
                  trusted contacts. Offers integrated DeFi functionality,
                  allowing users to earn interest, lend, and swap directly from
                  the wallet.
                </p>
                <p>
                  <strong>Why It&apos;s Trusted:</strong> Offers high-level
                  security features, a seamless user experience, and is popular
                  in the Ethereum DeFi ecosystem. Backed by a solid team and a
                  strong focus on security and ease of use.
                </p>
              </div>{" "}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-paliPink">
                Additional Considerations:
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Security:</strong> Wallets like MetaMask, Coinbase
                  Wallet, and hardware wallets like Ledger and Trezor are the
                  most secure.
                </li>
                <li>
                  <strong>Ease of Use:</strong> For newcomers, wallets like
                  MetaMask, Trust Wallet, and Coinbase Wallet are very intuitive
                  and user-friendly.
                </li>
                <li>
                  <strong>Backup Options:</strong> Suggest wallets that support
                  multiple backup and recovery options (e.g., seed phrases,
                  password protection, etc.)
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <p className="text-gray-700">
              Now after setting up your preferred Trading Platform account,
              Connect your trusted crypto wallet to your account and making sure
              you have enough coins/tokens to swap or buy, remember to copy PALI
              Coin CONTRACT ADDRESS:{" "}
              <span className="text-paliGreen font-semibold break-all bg-gray-200 p-2 rounded-lg">
                0xdf630b84f681c94f7cdbfb230479a0138692f264
              </span>{" "}
              <br />
              Copy PALI Coin contract address{" "}
              <span className="text-3xl w-15 h-15">☝🏼</span> and paste it in
              your preferred trading platforms to be able to import the coin
              into active trading and remember it&apos;s Polygon network
            </p>
          </div>
          {/* Security */}
          <div>
            {/* Security Tips */}
            <h2 className="text-lg font-semibold text-paliPink mb-4">
              SECURING YOUR ASSETS
            </h2>
            <div className="h-[300px] sm:h-[600px] md:h-[800px] relative">
              <Image
                src="/images/safe.png"
                alt="PALI Coin Logo"
                fill
                sizes="100vw"
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4 leading-7">
              Crypto security is critical. Follow these guidelines to safeguard
              your assets:
            </p>
            <ul className="list-disc ml-8 text-gray-700 leading-7">
              <li>
                Write down your wallet recovery phrase and store it securely in
                multiple physical locations.
              </li>
              <li>
                Do not store your recovery phrase digitally (e.g., on your
                phone, email, or screenshots).
              </li>
              <li>
                Use wallet passcodes, Face ID, or other protective measures.
              </li>
              <li>
                For large holdings, consider using a hardware wallet like Ledger
                or Trezor for added security.
              </li>
            </ul>

            {/* Disclaimer */}
            <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
              🚨 Disclaimer
            </h2>
            <p className="text-gray-700 leading-7">
              Cryptocurrencies, including PALI Coin, carry inherent risks due to
              volatility and market fluctuations. Always conduct thorough
              research and be cautious with investments. Never share your
              private keys or seed phrases with anyone.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center justify-center mt-8 mb-10">
          <p className="text-center p-2 text-gray-600 mb-5 mt-6">
            🔻 Buy / Sell / Swap / Invest in PALI Coin 🔻
          </p>
          <a
            href="https://www.sushi.com/polygon/swap?token0=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&token1=0xDf630b84F681c94f7cdbfB230479a0138692F264"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-1/3 inline-block min-w-[70px] px-6 py-3 text-white font-bold text-center rounded-lg bg-gradient-to-r from-paliPink to-pali-teal transition-all duration-300 hover:scale-105 hover:bg-gradient-to-l hover:from-paliPinkDark hover:to-pali-teal-dark text-xl">
              Buy PALI
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
