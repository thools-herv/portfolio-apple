export default function NavLink() {
  const navLinks = [
    { id: 1, title: "Store" },
    { id: 2, title: "Mac" },
    { id: 3, title: "iPad" },
    { id: 4, title: "iPhone" },
    { id: 5, title: "Watch" },
    { id: 6, title: "Vision" },
    { id: 7, title: "AirPods" },
    { id: 8, title: "TV & Home" },
    { id: 9, title: "Entertainment" },
    { id: 10, title: "Accessories" },
    { id: 11, title: "Support" },
  ];
  return (
    <section className="w-full">
      <ul className="flex h-full items-center justify-around">
        {navLinks.map((link) => (
          <li key={link.id} className="">
            <h5 className="font-light">{link.title}</h5>
          </li>
        ))}
      </ul>
    </section>
  );
}
