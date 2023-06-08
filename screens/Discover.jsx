import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import {
  Attractions,
  Avatar,
  Hotels,
  NotFound,
  Restaurants,
} from "../assets/images";
import { FontAwesome } from "@expo/vector-icons";
import MenuContainer from "../components/MenuContainer";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlacesData } from "./../api/index";

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [type]);
  return (
    <SafeAreaView className="flex-1 bg-gray-200 relative">
      <View className="flex-row mt-12 items-center justify-between px-6">
        <View className="">
          <Text className="text-[34px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[30px]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-3">
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ",
            language: "en",
          }}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-4 mt-4">
            <MenuContainer
              key={"hotel"}
              title="hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-2 mt-4">
              <Text className="text-[#2C7379] text-[24px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="px-2 mt-4 flex-row items-center justify-evenly flex-wrap">
            {mainData?.length > 0 ? (
              <>
                {mainData?.map((data, i) => (
                  <ItemCardContainer
                    key={i}
                    imageSrc={
                      data?.photo?.images?.medium?.url
                        ? data?.photo?.images?.medium?.url
                        : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                    }
                    title={data?.name}
                    location={data?.location_string}
                    data={data}
                  />
                ))}
              </>
            ) : (
              <>
                <View className="w-full h-[400px] items-center space-y-6 justify-center bg-red-400">
                  <Image source={NotFound} className="w-32 h-32 object-cover" />
                  <Text className="text-2xl text-[#428288] font-semibold">
                    Opps...No Data Found
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
