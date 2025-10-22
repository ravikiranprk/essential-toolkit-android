import { Picker } from '@react-native-picker/picker';
import { Stack } from 'expo-router';
import { useMemo, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const celsiusToFahrenheit = (celsius) => Number(celsius) * 9 / 5 + 32;
const celsiusToKelvin = (celsius) => Number(celsius) + 273.15;
const celsiusToCelsius = (celsius) => Number(celsius);
const fahrenheitToCelsius = (fahrenheit) => (Number(fahrenheit) - 32) * 5 / 9;
const fahrenheitToKelvin = (fahrenheit) => ((Number(fahrenheit) - 32) * (5 / 9)) + 273.15;
const fahrenheitToFahrenheit = (fahrenheit) => Number(fahrenheit);
const kelvinToCelsius = (kelvin) => Number(kelvin) - 273.15;
const kelvinToFahrenheit = (kelvin) => ((Number(kelvin) - 273.15) * (9 / 5)) + 32;
const kelvinToKelvin = (kelvin) => Number(kelvin);

const TemperatureConverter = () => {
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);
    const [inputType, setInputType] = useState('celsius');
    const [outputType, setOutputType] = useState('fahrenheit');

    const cToF = useMemo(() => celsiusToFahrenheit(input), [input]);
    const cToK = useMemo(() => celsiusToKelvin(input), [input]);
    const cToC = useMemo(() => celsiusToCelsius(input), [input]);
    const fToC = useMemo(() => fahrenheitToCelsius(input), [input]);
    const fToK = useMemo(() => fahrenheitToKelvin(input), [input]);
    const fToF = useMemo(() => fahrenheitToFahrenheit(input), [input]);
    const kToC = useMemo(() => kelvinToCelsius(input), [input]);
    const kToF = useMemo(() => kelvinToFahrenheit(input), [input]);
    const kToK = useMemo(() => kelvinToKelvin(input), [input]);

    const convertTemperature = (base, target) => {
        setInputType(base);
        setOutputType(target);

        switch (base) {
            case "celsius":
                switch (target) {
                    case "fahrenheit":
                        setOutput(cToF);
                        break;
                    case "kelvin":
                        setOutput(cToK);
                        break;
                    case "celsius":
                        setOutput(cToC);
                        break;
                }
                break;
            case "fahrenheit":
                switch (target) {
                    case "celsius":
                        setOutput(fToC);
                        break;
                    case "kelvin":
                        setOutput(fToK);
                        break;
                    case "fahrenheit":
                        setOutput(fToF);
                        break;
                }
                break;
            case "kelvin":
                switch (target) {
                    case "celsius":
                        setOutput(kToC);
                        break;
                    case "fahrenheit":
                        setOutput(kToF);
                        break;
                    case "kelvin":
                        setOutput(kToK);
                        break;
                }
                break;
            default:
                break;
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView className="bg-white min-h-screen-safe flex justify-start items-center">
                <Stack.Screen options={{ headerShown: true }} />
                <View className="px-5 py-3 m-auto flex gap-3 mt-8">
                    <Text className="text-center text-3xl text-cyan-600 font-bold p-4">Temperature Converter</Text>
                    <View className="flex justify-center items-center">
                        <Text className="text-[#030014] text-lg mb-3">Temperature Converter is an online tool that allows you to convert temperatures between degrees Celsius, Fahrenheit, and Kelvin.</Text>
                        <Text className="text-cyan-600">- Temperature Converter by Essential Toolkit</Text>
                    </View>
                    <View>
                        <View>
                            <View className="border border-zinc-300 rounded-md px-2 py-0.5">
                                <Picker
                                    selectedValue={inputType}
                                    onValueChange={(itemValue, itemIndex) => setInputType(itemValue)}
                                >
                                    <Picker.Item label="Celsius" value="celsius" />
                                    <Picker.Item label="Fahrenheit" value="fahrenheit" />
                                    <Picker.Item label="Kelvin" value="kelvin" />
                                </Picker>
                            </View>

                            <Text className="text-xl text-center my-5">To</Text>

                            <View className="border border-zinc-300 rounded-md px-2 py-0.5">
                                <Picker
                                    selectedValue={outputType}
                                    onValueChange={(itemValue, itemIndex) => setOutputType(itemValue)}
                                >
                                    <Picker.Item label="Fahrenheit" value="fahrenheit" />
                                    <Picker.Item label="Kelvin" value="kelvin" />
                                    <Picker.Item label="Celsius" value="celsius" />
                                </Picker>
                            </View>
                        </View>
                        {/* Input and Output */}
                        <View className="mt-10 flex gap-5 items-center justify-center">
                            <View className="flex flex-row gap-6 justify-start items-center">
                                <Text className="text-xl font-semibold">Input: </Text>
                                <TextInput
                                    className="border border-zinc-300 rounded-md px-4 py-2 w-3/4"
                                    value={input.toString()}
                                    onChangeText={(text) => {
                                        const numericValue = text.replace(/[^0-9]/g, '');
                                        setInput(numericValue);
                                    }}
                                    placeholder='Input Temperature'
                                />
                            </View>
                            <View className="flex flex-row gap-2 justify-start items-center">
                                <Text className="text-xl font-semibold">Output: </Text>
                                <TextInput
                                    value={output.toString()}
                                    onChangeText={(text) => {
                                        const numericValue = text.replace(/[^0-9]/g, '');
                                        setOutput(numericValue);
                                    }}
                                    className="border border-zinc-300 rounded-md px-4 py-2 w-3/4"
                                    placeholder='Output Temperature'
                                    editable={false}
                                />
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => convertTemperature(inputType, outputType)}>
                                <Text className="text-center flex justify-center items-center mt-7 font-semibold text-white bg-cyan-600 px-4 py-3 text-xl rounded-md">Convert</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default TemperatureConverter;
