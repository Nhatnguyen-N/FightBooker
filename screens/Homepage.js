import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const data = [
  {
    city: "Paris",
    country: "France",
    img: require("../assets/Image.png"),
  },
  {
    city: "Bali",
    country: "Indonesia",
    img: require("../assets/Image1.png"),
  },
  {
    city: "Bali",
    country: "Indonesia",
    img: require("../assets/Image1.png"),
  },
];
const Homepage = () => {
  return (
    <LinearGradient
      colors={["#FCFCFE", "#A3BFF3"]}
      start={[0.2, 0.1]}
      className="flex-1 w-full"
    >
      <SafeAreaView>
        <StatusBar></StatusBar>

        <View className="flex-row w-full  items-center py-5 ">
          <Image
            source={require("../assets/Ellipse1.png")}
            className="w-12 h-12 mx-3"
          />
          <Text className="text-lg">Hi,</Text>
          <Text className="text-lg font-bold">Catherine!</Text>
        </View>
        <View className="items-center">
          <Image
            source={require("../assets/TopCard.png")}
            className=""
            resizeMode="contain"
          />
          <View className="flex-row p-6">
            <View>
              <TouchableOpacity
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                className=" mr-5 rounded-full bg-slate-300 p-1 w-[60px] h-[60px] items-center justify-center"
              >
                <Image
                  source={require("../assets/mb.png")}
                  className="w-[45px] h-[45px]"
                />
              </TouchableOpacity>
              <Text className="ml-3 font-bold">Flight</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                className=" mr-5 rounded-full bg-slate-300 p-1 w-[60px] h-[60px] items-center justify-center"
              >
                <Image
                  source={require("../assets/cg.png")}
                  className="w-[45px] h-[45px]"
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text className="ml-3 font-bold">Hotel</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                className=" mr-5 rounded-full bg-slate-300 p-3 w-[60px] h-[60px] items-center justify-center"
              >
                <Image
                  source={require("../assets/cx.png")}
                  className="w-[45px] h-[45px]"
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text className="ml-3 font-bold">Car</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                className=" mr-5 rounded-full bg-slate-300 p-1 w-[60px] h-[60px] items-center justify-center"
              >
                <Image
                  source={require("../assets/ct.png")}
                  className="w-[45px] h-[45px]"
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text className="ml-3 font-bold">Train</Text>
            </View>
          </View>
        </View>
        <View>
          <Text className="font-bold text-xl ml-6">Explore Destination</Text>
          <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => {
              return (
                <View
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                  className=" p-3 m-4 rounded-xl items-center"
                >
                  <ImageBackground
                    source={item.img}
                    imageStyle={{
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                    className=" p-3 items-end h-[120px] w-[120px]"
                  >
                    <Image
                      source={require("../assets/tim.png")}
                      className=""
                    ></Image>
                  </ImageBackground>
                  <View className="flex-row pt-2">
                    <View className="justify-center p-1 pt-1">
                      <Image
                        source={require("../assets/Vector12.png")}
                        className=""
                      ></Image>
                    </View>
                    <View>
                      <Text className="font-bold">{item.city}</Text>
                      <View className="flex-row">
                        <Text className="text-[10px] text-slate-400">
                          {item.country}
                        </Text>
                        <View className="flex-row ml-5">
                          <Text className="text-[12px]">4.5</Text>
                          <Image
                            source={require("../assets/sao.png")}
                            className="ml-1 mt-[2px]"
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          ></FlatList>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Homepage;
