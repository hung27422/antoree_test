import HomePage from "../pages/home";
import Favorite from "../pages/favorite";
import configs from "../configs/configs";
import Tutor from "../pages/tutor";

const publicRoutes = [
  { path: configs.routes.home, component: HomePage },
  { path: configs.routes.favorites, component: Favorite },
  { path: configs.routes.tutor, component: Tutor },
];

export default publicRoutes;
