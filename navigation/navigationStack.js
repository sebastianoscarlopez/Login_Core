import { StackNavigator } from "react-navigation";
import Login from "../../screens/login";
import Home from "../../screens/home";

const navigator = StackNavigator({
  login: {
    screen: Login
  },
  home: {
    screen: Home
  }
});

export default navigator;
