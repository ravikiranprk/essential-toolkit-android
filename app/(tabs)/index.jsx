import HomeList from "@/components/HomeList";
import { FlatList, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const calculatorsList = [
  {
    url: "/calculators/age-calculator",
    name: "Age Calculator",
  },
  {
    url: "/calculators/bmi-calculator",
    name: "BMI Calculator",
  },
];
const convertersList = [
  {
    url: "/converters/length-converter",
    name: "Length Converter",
  },
  {
    url: "/converters/temperature-converter",
    name: "Temperature Converter",
  },
  {
    url: "/converters/weight-converter",
    name: "Weight Converter",
  },
  {
    url: "/converters/speed-converter",
    name: "Speed Converter",
  },
  {
    url: "/converters/time-converter",
    name: "Time Converter",
  },
];
const countersList = [
  {
    url: "/counters/word-counter",
    name: "Word Counter",
  },
  {
    url: "/counters/letter-counter",
    name: "Letter Counter",
  },
  {
    url: "/counters/sentence-counter",
    name: "Sentence Counter",
  },
];

const homeListItems = [
  {
    id: 1,
    component: <HomeList
      img={require("../../assets/images/Calculators.png")}
      data={calculatorsList}
      title="Calculators"
      url="/calculators"
    />
  },
  {
    id: 2,
    component: <HomeList
      img={require("../../assets/images/Converters.png")}
      data={convertersList}
      title="Converters"
      url="/converters"
    />
  },
  {
    id: 3,
    component: <HomeList
      img={require("../../assets/images/Counters.png")}
      data={countersList}
      title="Counters"
      url="/counters"
    />
  },
];

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View className="flex flex-row justify-center items-center p-4">
          <Text className="text-[2.625rem] font-black mt-2">Essential Toolkit</Text>
        </View>
      </SafeAreaView>
      <FlatList
        data={homeListItems}
        renderItem={({ item }) => item.component}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaProvider>
  )
}
