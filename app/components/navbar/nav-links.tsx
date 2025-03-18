import Link from "next/link";

const NavLinks = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Menu",
      path: "/menu",
    },

    {
      name: "Private Dining",
      path: "/private-dining",
    },
  ];

  return (
    <div className="flex items-center gap-10">
      {links.map((link) => (
        <Link key={link.path} href={link.path}>
          <p className="">{link.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
