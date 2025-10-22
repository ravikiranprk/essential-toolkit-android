import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Image, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const HomeList = ({ img, data, title, url }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="bg-neutral-600 p-8 border border-neutral-400 rounded-lg mx-4 my-2 shadow-sm shadow-neutral-400">
                <Link className="" href={url}>
                    <Image 
                        source={img} 
                        alt={title} 
                        className="w-full h-60 rounded-lg" 
                    />
                </Link>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Link href={item.url}>
                            <Text className="text-center text-white text-2xl">{item.name}</Text>
                        </Link>
                    )}
                    keyExtractor={(item) => item.url}
                    className='mt-4 flex gap-3'
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default HomeList