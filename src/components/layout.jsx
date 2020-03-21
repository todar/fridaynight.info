/**
 * This component is persisted through the custom _app.js.
 * The purpose of this component is to keep the main navbar at the bottom
 * of each page for navigation and the placement of the rest of the app above.
 */
import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/songs">
          <a>Songs</a>
        </Link>
      </nav>
    </div>
  );
};

export default Layout;
