import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from "react-native-heroicons/outline"
import Categories from '../components/categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

/* polyfills */
/** URL polyfill */
import 'react-native-url-polyfill/auto';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "featured"] {
        ...,
        restaurants[] -> {
          ...,
          dishes[]->,
          type-> {name}
        }
      }`)
      .then(data => {
        setFeaturedCategories(data);
      });
  }, [])

  return (
    <SafeAreaView className="mt-5 bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{
          uri: "https://links.papareact.com/wru"
        }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full" />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now!
          </Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={30} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center">
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput placeholder='Restaurants And Cuisines' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>

      <ScrollView className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}>
        <Categories />

        {featuredCategories?.map(category =>
        (
          <FeaturedRow
          key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen