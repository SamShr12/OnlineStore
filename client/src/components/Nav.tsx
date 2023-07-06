import Link from "next/link"
import Search from "./Search"

type Navitemsprops = {
  siteTitle : string,
  createLink : string,
  profileLink: string,
  searchLink: string,
}
export const Nav = ({siteTitle, createLink, profileLink} : Navitemsprops) => {
  return (
    <nav className="w-12/12">
      <header className="work-flex">
          <div>
          <p className="site-title text-xl">{siteTitle}</p>
          </div>
          <div className="flex gap-5">
            <Link href={'/user/create'} >
              <p>{createLink}</p>
              </Link>
              <Search />
              <p>{profileLink}</p>
          </div>

      </header>
    </nav>
  )
}
