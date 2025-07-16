import HomePage from "../pages/home";
import Favorite from "../pages/favorite";
import Tutor from "../pages/tutor";
import configs from "../configs/configs";

const publicRoutes = [
  { path: configs.routes.home, component: HomePage },
  { path: configs.routes.favorites, component: Favorite },
  { path: configs.routes.tutor, component: Tutor },
];

export default publicRoutes;
