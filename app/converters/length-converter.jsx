import { Picker } from '@react-native-picker/picker';
import { Stack } from 'expo-router';
import { useMemo, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const metersToCentimeters = (meters) => Number(meters) * 100;
const metersToMillimeters = (meters) => Number(meters) * 1000;
const metersToKilometers = (meters) => Number(meters) / 1000;
const metersToMeters = (meters) => Number(meters);

const centimetersToMeters = (centimeters) => Number(centimeters) / 100;
const centimetersToMillimeters = (centimeters) => Number(centimeters) * 10;
const centimetersToKilometers = (centimeters) => Number(centimeters) / 100000;
const centimetersToCentimeters = (centimeters) => Number(centimeters);

const millimetersToMeters = (millimeters) => Number(millimeters) / 1000;
const millimetersToCentimeters = (millimeters) => Number(millimeters) / 10;
const millimetersToKilometers = (millimeters) => Number(millimeters) / 1000000;
const millimetersToMillimeters = (millimeters) => Number(millimeters);

const kilometersToMeters = (kilometers) => Number(kilometers) * 1000;
const kilometersToCentimeters = (kilometers) => Number(kilometers) * 100000;
const kilometersToMillimeters = (kilometers) => Number(kilometers) * 1000000;
const kilometersToKilometers = (kilometers) => Number(kilometers);

const LengthConverter = () => {
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);
    const [inputType, setInputType] = useState('meters');
    const [outputType, setOutputType] = useState('centimeters');

    const mToC = useMemo(() => metersToCentimeters(input), [input]);
    const mToK = useMemo(() => metersToKilometers(input), [input]);
    const mToMm = useMemo(() => metersToMillimeters(input), [input]);
    const mToM = useMemo(() => metersToMeters(input), [input]);

    const cToM = useMemo(() => centimetersToMeters(input), [input]);
    const cToK = useMemo(() => centimetersToKilometers(input), [input]);
    const cToMm = useMemo(() => centimetersToMillimeters(input), [input]);
    const cToC = useMemo(() => centimetersToCentimeters(input), [input]);

    const mmToM = useMemo(() => millimetersToMeters(input), [input]);
    const mmToC = useMemo(() => millimetersToCentimeters(input), [input]);
    const mmToK = useMemo(() => millimetersToKilometers(input), [input]);
    const mmToMm = useMemo(() => millimetersToMillimeters(input), [input]);

    const kToM = useMemo(() => kilometersToMeters(input), [input]);
    const kToC = useMemo(() => kilometersToCentimeters(input), [input]);
    const kToMm = useMemo(() => kilometersToMillimeters(input), [input]);
    const kToK = useMemo(() => kilometersToKilometers(input), [input]);

    const convertTemperature = (base, target) => {
        setInputType(base);
        setOutputType(target);

        switch(base) {
            case "meters":
                switch(target) {
                    case "centimeters":
                        setOutput(mToC);
                        break;
                    case "kilometers":
                        setOutput(mToK);
                        break;
                    case "millimeters":
                        setOutput(mToMm);
                        break;
                    case "meters":
                        setOutput(mToM);
                        break;
                }
                break;
            case "centimeters":
                switch(target) {
                    case "meters":
                        setOutput(cToM);
                        break;
                    case "kilometers":
                        setOutput(cToK);
                        break;
                    case "millimeters":
                        setOutput(cToMm);
                        break;
                    case "centimeters":
                        setOutput(cToC);
                        break;
                }
                break;
            case "millimeters":
                switch(target) {
                    case "meters":
                        setOutput(mmToM);
                        break;
                    case "centimeters":
                        setOutput(mmToC);
                        break;
                    case "kilometers":
                        setOutput(mmToK);
                        break;
                    case "millimeters":
                        setOutput(mmToMm);
                        break;
                }
                break;
            case "kilometers":
                switch(target) {
                    case "meters":
                        setOutput(kToM);
                        break;
                    case "centimeters":
                        setOutput(kToC);
                        break;
                    case "millimeters":
                        setOutput(kToMm);
                        break;
                    case "kilometers":
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
                    <Text className="text-center text-3xl text-cyan-600 font-bold p-4">Length Converter</Text>
                    <View className="flex justify-center items-center">
                        <Text className="text-[#030014] text-lg mb-3">Length Converter is an online tool that allows you to convert lengths between Meters, Centimeters, Millimeters and Kilometers</Text>
                        <Text className="text-cyan-600">- Length Converter by Essential Toolkit</Text>
                    </View>
                    <View>
                        <View>
                            <View className="border border-zinc-300 rounded-md px-2 py-0.5">
                                <Picker
                                    selectedValue={inputType}
                                    onValueChange={(itemValue, itemIndex) => setInputType(itemValue)}
                                >
                                    <Picker.Item label="Meters" value="meters" />
                                    <Picker.Item label="Centimeters" value="centimeters" />
                                    <Picker.Item label="Millimeters" value="millimeters" />
                                    <Picker.Item label="Kilometers" value="kilometers" />
                                </Picker>
                            </View>

                            <Text className="text-xl text-center my-5">To</Text>

                            <View className="border border-zinc-300 rounded-md px-2 py-0.5">
                                <Picker
                                    selectedValue={outputType}
                                    onValueChange={(itemValue, itemIndex) => setOutputType(itemValue)}
                                >
                                    <Picker.Item label="Centimeters" value="centimeters" />
                                    <Picker.Item label="Millimeters" value="millimeters" />
                                    <Picker.Item label="Kilometers" value="kilometers" />
                                    <Picker.Item label="Meters" value="meters" />
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

export default LengthConverter;
