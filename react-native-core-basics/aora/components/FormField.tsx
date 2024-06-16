import { useState } from "react";
import { icons } from "@/constants";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

type formFieldProps = {
  title: string;
  value: string;
  otherStyles: string;
  keyBoardType?: string;
  placeholder?: string;
  handleChangeText: (e: any) => void;
};

export const FormField = ({
  title,
  value,
  otherStyles,
  placeholder,
  handleChangeText,
  ...props
}: formFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword((prevVal) => !prevVal)}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
