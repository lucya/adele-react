import Login from "pages/user/Login.js";

const userRoutes = [
  {
    path: "/login",
    name: "로그인",
    icon: "nc-icon nc-chart-pie-35",
    component: <Login />,
    layout: "/user",
    isParent: true,
  }
];

export default userRoutes;
