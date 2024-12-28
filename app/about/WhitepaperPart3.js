import Image from "next/image";
import React from "react";

const WhitepaperPart3 = () => {
  return (
    <div className="font-sans text-center p-6 bg-gray-50">
      {" "}
      <div className="h-[300px] sm:h-[400px] md:h-[600px] relative">
        <Image
          src="/images/bt2.jpg"
          alt="PALI Coin Logo"
          fill
          sizes="100vw"
          className="object-contain rounded-lg"
        />
      </div>
      <p className="text-left p-2 text-gray-600 mt-10">
        <strong>Scalability and Future-Proofing:</strong>
        <br />
        Scalability is a critical consideration for the success of any
        blockchain-based project. PALI Coin&apos;s blockchain architecture is
        designed to scale seamlessly as adoption grows. The use of sharding,
        layer-2 solutions, and periodic upgrades will ensure that the network
        can handle a growing number of transactions while maintaining high
        throughput and low fees. Future upgrades will also include the
        integration of privacy-enhancing features, such as zk-SNARKs, to ensure
        user confidentiality while remaining compliant with global regulations.
      </p>
      <p className="text-left p-2 text-paliGreen mt-10">
        <strong>Use Cases and Real-World Applications</strong>
      </p>
      <p className="text-left p-2 text-gray-600">
        <strong>Empowering the Palestinian Community:</strong>
        <br />
        PALI Coin is designed to address the unique needs of Palestinian
        individuals, families, and businesses. The primary use cases of PALI
        Coin focus on creating a secure and efficient financial system,
        streamlining cross-border transactions, and providing a transparent
        platform for charitable giving. Below are the key real-world
        applications of PALI Coin:
      </p>
      <p className="text-left p-2 text-gray-600 mt-5">
        <strong>Cross-Border Transactions:</strong>
        <br />
        One of the most significant challenges facing Palestinians is the
        ability to send and receive money across borders. Traditional remittance
        systems are costly, slow, and often unreliable. With PALI Coin,
        cross-border transactions can be completed instantly, with significantly
        lower fees than traditional remittance services. Palestinians living in
        the diaspora can send money back to their families in Gaza, the West
        Bank, and refugee camps without the need for expensive intermediaries.
        The use of PALI Coin for remittances also ensures greater privacy and
        security, as blockchain technology allows for anonymous transactions
        that protect users from surveillance or exploitation. Additionally, the
        blockchain records every transaction, providing a transparent audit
        trail to prevent fraud or money laundering.
      </p>
      <p className="text-left p-2 text-gray-600 mt-5">
        <strong>Micro-Lending and Investment:</strong>
        <br />
        For many Palestinians, access to capital for starting or expanding
        businesses is limited. Traditional financial institutions often overlook
        individuals in Gaza and the West Bank due to the political and economic
        instability in the region. PALI Coin&apos;s decentralized finance (DeFi)
        platform enables individuals and small businesses to access micro-loans
        and investment opportunities without the need for traditional banks.
        Through smart contracts, users can lend and borrow funds directly from
        each other, with automated interest rates and repayment schedules. This
        peer-to-peer model democratizes access to financial resources and
        encourages community-based investments in local businesses, social
        enterprises, and startups.
      </p>
      <p className="text-left p-2 text-gray-600 mt-5">
        <strong>Humanitarian Aid and Donations:</strong>
        <br />
        Transparency in charitable donations is a significant issue worldwide,
        and even more so in regions with ongoing political instability like
        Palestine. Donors often face concerns about how their contributions are
        being used, which undermines their willingness to donate. PALI Coin
        seeks to address this issue by offering a transparent and traceable
        platform for donations. Charitable organizations and NGOs can use PALI
        Coin to receive donations directly from contributors. The use of smart
        contracts ensures that donations are allocated according to the
        donor&apos;s wishes, and the blockchain records every transaction for
        full transparency. This will enhance trust between donors and charitable
        organizations, encouraging increased global support for humanitarian
        efforts in Palestine.
      </p>
      <p className="text-left p-2 text-gray-600 mt-5">
        <strong>Education and Knowledge Sharing:</strong>
        <br />
        The Palestinian community has a rich history of education and
        intellectual achievement, despite the challenges it faces. PALI Coin
        aims to support educational initiatives by providing funding for
        scholarships, online courses, and vocational training programs. Through
        blockchain-powered education platforms, students from Gaza, the West
        Bank, and the diaspora can access quality education regardless of
        geographic barriers. Additionally, decentralized platforms built on the
        PALI Coin blockchain will allow the Palestinian community to share
        knowledge, research, and cultural heritage with the world. This
        initiative will preserve and promote Palestinian culture, identity, and
        history through decentralized archives and educational programs.
      </p>
      <p className="text-left p-2 text-paliPink mt-10">
        <strong>Economic Model</strong>
      </p>
      <p className="text-left p-2 text-gray-600">
        <strong>Supply and Distribution:</strong>
        <br />
        PALI Coin will have a fixed supply, ensuring that inflation does not
        erode its value over time. A portion of the total supply will be
        distributed through an initial coin offering (ICO) to fund the
        development of the platform, incentivize early adopters, and raise
        capital for humanitarian projects. The distribution of PALI Coin will be
        transparent, with regular audits conducted to ensure that funds are used
        effectively and in alignment with the mission.
      </p>
      <p className="text-left p-2 text-paliGreen mt-10">
        <strong>Utility of PALI Coin:</strong>
      </p>
      <p className="text-left p-2 text-gray-600">
        <strong>Medium of Exchange:</strong>
        <br />
        It will be used for day-to-day transactions, including remittances,
        business payments, and charitable donations.
      </p>
      <p className="text-left p-2 text-gray-600">
        <strong>Governance:</strong>
        <br />
        PALI Coin holders will have voting rights on key platform decisions,
        such as protocol upgrades, charity initiatives, and fund allocation.
      </p>
      <p className="text-left p-2 text-gray-600">
        <strong>Staking and Rewards:</strong>
        <br />
        By staking PALI Coin, users can participate in securing the network and
        earn rewards in the form of additional tokens.
      </p>
      <p className="text-left p-2 text-gray-600">
        <strong>Incentives for Adoption:</strong>
        <br />
        To encourage widespread adoption, PALI Coin will offer incentives such
        as low transaction fees for early adopters, rewards for referring new
        users, and partnerships with businesses to accept PALI Coin as payment.
      </p>
      <div className="h-[200px] sm:h-[300px] md:h-[400px] relative">
        <Image
          src="/images/olives.jpg"
          alt="PALI Coin Logo"
          fill
          sizes="100vw"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default WhitepaperPart3;
