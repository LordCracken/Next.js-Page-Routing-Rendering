import Link from 'next/link';

import NavLink from "@/components/nav-link";
import {Suspense} from "react";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <Suspense fallback={<p>Loading nav links...</p>}>
          <ul>
              <li>
                <NavLink href="/news">News</NavLink>
              </li>
              <li>
                <NavLink href="/archive">Archive</NavLink>
              </li>
          </ul>
        </Suspense>
      </nav>
    </header>
  );
}
