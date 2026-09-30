import EntertainmentSectionAmusement from "./EntertainmentSectionAmusement";
import EntertainmentSectionTvShow from "./EntertainmentSectionTvShow";

export default function HomepageEntertaimentSection() {
  return (
    <section>
      <div className="bg-background02 mt-3">
        <h2 className="laptop-custom:text-[56px] laptop-custom:pb-[26px] laptop-custom:pt-14 pt-9 pb-[17px] text-center text-[32px] leading-[1.071] font-bold">
          Endless entertainment.
        </h2>
      </div>
      <EntertainmentSectionTvShow />
      <EntertainmentSectionAmusement />
    </section>
  );
}
