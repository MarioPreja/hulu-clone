import { versionAliases } from 'browserslist';
import requests from '../utils/requests';
import {useRouter} from 'next/router'

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={()=> router.push(`/?genere=${key}`)}
            className="navigation-title scale-100 last:pr-24 cursor-pointer transition duration-100 transform  hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="nav-gradient absolute top-0 right-0 h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
