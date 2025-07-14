import Link from "next/link";

const DesktopNav = () => {
  return (
    <>
      <Link
        href={"/"}
        className="hover:text-blue-800 dark:hover:text-fuchsia-500"
      >
        Home
      </Link>
      <Link
        href={"/codeeditor"}
        className="hover:text-blue-800 dark:hover:text-fuchsia-400"
      >
        Code editor
      </Link>
      <Link
        href={"/contact"}
        className="hover:text-blue-800 dark:hover:text-fuchsia-400"
      >
        Contact
      </Link>
    </>
  );
};

export default DesktopNav;
