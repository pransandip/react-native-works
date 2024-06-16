import { Text, TouchableOpacity } from "react-native";

type btnProps = {
  title: string;
  isLoading: boolean;
  textStyles?: string;
  handlePress: () => void;
  containerStyles: string;
};

export const CustomButton = ({
  title,
  isLoading,
  textStyles,
  handlePress,
  containerStyles,
}: btnProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : null
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
