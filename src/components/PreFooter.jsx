export default function PreFooter() {
  return (
    <section className="bg-background-global flex w-full justify-center">
      <div className="bg-background-global tablet-custom:px-[22px] px-4 min-[1024px]:max-w-[1024px]">
        <ol className="text-accent4 px-[17px] pt-[17px] text-xs leading-[1.3333] font-light tracking-[-0.01em]">
          <li className="pb-[9.6px] marker:text-sm marker:content-['1._']">
            Based on data from an Apple-conducted study of heart rate accuracy,
            during July and August 2026, utilizing commercially available
            best-selling wearables available as of June 2026. For more
            information, visit{" "}
            <a href="#" className="underline">
              apple.com/HRAccuracy
            </a>
            .
          </li>
          <li className="marker:content-['2._']">
            Apple Upgrade is a device leasing program available in the U.S.
            (excluding U.S. territories). Leases are provided by Klarna: subject
            to eligibility and credit approval, including final approval at
            checkout. To be eligible, you must be a U.S. resident, at least 18
            years old (or the legal age in your state), have an accepted credit
            or debit card, and have an Apple Account. Additional eligibility
            criteria apply. Device must be in good condition upon return; damage
            fees may apply. For iPhone only: In order to lease an iPhone, you
            must select an eligible carrier (but you cannot use a prepaid
            carrier plan). Upgrades require entering into a new lease and are
            subject to eligibility and credit approval. Apple Upgrade is not
            available on refurbished devices or online at the following special
            stores: Apple Employee Purchase Plan; participating corporate
            Employee Purchase Programs; Apple at Work for small businesses or
            enterprises; Government, Education, or Veterans and Military
            Purchase Programs.
          </li>
        </ol>
        <ul className="text-accent4 pt-[17px] text-xs leading-[1.3333] font-light tracking-[-0.01em]">
          <li className="pb-[0.8em]">
            <span>
              <p>
                To access and use all Apple Card features and products available
                only to Apple Card users, you must add Apple Card to Wallet on
                an iPhone or iPad that supports and has the latest version of
                iOS or iPadOS. Apple Card is subject to credit approval,
                available only for qualifying applicants in the United States,
                and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
              </p>
              <p className="pt-[0.8em]">
                Apple Payments Services LLC, a subsidiary of Apple Inc., is a
                service provider of Goldman Sachs Bank USA for Apple Card and
                Savings accounts. Neither Apple Inc. nor Apple Payments Services
                LLC is a bank.
              </p>
              <p className="pt-[0.8em]">
                All communications from Apple and Goldman Sachs Bank USA about
                Apple Card (including transactional and marketing
                communications) and customer service support are available in
                English. Certain communications about Apple Card can be viewed
                in another language depending on your device language settings.
                If you reside in the U.S. Virgin Islands, American Samoa, Guam,
                Northern Mariana Islands, or U.S. Minor Outlying Islands, please
                call Goldman Sachs at 877-255-5923 with questions about Apple
                Card.
              </p>
            </span>
          </li>
          <li className="pb-[0.8em]">
            <span>
              Learn more about how Apple Card applications are evaluated at{" "}
              <a href="#" className="underline">
                support.apple.com/kb/HT209218
              </a>
              .
            </span>
          </li>
          <li className="pb-[0.8em]">
            <span>
              A subscription is required for Apple Arcade, Apple Fitness+, Apple
              Music, and Apple TV.
            </span>
          </li>
          <li>
            <span>
              Features are subject to change. Some features, applications, and
              services may not be available in all regions or all languages.
            </span>
          </li>
        </ul>
        <hr className="my-5 text-black/20" />
      </div>
    </section>
  );
}
