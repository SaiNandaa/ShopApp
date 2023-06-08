import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets/images";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row px-6 mt-12 items-center space-x-2">
        <View className="w-14 h-14 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-2xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-2xl font-semibold">Travel</Text>
      </View>
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[36px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[32px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        </Text>
      </View>
      <View className="w-[330px] h-[330px] rounded-full bg-[#00BCC9] absolute bottom-36 -right-32"></View>
      <View className="w-[330px] h-[330px] rounded-full bg-[#E99265] absolute -bottom-28 -left-32"></View>

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="h-full w-full object-cover"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
