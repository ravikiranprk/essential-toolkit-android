import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Calculators = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView>
                    <Text className='text-4xl text-center text-cyan-800 mt-5 p-5 font-black'>Calculators</Text>
                    <View className='flex gap-3 px-7 py-4'>
                        <Text className='text-xl'>
                            Calculator is an utility tool that allows you to perform various mathematical calculations.
                        </Text>
                        <Text className='text-xl'>
                            Make everyday math simple with Essential Toolkit's smart calculators. From checking your age or BMI to calculating your loans, percentages, and more — everything you need is right at your fingertips.
                        </Text>
                        <Text className='text-xl'>
                            Each calculator is designed to be fast, accurate, and easy to use, helping you save time and get instant results anytime, anywhere.
                        </Text>
                        <Text className='text-xl'>
                            Discover a growing collection of handy calculators to make your daily tasks simpler and smarter!
                        </Text>
                    </View>
                    <Text className='px-7 py-2 text-cyan-600'>
                        - Calculators by Essential Toolkit
                    </Text>

                    <View className='flex justify-center items-center gap-2 p-3 mb-10'>
                        <Text className='text-2xl text-center text-cyan-600 mt-3 p-2 font-bold'>List of Available Calculators</Text>
                        <View className='flex gap-2'>
                            <Link href="/calculators/age-calculator"><Text className='text-xl underline'>Age Calculator</Text></Link>
                            <Link href="/calculators/bmi-calculator"><Text className='text-xl underline'>BMI Calculator</Text></Link>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Calculators;