import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    MapPinIcon,
    ChevronDownIcon,
    StarIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    BellIcon,
    HomeIcon,
    ChatBubbleBottomCenterIcon,
    ListBulletIcon,
} from "react-native-heroicons/solid"
import NewCategories from '../components/NewCategories';
import { StyleSheet } from 'react-native';

const MainAppScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    return (
        <View className="flex-col space-y-10">
            <View className="justify-center items-center mt-20 flex-row">

                <TouchableOpacity className="ml-5 space-x-2 rounded-md border-2 absolute border-gray-300 p-3 left-0">
                    <MagnifyingGlassIcon size={23} color="black" />
                </TouchableOpacity>

                <View className="flex-1 items-center absolute">
                    <Text className="text-xs text-gray-500">Current Location</Text>

                    <View className="flex-row items-center">
                        <MapPinIcon size={20} color="green" />
                        <Text className="pl-1 text-base font-bold">Sakura street 11</Text>
                    </View>
                </View>

                <TouchableOpacity className="space-x-2 rounded-md border-2 absolute border-gray-300 p-3 right-0 mr-5">
                    <BellIcon size={23} color="black" />
                </TouchableOpacity>
            </View>

            <View className="bg-[#4faf5a] h-36 mx-5 rounded-2xl flex-row">
                <View className="flex-col">
                    <Text className="mt-5 ml-5 text-white font-medium text-2xl">Claim your daily{"\n"}free delivery now!</Text>

                    <TouchableOpacity className="bg-black w-32 h-10 ml-5 rounded-full mt-3 justify-center items-center">
                        <Text className="text-white text-lg font-semibold">Order Now</Text>
                    </TouchableOpacity>

                </View>

                <View className="mt-2 ml-5">
                    <Image className="w-32 h-32" source={require("../assets/waving-man.png")} />
                </View>
            </View>

            <View className="-top-8 mx-1">
                <NewCategories />
                <NewCategories />
            </View>

            <Text className="-top-16 font-bold text-xl mx-5">Featured</Text>

            <ScrollView className="-top-24 space-x-3 mx-5" horizontal={true}>
                <View className=" w-44 h-52 bg-gray-200 rounded-2xl">
                    <View className="absolute left-2">
                        <Image className=" absolute w-40 h-36 mt-2 rounded-2xl" source={require("../assets/Hamburger-and-french-fries-paper-box.webp")} />
                        <View className="h-5 w-10 bg-white right-0 space-x-1.5 absolute left-28 top-4 rounded-full items-center flex-row">
                            <View className="left-1">
                                <StarIcon size={12} color="orange" />
                            </View>
                            <Text className="font-semibold text-sm">4.8</Text>
                        </View>
                    </View>

                    <View className="items-center">
                        <View className="w-40 h-36 mt-2 rounded-2xl"></View>
                    </View>

                    <Text className="left-0 mx-2 mt-1 font-bold text-base">McDonalds - Katastura</Text>

                    <View className="flex-row items-center mx-2 -my-2">
                        <Text>1.2 km</Text>
                        <Text className="font-extrabold text-gray-400 text-lg pb-2">  .  </Text>
                        <Text>15-20 minutes</Text>
                    </View>

                </View>
                <View className="w-44 h-52 bg-gray-200 rounded-2xl">
                    <View className="absolute left-2">
                        <Image className=" absolute w-40 h-36 mt-2 rounded-2xl" source={require("../assets/Hamburger-and-french-fries-paper-box.webp")} />
                        <View className="h-5 w-10 bg-white right-0 space-x-1.5 absolute left-28 top-4 rounded-full items-center flex-row">
                            <View className="left-1">
                                <StarIcon size={12} color="orange" />
                            </View>
                            <Text className="font-semibold text-sm">4.8</Text>
                        </View>
                    </View>

                    <View className="items-center">
                        <View className="w-40 h-36 mt-2 rounded-2xl"></View>
                    </View>

                    <Text className="left-0 mx-2 mt-1 font-bold text-base">McDonalds - Katastura</Text>

                    <View className="flex-row items-center mx-2 -my-2">
                        <Text>1.2 km</Text>
                        <Text className="font-extrabold text-gray-400 text-lg pb-2">  .  </Text>
                        <Text>15-20 minutes</Text>
                    </View>

                </View>
                <View className="w-44 h-52 bg-gray-200 rounded-2xl">
                    <View className="absolute left-2">
                        <Image className=" absolute w-40 h-36 mt-2 rounded-2xl" source={require("../assets/Hamburger-and-french-fries-paper-box.webp")} />
                        <View className="h-5 w-10 bg-white right-0 space-x-1.5 absolute left-28 top-4 rounded-full items-center flex-row">
                            <View className="left-1">
                                <StarIcon size={12} color="orange" />
                            </View>
                            <Text className="font-semibold text-sm">4.8</Text>
                        </View>
                    </View>

                    <View className="items-center">
                        <View className="w-40 h-36 mt-2 rounded-2xl"></View>
                    </View>

                    <Text className="left-0 mx-2 mt-1 font-bold text-base">McDonalds - Katastura</Text>

                    <View className="flex-row items-center mx-2 -my-2">
                        <Text>1.2 km</Text>
                        <Text className="font-extrabold text-gray-400 text-lg pb-2">  .  </Text>
                        <Text>15-20 minutes</Text>
                    </View>

                </View>
            </ScrollView>

            <View className="bg-black flex-row h-20 -top-28 mx-5 rounded-full items-center space-x-2 justify-between p-8">
                <TouchableOpacity className="">
                    <HomeIcon color={"gray"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity className="">
                    <ChatBubbleBottomCenterIcon color={"gray"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity className="">
                    <ListBulletIcon color={"gray"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity className="">
                    <UserIcon color={"gray"} size={30} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default MainAppScreen