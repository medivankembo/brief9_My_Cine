import ASectionOfMenu from "./ASectionOfMenu";
import HeadOhAMenu from "./HeadOhAMenu";

function SectionsOfMenu({
  nowPlayingMovies,
  popularMovies,
  ratedMovies,
  upComingMovies,
  menuTitle,
  subMenuTitle1,
  subMenuTitle2,
  subMenuTitle3,
  subMenuTitle4,
  linkShowDetail,
}) {
  return (
    <div className="section p-4 m-2 ">
      <HeadOhAMenu menuTitle={menuTitle} />
      <ASectionOfMenu
        className="section p-4 m-2"
        subMenuTitle={subMenuTitle1}
        linkShowDetail={linkShowDetail}
        data={nowPlayingMovies}
      />
      <ASectionOfMenu
        className="section p-4"
        subMenuTitle={subMenuTitle2}
        linkShowDetail={linkShowDetail}
        data={popularMovies}
      />
      <ASectionOfMenu
        className="section p-4"
        subMenuTitle={subMenuTitle3}
        linkShowDetail={linkShowDetail}
        data={upComingMovies}
      />
      <ASectionOfMenu
        className="section p-4"
        subMenuTitle={subMenuTitle4}
        linkShowDetail={linkShowDetail}
        data={ratedMovies}
      />
    </div>
  );
}

export default SectionsOfMenu;
