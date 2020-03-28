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
        <Link href="/connect">
          <a>Connect</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          background: #1e1f20;
        }

        nav a {
          font-family: Roboto, sans-serif;
          padding: 20px;
          text-decoration: none;
          flex-grow: 1;
          text-align: center;
          color: #ffd600;
          background: #1e1f20;
          transition: 100ms;
        }

        nav a:hover {
          background: rgb(47, 45, 29);
        }

        nav a:active {
          background: rgb(97, 86, 22);
          outline: transparent;
        }

        nav a:active:hover {
          background: rgb(108, 95, 20);
        }
      `}</style>
    </div>
  );
};

export default Layout;
