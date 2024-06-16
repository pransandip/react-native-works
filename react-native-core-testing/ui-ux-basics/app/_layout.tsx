import { Text } from "react-native";
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    // <>
    //   <Text>Header</Text>
    //   <Slot />
    //   <Text>Footer</Text>
    // </>

    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
