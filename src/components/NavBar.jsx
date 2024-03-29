import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  let listNav = [
    {
      name: "Home",
      link: "/",
      id: "1",
    },
    {
      name: "useState",
      link: "/usestate",
      id: "2",
    },
    {
      name: "useEffect",
      link: "/useeffect",
      id: "3",
    },
    {
      name: "useContext",
      link: "/usecontext",
      id: "4",
    },
    {
      name: "useRef",
      link: "/useref",
      id: "5",
    },
    {
      name: "useReducer",
      link: "/usereducer",
      id: "6",
    },
    {
      name: "useCallBack",
      link: "/usecallback",
      id: "7",
    },
    {
      name: "useMemo",
      link: "/usememo",
      id: "8",
    },
    {
      name: "Custom Hook",
      link: "/customhook",
      id: "9",
    },
  ];
  let urlPath = window.location.pathname;

  let [active, setActive] = useState(urlPath);

  const handleSetState = (link) => {
    setActive(link);
  };

  return (
    <>
      <header>
        <nav className="nav-bar">
          {listNav.map((item) => (
            <li
              key={item.id}
              className={active === item.link ? "nav-item active" : "nav-item"}
            >
              <Link to={item.link} onClick={() => handleSetState(item.link)}>
                {item.name}
              </Link>
            </li>
          ))}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
