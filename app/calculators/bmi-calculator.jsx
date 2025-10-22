import { Stack } from 'expo-router';
import { useMemo, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const feetOptions = [
	{ value: 3, label: "3" },
	{ value: 4, label: "4" },
	{ value: 5, label: "5" },
	{ value: 6, label: "6" },
	{ value: 7, label: "7" },
	{ value: 8, label: "8" },
];
const inchesOptions = [
	{ value: 0, label: "0" },
	{ value: 1, label: "1" },
	{ value: 2, label: "2" },
	{ value: 3, label: "3" },
	{ value: 4, label: "4" },
	{ value: 5, label: "5" },
	{ value: 6, label: "6" },
	{ value: 7, label: "7" },
	{ value: 8, label: "8" },
	{ value: 9, label: "9" },
	{ value: 10, label: "10" },
	{ value: 11, label: "11" },
];

const bmiCalculatorStd = (feet, inches, weight) => {
	const height = Number(feet) * 12 + Number(inches);
	const heightInMeters = height * 0.0254;
	const bmi = Number(weight) / (heightInMeters * heightInMeters);
	return bmi.toFixed(2);
}

const bmiCalculatorMetric = (cm, kg) => {
	const heightInMeters = Number(cm) * 0.01;
	const bmi = Number(kg) / (heightInMeters * heightInMeters);
	return bmi.toFixed(2);
}

const BMICalculator = () => {
	const [activeTab, setActiveTab] = useState(1);
	const [selectedFeet, setSelectedFeet] = useState();
	const [selectedInches, setSelectedInches] = useState();
	const [weight, setWeight] = useState();
	const [cm, setCm] = useState();

	let [standarBmi, setStandarBmi] = useState(0);
	let [metricBmi, setMetricBmi] = useState(0);

	standarBmi = useMemo(() => bmiCalculatorStd(selectedFeet, selectedInches, weight), [selectedFeet, selectedInches, weight]);
	metricBmi = useMemo(() => bmiCalculatorMetric(cm, weight), [cm, weight]);

	const calculateStdBmi = (e) => {
		const bmi = standarBmi;
		if (selectedFeet && selectedInches && weight) {
			setStandarBmi(bmi);
		}
	}
	const calculateMetricBmi = (e) => {
		e.preventDefault();

		const bmi = metricBmi;
		if (cm && weight) {
			setMetricBmi(bmi);
		}
	}

	return (
		<SafeAreaProvider>
			<SafeAreaView className="flex-1 justify-start items-center bg-white">
				<Stack.Screen options={{ headerShown: true }} />
				<View className="text-center mt-5">
					<Text className="text-4xl text-cyan-500">BMI Calculator</Text>
				</View>
				<View className=" border bg-zinc-50 border-gray-200 w-[330px] mt-4 py-5 rounded-lg shadow-sm shadow-gray-200 min-h-[500px]">
					<View className="flex gap-16">
						{/* Tab Buttons */}
						<View className="flex flex-row items-center justify-center">
							<TouchableOpacity
								onPress={() => setActiveTab(1)}
								className="border border-cyan-700 px-4 py-2 rounded-tl-md rounded-bl-md"
							>
								<Text className={`${activeTab === 1 ? 'text-cyan-500' : 'text-gray-500'}`}>Standard</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => setActiveTab(2)}
								className="border border-cyan-700 px-4 py-2 rounded-tr-md rounded-br-md"
							>
								<Text className={`${activeTab === 2 ? 'text-cyan-500' : 'text-gray-500'}`}>Metric</Text>
							</TouchableOpacity>
						</View>

						{/* BMI Form */}
						{activeTab === 1 && (
							<View className="flex justify-center items-center gap-7">
								{/* Length */}
								<View className="flex justify-center items-center gap-1">
									<Text className="font-semibold text-lg">Length</Text>
									<View className="flex flex-row gap-3 mb-5">
										<TextInput
											value={selectedFeet}
											onChangeText={(text) => {
												const numericValue = text.replace(/[^0-9]/g, '');
												setSelectedFeet(numericValue);
											}}
											className="border border-cyan-700 rounded w-[5rem]" placeholder='   Feet'
											keyboardType='numeric'
										/>
										<TextInput
											value={selectedInches}
											onChangeText={(text) => {
												const numericValue = text.replace(/[^0-9]/g, '');
												setSelectedInches(numericValue);
											}}
											className="border border-cyan-700 rounded w-[5rem]" placeholder=' Inches'
											keyboardType='numeric'
										/>
									</View>
								</View>
								{/* Weight */}
								<View className="flex justify-center items-center mb-4 gap-1">
									<Text className="font-semibold text-lg">Weight</Text>
									<TextInput
										value={weight}
										onChangeText={(text) => {
											const numericValue = text.replace(/[^0-9]/g, '');
											setWeight(numericValue);
										}}
										className="border border-cyan-700 rounded w-[10rem]" placeholder='    Weight (in kg)'
										keyboardType='numeric'
									/>
								</View>
								<View className="w-full flex justify-center items-center">
									<TouchableOpacity
										onPress={calculateStdBmi}
										className="w-fit bg-cyan-700 text-white hidden"
									>
										<Text>Calculate</Text>
									</TouchableOpacity>
									<View className="flex flex-row mt-5">
										<Text className="text-3xl font-bold">BMI = </Text>
										{standarBmi >= 0 && <Text className="text-center text-3xl font-semibold text-cyan-600">{standarBmi}</Text>}
									</View>
								</View>
							</View>
						)}
						{activeTab === 2 && (
							<View className="gap-5">
								<View className="flex justify-center items-center">
									<Text className="font-semibold text-lg">Height</Text>
									<TextInput
										value={cm}
										onChangeText={(text) => {
											const numericValue = text.replace(/[^0-9]/g, '');
											setCm(numericValue);
										}} 
										className="border border-cyan-700 rounded p-4 mb-4 w-1/2"
										placeholder='Height (in cm)' />
								</View>
								<View className="flex justify-center items-center">
									<Text className="font-semibold text-lg">Weight</Text>
									<TextInput
										value={weight}
										onChangeText={(text) => {
											const numericValue = text.replace(/[^0-9]/g, '');
											setWeight(numericValue);
										}}
										className="border border-cyan-700 rounded p-4 mb-4 w-1/2"
										placeholder='Weight (in kg)' />
								</View>
								<View className="w-full flex justify-center items-center">
									<TouchableOpacity
										onPress={calculateMetricBmi}
										className="w-fit bg-cyan-700 text-white hidden"
									>
										<Text>Calculate</Text>
									</TouchableOpacity>
									<View className="flex flex-row mt-5">
										<Text className="text-3xl font-bold">BMI = </Text>
										{metricBmi >= 0 && <Text className="text-center text-3xl font-semibold text-cyan-600">{metricBmi}</Text>}
									</View>
								</View>
							</View>
						)}
					</View>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

export default BMICalculator;