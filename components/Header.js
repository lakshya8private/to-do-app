import React from "react";

// styled components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
} from "./../styles/appStyles";

// Icons
import { Entypo } from "@expo/vector-icons";

const Header = ({ handleClearTodos }) => {
  return (
    <HeaderView>
      <HeaderTitle>Traditional ToDo</HeaderTitle>
      <HeaderButton onPress={handleClearTodos}>
        <Entypo name="trash" size={25} color={"#FF00FF"} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;