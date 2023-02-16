
import Dashboard from "pages/Dashboard.js";
import UserProfile from "pages/UserProfile.js";
import MovieList from "pages/movie/MovieList.js";
import TableList from "pages/TableList.js";
import PostList from "pages/PostList.js";
import Typography from "pages/Typography.js";
import Icons from "pages/Icons.js";
import Maps from "pages/Maps.js";
import Notifications from "pages/Notifications.js";
import TicTacToe from "pages/games/TicTacToe.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: <Dashboard />,
    layout: "/admin",
    isParent: true,
  },
  {
    path: "/movie",
    name: "상영중 영화",
    icon: "nc-icon nc-circle-09",
    component: <MovieList />,
    layout: "/admin",
    isParent: true,
  },
  {
    path: "/user/:userId",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: <UserProfile />,
    layout: "/admin",
    isParent: true,
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "nc-icon nc-notes",
    component: null,
    layout: "/admin",
    isParent: true,
    child: [{
      path: "/table",
      name: "Table List",
      icon: "nc-icon nc-grid-45",
      component: <TableList />,
      layout: "/admin",
      isParent: false,
      parentPath: '/table',
    }, {
      path: "/posts",
      name: "Posts",
      icon: "nc-icon nc-grid-45",
      component: <PostList />,
      layout: "/admin",
      isParent: false,
      parentPath: '/table',
    }]
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: <Typography />,
    layout: "/admin",
    isParent: true,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: <Icons />,
    layout: "/admin",
    isParent: true,
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: <Maps />,
    layout: "/admin",
    isParent: true,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/admin",
    isParent: true,
  },
  {
    path: "/game",
    name: "Game",
    icon: "nc-icon nc-controller-modern",
    component: null,
    layout: "/admin",
    isParent: true,
    child: [{
      path: "/tic-tac-toe",
      name: "TicTacToe",
      icon: "nc-icon nc-grid-45",
      component: <TicTacToe />,
      layout: "/admin",
      isParent: false,
      parentPath: '/game',
    }]
  }
];

export default dashboardRoutes;