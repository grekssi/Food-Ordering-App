import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './categoryCard'
import sanityClient, { urlFor } from '../sanity'
import NewCategoryCard from './NewCategoryCard'

const NewCategories = () => {

    const [categories, setCategory] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"][0...4]
        `).then((data) => setCategory(data))
    }, [])


    return (
        
        <ScrollView
        
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}>

            {categories.map((category) =>
            (
                <NewCategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).url()}
                    title={category.name}
                />
            ))}
            
        </ScrollView>
    )
}

export default NewCategories