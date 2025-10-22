import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Counters = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView>
                    <Text className='text-4xl text-center text-cyan-800 mt-5 p-5 font-black'>Counters</Text>
                    <View className='flex gap-3 px-7 py-4'>
                        <Text className='text-xl'>
                            Keep track of your text instantly with Essential Toolkit's smart counters. Whether you're counting words, letters, or sentences, our counters help you get accurate results in real time.
                        </Text>
                        <Text className='text-xl'>
                            Perfect for writers, students, and professionals — these tools make it easy to measure your content length, improve readability, and stay within limits.
                        </Text>
                        <Text className='text-xl'>
                            Count effortlessly, write confidently, and stay organized with every word you type!
                        </Text>
                        <Text className='text-xl'>
                            Discover a growing collection of handy counters to make your daily tasks simpler and smarter!
                        </Text>
                    </View>
                    <Text className='px-7 py-2 text-cyan-600'>
                        - Counters by Essential Toolkit
                    </Text>

                    <View className='flex justify-center items-center gap-2 p-3 mb-10'>
                        <Text className='text-2xl text-center text-cyan-600 mt-3 p-2 font-bold'>List of Available Counters</Text>
                        <View className='flex gap-2'>
                            <Link href="/counters/letter-counter"><Text className='text-xl underline'>Letter Counter</Text></Link>
                            <Link href="/counters/word-counter"><Text className='text-xl underline'>Word Counter</Text></Link>
                            <Link href="/counters/sentence-counter"><Text className='text-xl underline'>Sentence Counter</Text></Link>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Counters;