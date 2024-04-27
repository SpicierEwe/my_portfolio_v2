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
      <nav>
        <div>Logo</div>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
          }
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
