import { Stack } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const findNumberOfLetters = (text) => {
    let trimmedText = text.trim();
    if (trimmedText === "") return 0;

    const words = trimmedText.split(/\s+/).filter(word => word !== "");

    const letters = words.join("").split("");

    return letters.length;
}

const LetterCounter = () => {
    const [text, setText] = useState("");
    const [numberOfLetters, setNumberOfLetters] = useState(0);

    const calculateNumberOfLetters = () => {
        setNumberOfLetters(findNumberOfLetters(text));
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Stack.Screen options={{ headerShown: true }} />
                <Text className="text-center text-4xl font-bold p-3 mt-4 text-cyan-700">Letter Counter</Text>

                <View className="flex gap-3 p-5">
                    <Text className="text-xl">
                        Letter Counter is an utility tool that allows you to count the number of letters in a given text, word, or sentence.
                    </Text>
                    <Text className="text-cyan-600">
                        - Letter Counter by Essential Toolkit
                    </Text>
                </View>

                <View className="p-1 flex justify-center items-center gap-4">
                    <View>
                        <TextInput 
                            placeholder='Enter your text here...'
                            multiline={true}
                            className="border border-cyan-600 rounded-lg p-4 h-[250px] w-[320px]"
                            onChangeText={(text) => setText(text)}
                            textAlignVertical='top'
                            numberOfLines={8}
                        />
                    </View>
                    <View className="p-5">
                        <Text className="text-lg">Number of Letters: {numberOfLetters}</Text>
                        <TouchableOpacity onPress={calculateNumberOfLetters} className="bg-cyan-700 px-4 py-3 rounded-md mt-4">
                            <Text className="text-white text-center">Count Letters</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default LetterCounter;