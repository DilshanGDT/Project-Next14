import React from 'react'
import Link from "next/link"

const Links = () => {

    const links = [
        {
            titles: "Homepage",
            path: "/",
        },
        {
            titles: "About",
            path: "/about",
        },
        {
            titles: "Contact",
            path: "contact",
        },
        {
            titles: "Blog",
            path: "/blog",
        },
    ];

  return (
    <div>
        {links.map((link => (
            <Link href={link.path} key={link.titles}>
               {link.titles} 
            </Link>
        ) ))}
    </div>
  )
}

export default Links