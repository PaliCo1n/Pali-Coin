import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhitepaperPart4 = () => {
  return (
    <div className="font-sans text-left p-6 bg-gray-50">
      <p className="text-left p-2 text-pali-teal-dark">
        <strong>
          Use Cases - How PALI Coin Can Transform the Palestinian Economy
        </strong>
      </p>

      <section className="">
        <p className="text-left p-2 text-gray-600 font-semibold">Remittances</p>
        <p className="text-left p-2 text-gray-600">
          A significant portion of the Palestinian economy relies on remittances
          sent by Palestinians living abroad. Every year, billions of dollars
          are sent back home, providing crucial financial support for families
          and communities. However, the remittance process often involves high
          fees, delays, and inefficiencies, which significantly reduce the
          amount of money that actually reaches its destination. PALI Coin
          offers a revolutionary solution by allowing for instant, low-cost
          cross-border transfers. Transactions made using PALI Coin are
          processed directly on the blockchain, bypassing traditional
          intermediaries such as banks or money transfer services, which often
          charge hefty fees and cause delays. With PALI Coin, remittances can be
          completed in real-time, ensuring that the full amount sent is received
          by the intended recipient without any deductions. This not only
          improves the financial well-being of Palestinian families but also
          promotes a more efficient flow of capital into the local Palestinian
          economy, increasing access to resources and opportunities.
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            Lower transaction fees compared to traditional remittance services.
          </li>
          <li>Faster transfers, with transactions completed within minutes.</li>
          <li>
            More capital flowing into Palestinian communities, supporting local
            businesses and economic development.
          </li>
        </ul>
      </section>

      <section className="my-3">
        <p className="text-left p-2 text-gray-600 font-semibold">
          Cross-Border Trade
        </p>
        <p className="text-left p-2 text-gray-600">
          Another crucial use case for PALI Coin is in facilitating cross-border
          trade. Palestinian businesses, both within the occupied territories
          and in the diaspora, often face barriers when conducting international
          trade. These barriers include high transaction fees, currency
          fluctuations, and dependency on traditional financial intermediaries
          such as banks, which can complicate and delay business transactions.
          By adopting PALI Coin, businesses can avoid costly international
          payment systems, ensuring lower fees and faster transactions. Since
          PALI Coin is not tied to any specific national currency, it eliminates
          the risk of currency devaluation that businesses might face when
          trading in volatile currencies. This stability makes it easier for
          businesses to plan and execute international deals with greater
          certainty.
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            Reduced international payment fees, leading to cost savings for
            businesses.
          </li>
          <li>
            Currency risk mitigation, making transactions more predictable.
          </li>
          <li>
            Faster and more efficient cross-border transactions, promoting
            business growth.
          </li>
        </ul>
      </section>

      <section className="my-4">
        <p className="text-left p-2 text-gray-600 font-semibold">
          Humanitarian Aid Transparency
        </p>
        <p className="text-left p-2 text-gray-600">
          One of the key strengths of blockchain technology, and a central use
          case for PALI Coin, is its ability to increase transparency in
          financial transactions. Humanitarian aid often faces significant
          challenges when it comes to mismanagement or misuse of funds.
          Donations intended to support the Palestinian people may be diverted,
          leading to distrust among donors and inefficiency in aid distribution.
          Using PALI Coin&apos;s blockchain ledger, donations can be tracked in
          real time, ensuring that funds are allocated properly and reach those
          in need. The immutable nature of the blockchain guarantees that no one
          can alter the transaction history, providing transparency and
          accountability for all parties involved. This creates trust with
          donors and ensures that the aid is being used as intended, leading to
          greater confidence in the process and ultimately increasing the flow
          of humanitarian assistance to Palestinians.
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            Real-time tracking of donations, providing full visibility into the
            allocation of funds.
          </li>
          <li>Prevention of fraud or mismanagement in aid distribution.</li>
          <li>
            Increased donor trust, ensuring continued support and donations.
          </li>
        </ul>
      </section>

      <section className="my-4">
        <p className="text-left p-2 text-gray-600 font-semibold">
          Technology Stack - Blockchain Platform and Security
        </p>
        <p className="text-lg font-semibold p-2 text-paliGreen">
          Blockchain Platform
        </p>
        <p className="text-left p-2 text-gray-600">
          PALI Coin is built on the Ethereum blockchain, a widely used and
          secure platform known for its robust smart contract capabilities.
          Ethereum&apos;s decentralized nature and large developer community
          make it an ideal foundation for creating scalable, secure, and
          transparent financial solutions. We use Ethereum&apos;s ERC-20 token
          standard to create a stable and interoperable coin that can be easily
          integrated into existing platforms and exchanges.
        </p>
        <p className="text-lg font-semibold p-2 text-paliPink">
          Security Features
        </p>
        <p className="text-left p-2 text-gray-600">
          Security is a top priority for PALI Coin. By utilizing the Ethereum
          blockchain, which benefits from years of security audits and
          improvements, we ensure that the platform is highly secure.
          Additionally, our coin will undergo regular smart contract audits to
          prevent vulnerabilities and ensure the integrity of the network.
          Multi-signature wallets, two-factor authentication, and other security
          measures will be implemented to protect user assets.
        </p>
      </section>

      <section className="my-4">
        <p className="text-left font-semibold p-2 text-paliGreen">
          Governance - Decentralized and Community-Driven Model
        </p>
        <p className="text-lg font-semibold p-2 text-gray-700">
          Decentralized Governance
        </p>
        <p className="text-left p-2 text-gray-600">
          PALI Coin follows a decentralized governance model, meaning that
          decisions related to the future development and direction of the
          project will be made by the community. Token holders will have voting
          power, enabling them to propose and vote on changes to the protocol,
          economic model, and other key aspects of the project. This ensures
          that the project remains transparent, accountable, and aligned with
          the interests of the Palestinian community.
        </p>
        <p className="text-lg font-semibold text-gray-600 p-2">
          Community Engagement
        </p>
        <p className="text-left p-2 text-gray-600">
          Engaging the Palestinian diaspora and local communities is central to
          the success of PALI Coin. Through education, partnerships, and
          grassroots efforts, PALI Coin aims to raise awareness and promote
          adoption. We plan to collaborate with local organizations, charities,
          and businesses to integrate PALI Coin into the Palestinian economy,
          ensuring that it is widely accepted and used.
        </p>
      </section>
      <div className="h-[300px] sm:h-[400px] md:h-[500px] relative">
        <Image
          src="/images/3.jpg"
          alt="PALI Coin Logo"
          fill
          sizes="100vw"
          className="rounded-lg"
        />
      </div>
      <section className="my-4">
        <p className="text-left p-2 text-paliPink font-semibold">
          Tokenomics - The Economic Model of PALI Coin
        </p>
        <p className="text-lg font-semibold p-2 text-pali-teal-dark">
          Token Supply and Distribution
        </p>
        <p className="text-left p-2 text-gray-600 ">
          The total supply of PALI Coin will be capped at a fixed amount,
          ensuring scarcity and the preservation of its value over time. By
          having a maximum supply, the project aims to prevent inflation and
          maintain the token&apos;s worth in the long term. The distribution of
          tokens will be strategically planned to support the growth and
          sustainability of the PALI Coin ecosystem.
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            Development Team: A portion of the tokens will be allocated to the
            core team responsible for building and maintaining the PALI Coin
            ecosystem.
          </li>
          <li>
            Community Incentives: Tokens will be set aside for community-driven
            initiatives, like rewards for users who contribute to the
            ecosystem&apos;s growth.
          </li>
          <li>
            Strategic Partnerships: Tokens will be allocated to forge key
            strategic partnerships with businesses, organizations, and
            influencers.
          </li>
          <li>
            Palestinian Community: A significant portion will be directed to
            support remittances, humanitarian aid, and investment opportunities
            for local businesses.
          </li>
        </ul>
        <p className="text-lg font-semibold text-gray-600 p-2 mt-2">
          Utility of PALI Coin
        </p>
        <p className="text-left p-2 text-gray-600 ">
          PALI Coin is designed to function as a utility token, meaning its
          primary purpose is to be used within the PALI Coin ecosystem for
          various applications such as remittances, trade payments,
          community-driven investments, and governance participation.
        </p>
      </section>

      <section className="my-4">
        <p className="text-left text-lg font-semibold text-gray-600 p-2 mt-2">
          Adoption Strategy - Spreading the Word and Gaining Traction
        </p>
        <p className="text-lg font-semibold text-paliGreen p-2 ">
          Marketing and Outreach
        </p>
        <p className="text-left p-2 text-gray-600 ">
          To gain traction, PALI Coin will implement a comprehensive marketing
          strategy that includes online campaigns, partnerships with Palestinian
          organizations, and collaborations with influencers within the
          Palestinian diaspora.
        </p>
        <p className="text-lg font-semibold text-paliGreen p-2 ">
          Strategic Partnerships
        </p>
        <p className="text-left p-2 text-gray-600 ">
          We aim to partner with Palestinian businesses, nonprofits, and
          government entities to facilitate the adoption of PALI Coin. This will
          include integrating PALI Coin into local businesses and developing a
          network of exchanges where users can easily buy, sell, and trade PALI
          Coin.
        </p>
      </section>

      <section className="my-4">
        <p className="text-left text-lg font-semibold text-paliGreen p-2 ">
          Call to Action
        </p>
        <p className="text-left p-2 text-gray-600 ">
          Join us in redefining the financial future of Palestine. Whether
          you&apos;re a member of the Palestinian diaspora, a business owner, or
          an advocate for global financial inclusion, PALI Coin offers a way to
          make a tangible impact. Support PALI Coin by becoming a part of the
          movement—invest in the future, and empower Palestinians worldwide.
        </p>
      </section>

      <section className="my-4">
        <p className="text-left p-2 text-lg font-semibold text-paliPink">
          Problem Statement
        </p>
        <p className="text-left p-2 text-gray-600 ">
          PALI Coin addresses critical issues like financial exclusion, costly
          international remittances, lack of transparency in aid distribution,
          and economic dependency. By leveraging blockchain, it offers a
          decentralized financial solution, lower transaction costs, and
          transparent aid distribution.
        </p>
      </section>

      <section className="my-4">
        <p className="text-left p-2 text-lg font-semibold text-paliGreen">
          Security and Risk Management
        </p>
        <p className="text-left p-2 text-gray-600 ">
          PALI Coin employs regular smart contract audits, advanced cryptography
          for secure transactions, and backup protocols to ensure the integrity
          and security of the network. We also have volatility management and
          regulatory compliance to mitigate risks.
        </p>
      </section>

      <section className="my-4">
        <p className="text-left p-2 text-lg font-semibold text-paliGreen">
          Community and Cultural Initiatives
        </p>
        <p className="text-left p-2 text-gray-600 ">
          PALI Coin supports Palestinian arts, language, education, and
          entrepreneurship through dedicated funding programs.
        </p>
      </section>

      <section className="my-4">
        <p className="text-left p-2 text-lg font-semibold text-paliPink">
          Partnerships and Collaborations
        </p>
        <p className="text-left p-2 text-gray-600 ">
          We collaborate with NGOs, financial institutions, and global
          blockchain projects to facilitate aid, fiat conversion, and expand the
          reach of PALI Coin.
        </p>
      </section>
      {/* {* Allocations*} */}
      <section>
        <p className="text-left p-2 font-semibold text-lg text-paliGreen">
          How The Allocation Works
        </p>

        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="text-left p-2 text-paliGreen">Allocation</th>
              <th className="text-left p-2 text-paliGreen">Purpose</th>
              <th className="text-left p-2 text-paliGreen">Implementation</th>
              <th className="text-left p-2 text-paliGreen">Security</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="p-2 text-gray-700 font-semibold">
                <span className="text-paliGreen font-semibold">70%</span>{" "}
                Liquidity Pool
              </td>
              <td className="p-2 text-gray-700">
                Ensures liquidity, preventing price manipulation and reducing
                slippage.
              </td>
              <td className="p-2 text-gray-700">
                Provide liquidity on DEX platforms like Uniswap or PancakeSwap,
                pairing with a stable asset (USDT or ETH).
              </td>
              <td className="p-2 text-gray-700">
                Liquidity pool tokens are locked to safeguard against rug-pull
                risks, ensuring stability and investor trust.
              </td>
            </tr>

            <tr className="border-b border-gray-700">
              <td className="p-2 text-gray-700 font-semibold">
                <span className="text-paliGreen font-semibold">20%</span>{" "}
                Reserve Fund (Wallet) + Token Sale (ICO/IDO)
              </td>
              <td className="p-2 text-gray-700">
                Reserved for emergencies, future development, strategic buys,
                and fundraising through ICO/IDO.
              </td>
              <td className="p-2 text-gray-700">
                The reserve can be used for token buybacks, treasury management,
                or covering unexpected expenses. Conduct the ICO/IDO to raise
                funds for project development, marketing, and operations.
              </td>
              <td className="p-2 text-gray-700">
                The reserve is securely stored and kept transparent to ensure
                accountability. The ICO/IDO process is designed to be
                transparent, with clear token distribution plans to ensure fair
                access and prevent manipulation.
              </td>
            </tr>

            <tr className="border-b border-gray-700">
              <td className="p-2 text-gray-700 font-semibold">
                <span className="text-paliGreen font-semibold">5%</span>{" "}
                Ecosystem Development
              </td>
              <td className="p-2 text-gray-700">
                Supports charitable initiatives, grants, and platform growth.
              </td>
              <td className="p-2 text-gray-700">
                Fund community-driven projects and ecosystem development.
              </td>
              <td className="p-2 text-gray-700">
                Transparent allocation ensures that the funds are used
                responsibly and in alignment with the project&apos;s mission.
              </td>
            </tr>

            <tr className="border-b border-gray-700">
              <td className="p-2 text-gray-700 font-semibold">
                <span className="text-paliGreen font-semibold">3%</span>{" "}
                Marketing - Partnerships
              </td>
              <td className="p-2 text-gray-700">
                Drives awareness, partnerships, and community engagement.
              </td>
              <td className="p-2 text-gray-700">
                Allocate funds for strategic advertising, onboarding new users,
                and building alliances.
              </td>
              <td className="p-2 text-gray-700">
                Marketing funds are allocated with a clear strategy and
                oversight to maximize effectiveness and avoid misuse.
              </td>
            </tr>

            <tr>
              <td className="p-2 text-gray-700 font-semibold">
                <span className="text-paliGreen font-semibold">2%</span> Team -
                Development
              </td>
              <td className="p-2 text-gray-700">
                Rewards for the project team, advisors, and developers.
              </td>
              <td className="p-2 text-gray-700">
                Use vesting schedules (12-month cliff + 2 years vesting) to
                ensure long-term commitment and avoid centralization.
              </td>
              <td className="p-2 text-gray-700">
                Vesting schedules ensure that the team remains incentivized for
                the long-term growth of the project, aligning their success with
                the project’s success.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        {/* Goal List */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold font-poiret-one text-center text-pali-teal-dark mt-8">
            Mission & Goals{" "}
            <div className="h-[120px] sm:h-[150px] md:h-[200px] relative">
              <Image
                src="/images/goal1.png"
                alt="PALI Coin Logo"
                fill
                sizes="100vw"
                className="object-contain rounded-lg"
              />
            </div>
          </h2>

          {/* Goal List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {goals.map((goal, index) => (
              <div key={index} className="bg-paliPink p-6 rounded-lg">
                <h3 className="text-xl font-semibold font-poiret-one text-center bg-gradient-to-r from-gray-600 via-gray-600 to-gray-900 text-transparent bg-clip-text mb-4">
                  {goal.title}
                </h3>
                <p>{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-4 px-4 ">
        <p className="text-left p-2 text-lg font-bold text-paliGreen">
          Conclusion
        </p>
        <p className="text-left p-2 text-gray-600 ">
          PALI Coin represents a movement toward empowerment, self-sufficiency,
          and global unity. By combining technology with community values, it
          lays the foundation for a brighter future, ensuring Palestinians
          worldwide can thrive, connect, and contribute to shared prosperity.
        </p>
        {/* PDF Link */}
        <div className="text-left mt-10">
          <a
            href="/pdf/PaliCoin-WhitePaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white bg-gradient-to-r from-paliPink via-gray-400 to-paliGreen rounded-md  hover:from-paliPinkDark hover:to-pali-teal-dark"
            download
          >
            Download Pali Coin (PDF){" "}
            <span className="text-3xl align-middle">🔻</span>
          </a>
        </div>
      </section>
      <div className="h-[300px] sm:h-[400px] md:h-[600px] relative">
        <Image
          src="/images/1.png"
          alt="PALI Coin Logo"
          fill
          sizes="100vw"
          className="object-contain rounded-lg"
        />
      </div>
      <p className="text-center p-2 text-gray-600 mb-5 mt-6">
        join our community & Invest in PALI Coin
      </p>
      <div className="flex justify-center items-center w-full">
        <Link
          href="/buy"
          className="w-1/3 inline-block min-w-[70px] px-6 py-3 text-white font-bold text-center rounded-lg bg-gradient-to-r from-paliPink to-pali-teal transition-all duration-300 hover:scale-105 hover:bg-gradient-to-l hover:from-paliPinkDark hover:to-pali-teal-dark text-xl"
          style={{ display: "inline-block" }}
        >
          Buy PALI
        </Link>
      </div>
    </div>
  );
};

export default WhitepaperPart4;

// Array of goals
const goals = [
  {
    title: "Community Empowerment",
    description:
      "To create a decentralized token that empowers Palestinians globally, providing financial inclusion and participation in the crypto economy.",
  },
  {
    title: "Supporting Palestinian Causes",
    description:
      "A portion of each transaction will support humanitarian projects that benefit Palestinian refugees, healthcare, and education.",
  },
  {
    title: "Building a Palestinian Ecosystem",
    description:
      "Fostering a decentralized ecosystem of Palestinian businesses and individuals to transact using the Palestinian token.",
  },
  {
    title: "Social Impact and Charity",
    description:
      "Fund charitable causes in Palestine, focusing on rebuilding infrastructure, supporting schools, and medical initiatives.",
  },
  {
    title: "Education and Awareness",
    description:
      "Raise global awareness about Palestinian culture and history through NFT campaigns and educational initiatives.",
  },
  {
    title: "Tokenomics for Sustainability",
    description:
      "Design a sustainable tokenomics model to ensure long-term growth and prevent inflation of the Palestinian token.",
  },
  {
    title: "Partnerships and Global Recognition",
    description:
      "Form partnerships with exchanges, platforms, and charitable organizations to amplify the token's impact and reach globally.",
  },
  {
    title: "Creating Job Opportunities",
    description:
      "Enable Palestinians to join the blockchain ecosystem by offering job opportunities in development, entrepreneurship, and content creation.",
  },
  {
    title: "Peace and Unity",
    description:
      "Promote peace, unity, and collaboration between different communities through the Palestinian token, symbolizing hope and progress.",
  },
];
