import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="m-4 sm:m-6 lg:m-10 rounded-lg">
      {/* Image Section */}
      <div className="relative mb-5 rounded-lg">
        <Image
          src="/images/privacy/p1.png"
          alt="PALI Coin Logo"
          layout="responsive"
          width={1200}
          height={800}
          className="object-cover w-full h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1300px] rounded-lg"
        />
      </div>
      <div className="relative mb-5 rounded-lg">
        <Image
          src="/images/privacy/p2.png"
          alt="PALI Coin Logo"
          layout="responsive"
          width={1200}
          height={800}
          className="object-cover w-full h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1300px] rounded-lg"
        />
      </div>
      <div className="relative mb-5 rounded-lg">
        <Image
          src="/images/privacy/p3.png"
          alt="PALI Coin Logo"
          layout="responsive"
          width={1200}
          height={800}
          className="object-cover w-full h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1300px] rounded-lg"
        />
      </div>
      <div className="relative mb-5 rounded-lg">
        <Image
          src="/images/privacy/p4.png"
          alt="PALI Coin Logo"
          layout="responsive"
          width={1200}
          height={800}
          className="object-cover w-full h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1300px] rounded-lg"
        />
      </div>
      <div className="relative rounded-lg">
        <Image
          src="/images/privacy/p5.png"
          alt="PALI Coin Logo"
          layout="responsive"
          width={1200}
          height={800}
          className="object-cover w-full h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1300px] rounded-lg"
        />
      </div>
      <div className="mt-8">
        <h3 className="text-paliGreen font-semibold">IMPORTANT:</h3>
        <p className=" text-gray-800 mb-6">
          DO NOT store your recovery phrase digitally for your phrases or wallet
          details, avoid saving it in emails, on your phone, as a screenshot, or
          in any other digital format. Write it down on paper and keep it in a
          safe place. Create two copies and store them in separate locations to
          ensure safety in case of loss or damage (e.g., fire). Ensure the
          recovery phrase is written in the correct order. Losing your recovery
          phrase means you will not be able to restore your wallet. BEWARE: If
          you send digital assets to the wrong recipient, they cannot be
          recovered. Stay vigilant against scams. For securing large amounts of
          cryptocurrency, Hardware wallets provide an additional layer of
          security by storing private keys on a passcode-protected device, with
          encrypted communication when connected to your phone or computer.
        </p>
        <h2 className="font-semibold">DISCLAIMER:</h2>{" "}
        <p className="text-gray-700">
          This website does not constitute an offer to purchase, solicitation to
          sell, or a recommendation to buy or sell any tokens or products.
          Purchasing and selling PALI Coin tokens involves inherent risks, and
          holders must bear the risk of loss. Neither the authors of this
          website nor participants in the PALI coin project accept liability for
          any losses or tax obligations incurred by holders, buyers, or sellers
          of PALI Coin. The value of PALI Coinis highly volatile and may
          decrease in value. This website is not directed at individuals in
          jurisdictions where the purchase, sale, or holding of PALI Coin is
          prohibited or regulated. Always consult your local laws before
          engaging in cryptocurrency transactions.
        </p>{" "}
      </div>
    </div>
  );
};

export default page;
