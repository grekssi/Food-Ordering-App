import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './categoryCard'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {

    const [categories, setCategory] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"]
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
                <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).url()}
                    title={category.name}
                />
            ))}
            
        </ScrollView>
    )
}

export default Categories