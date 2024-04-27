export default function NavBar(props: any) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div>
      <nav className="flex justify-between">
        <div>Logo</div>
        <ul className="flex">
          {navItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
