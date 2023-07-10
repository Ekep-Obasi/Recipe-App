import { BiDrink, BiTransfer, BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { getAllCategories } from "../../../api/api";

const SideBarData = () => {
  let categoriesData;
  getAllCategories().then(({ data }) => {
    categoriesData = data.map(({ name }) => ({
      label: name,
      icon: "",
    }));
    return categoriesData;
  });

  const data = [
    {
      label: "Home",
      icon: <FaHome size={28} />,
      // path: "/home",
      isClosed: <RiArrowDownSLine size={28} />,
      isOpened: <RiArrowUpSLine size={28} />,
      children: null,
    },
    {
      label: "Recipes",
      icon: <BiDrink size={28} />,
      // path: "/recipes",
      isClosed: <RiArrowDownSLine size={28} />,
      isOpened: <RiArrowUpSLine size={28} />,
      children: [
        {
          label: "View Recipes",
          icon: <IoIosPaper size={28} />,
          // path: "/recipe/create",
          isClosed: <RiArrowDownSLine size={28} />,
          isOpened: <RiArrowUpSLine size={28} />,
          children: null,
        },
        {
          label: "Create Recipe",
          icon: <IoIosPaper size={28} />,
          // path: "",
          isClosed: <RiArrowDownSLine size={28} />,
          isOpened: <RiArrowUpSLine size={28} />,
          children: null,
        },
      ],
    },
    {
      label: "Categories",
      icon: <BiSolidCategoryAlt size={28} />,
      // path: "/profile",
      isClosed: <RiArrowDownSLine size={28} />,
      isOpened: <RiArrowUpSLine size={28} />,
      children: null,
    },
    {
      label: "Deals",
      icon: <BiTransfer size={28} />,
      // path: <IoIosPaper size={28} />,
      isClosed: <RiArrowDownSLine size={28} />,
      isOpened: <RiArrowUpSLine size={28} />,
      children: null,
    },
    {
      label: "Profile",
      icon: <FaUserAlt size={28} />,
      // path: "/profile",
      isClosed: <RiArrowDownSLine size={28} />,
      isOpened: <RiArrowUpSLine size={28} />,
      children: [
        {
          label: "settings",
          icon: <IoIosPaper size={28} />,
          // path: "/profile/settings",
          isClosed: <RiArrowDownSLine size={28} />,
          isOpened: <RiArrowUpSLine size={28} />,
          children: null,
        },
      ],
    },
  ];

  return data;
};
export default SideBarData;
