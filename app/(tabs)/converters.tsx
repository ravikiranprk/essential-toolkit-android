import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Converters = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView>
                    <Text className='text-4xl text-center text-cyan-800 mt-5 p-5 font-black'>Converters</Text>
                    <View className='flex gap-3 px-7 py-4'>
                        <Text className='text-xl'>
                            Convert anything in seconds with Essential Toolkit's powerful converters. Whether you need to switch between length, weight, speed, temperature, numbers, or more — our converters give you quick and accurate results instantly.
                        </Text>
                        <Text className='text-xl'>
                            Designed for simplicity and precision, each converter helps you handle everyday conversions with ease — perfect for students, professionals, or anyone on the go.
                        </Text>
                        <Text className='text-xl'>
                            Make conversions effortless, fast, and reliable — all in one place!
                        </Text>
                        <Text className='text-xl'>
                            Discover a growing collection of handy converters to make your daily tasks simpler and smarter!
                        </Text>
                    </View>
                    <Text className='px-7 py-2 text-cyan-600'>
                        - Converters by Essential Toolkit
                    </Text>

                    <View className='flex justify-center items-center gap-2 p-3 mb-10'>
                        <Text className='text-2xl text-center text-cyan-600 mt-3 p-2 font-bold'>List of Available Converters</Text>
                        <View className='flex gap-2'>
                            <Link href="/converters/length-converter"><Text className='text-xl underline'>Length Converter</Text></Link>
                            <Link href="/converters/temperature-converter"><Text className='text-xl underline'>Temperature Converter</Text></Link>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Converters;