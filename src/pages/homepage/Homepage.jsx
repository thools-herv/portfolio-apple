import Header from "@/components/Header";
import HomepageMain from "./HomepageMain";
import GlobalButton from "@/components/GlobalButton";

export default function Homepage() {
  return (
    <>
      <Header />
      <HomepageMain />
      <div className="mobile-landscape:mt-[18px] laptop-custom:mt-4 mt-3 flex justify-center gap-4">
        <GlobalButton buttonTextLabel="Learn more" buttonBG="bg-accent2" />
        <GlobalButton
          buttonTextLabel="View pricing"
          buttonBG="transparent"
          buttonTextColor="text-accent2"
          buttonBorder="border-accent2 border-1"
        />
      </div>
    </>
  );
}
