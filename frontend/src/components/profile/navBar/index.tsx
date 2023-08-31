import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { RootState } from "../../../redux/store";

export default function ProfileNavBar({
  user,
}: {
  user: RootState["auth"]["currentUser"];
}) {
  return (
    user && (
      <View style={styles.container}>
        <TouchableOpacity>
          <Feather name="search" size={20} />
        </TouchableOpacity>
        <Text style={styles.text}>{user.displayName}</Text>
        <TouchableOpacity>
          <Feather name="menu" size={24} />
        </TouchableOpacity>
      </View>
    )
  );
}
