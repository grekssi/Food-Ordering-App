import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const NewCategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative h-24 w-20 mr-2 bg-gray-200 items-center rounded-xl" >
        <Image source={{uri: imgUrl}} className="h-10 w-10 rounded-full mt-2"/>
      <Text className="absolute bottom-1 text-center text-black font-bold mb-3">{title}</Text>
    </TouchableOpacity>
  )
}

export default NewCategoryCard