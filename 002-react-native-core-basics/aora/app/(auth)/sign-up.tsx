import { useState } from "react";
import { Link } from "expo-router";
import { images } from "@/constants";
import { FormField } from "@/components/FormField";
import { CustomButton } from "@/components/CustomButton";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Sign up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            otherStyles="mt-10"
            handleChangeText={(e: any) =>
              setForm((formValues) => ({ ...formValues, username: e }))
            }
          />
          <FormField
            title="Email"
            value={form.email}
            otherStyles="mt-7"
            keyBoardType="email-address"
            handleChangeText={(e: any) =>
              setForm((formValues) => ({ ...formValues, email: e }))
            }
          />
          <FormField
            title="Password"
            value={form.password}
            otherStyles="mt-7"
            handleChangeText={(e: any) =>
              setForm((formValues) => ({ ...formValues, password: e }))
            }
          />

          <CustomButton
            title="Sign In"
            containerStyles="mt-7"
            isLoading={isSubmitting}
            handlePress={submit}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
