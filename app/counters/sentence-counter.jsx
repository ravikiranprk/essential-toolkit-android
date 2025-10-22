import { Stack } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const findNumberOfSentences = (text) => {
    let trimmedText = text.trim();
    if (trimmedText === "") return 0;

    const words = trimmedText.split(/\s+/).filter(word => word !== "");

    return words.length;
}

const SentenceCounter = () => {
    const [text, setText] = useState("");
    const [numberOfSentences, setNumberOfSentences] = useState(0);

    const calculateNumberOfSentences = () => {
        setNumberOfSentences(findNumberOfSentences(text));
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Stack.Screen options={{ headerShown: true }} />
                <Text className="text-center text-4xl font-bold p-3 mt-4 text-cyan-700">Sentence Counter</Text>

                <View className="flex gap-3 p-5">
                    <Text className="text-xl">
                        Sentence Counter is an utility tool that allows you to count the number of sentences in a given text, paragraph, or a block of text.
                    </Text>
                    <Text className="text-cyan-600">
                        - Sentence Counter by Essential Toolkit
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
                        <Text className="text-lg">Number of Sentences: {numberOfSentences}</Text>
                        <TouchableOpacity onPress={calculateNumberOfSentences} className="bg-cyan-700 px-4 py-3 rounded-md mt-4">
                            <Text className="text-white text-center">Count Sentences</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SentenceCounter;