import { Stack } from 'expo-router';
import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import DatePicker, { getToday } from "react-native-modern-datepicker";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const yearsCalculator = (dob, today) => {
    const years = today.getFullYear() - dob.getFullYear();
    return years;
};
const monthsCalculator = (dob, today) => {
    if (dob > today) [dob, today] = [today, dob];
    const months = today.getMonth() - dob.getMonth();

    if (today.getDate() < dob.getDate()) return months - 1;
    if (today.getDate() == dob.getDate()) return 0;

    return months;
}
const daysCalculator = (dob, today) => {
    const days = Math.abs(today.getDate() - dob.getDate() + 31);

    if (dob.getDate() == today.getDate()) return 0;

    return days;
}
const totalMonths = (dob, today) => {
    const months = monthsCalculator(dob, today);
    const years = yearsCalculator(dob, today);
    const total = years * 12 + months;

    return total;
}
const totalDays = (dob, today) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.round(Math.abs((dob - today) / oneDay));
    if (today.getDate() - dob.getDate()) return (days - 1);
    return days;
}
const weeks = (dob, today) => {
    let daysCount = 0;
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    let dateDiff = dob - today;
    while (dateDiff % 52 != 0) {
        daysCount++;
        dateDiff--;
    }
    const weeks = Math.round(Math.abs((dateDiff) / oneWeek));
    return [weeks, daysCount];
}
const totalHours = (dob, today) => {
    const days = totalDays(dob, today);
    const hours = days * 24;
    return hours;
}
const totalMiutes = (dob, today) => {
    const hours = totalHours(dob, today);
    const minutes = hours * 60;
    return minutes;
}
const totalSeconds = (dob, today) => {
    const minutes = totalMiutes(dob, today);
    const seconds = minutes * 60;
    return seconds;
}

const AgeCalculator = () => {
    const [from, setFrom] = useState(getToday());
    const [to, setTo] = useState(getToday());

    const years = useMemo(() => yearsCalculator(new Date(from), new Date(to)), [from, to]);
    const months = useMemo(() => monthsCalculator(new Date(from), new Date(to)), [from, to]);
    const days = useMemo(() => daysCalculator(new Date(from), new Date(to)), [from, to]);
    const monthsTotal = useMemo(() => totalMonths(new Date(from), new Date(to)), [from, to]);
    const daysTotal = useMemo(() => totalDays(new Date(from), new Date(to)), [from, to]);
    const [weeksTotal, remDays] = useMemo(() => weeks(new Date(from), new Date(to)));
    const hoursTotal = useMemo(() => totalHours(new Date(from), new Date(to)), [from, to]);
    const minutesTotal = useMemo(() => totalMiutes(new Date(from), new Date(to)), [from, to]);
    const secondsTotal = useMemo(() => totalSeconds(new Date(from), new Date(to)), [from, to]);

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Stack.Screen options={{ headerShown: true }} />
                <View className="flex justify-center items-center">
                    {/* header */}
                    <Text>Age Calculator</Text>
                    <View>
                        <View>
                            <Text>
                                Age Calculator Description
                            </Text>
                            <Text>

                            </Text>
                            <Text>

                            </Text>
                        </View>
                        <Text>
                            - Age Calculator by Essential Toolkit
                        </Text>
                    </View>

                    {/* picker */}
                    <View className="flex justify-center items-center gap-4">
                        <DatePicker
                            selected={from}
                            onSelectedChange={date => setFrom(date)}
                            current={from}
                            options={{
                                backgroundColor: "#090C08",
                                textHeaderColor: "#FFA25B",
                                textDefaultColor: "#F6E7C1",
                                selectedTextColor: "#fff",
                                mainColor: "#FA722B",
                                textSecondaryColor: "#D6C7A1",
                                borderColor: "#D6C7A1",
                            }}
                            mode='calendar'
                            style={{ borderRadius: 10 }}
                        />

                        <Text>to</Text>

                        <DatePicker
                            selected={to}
                            onSelectedChange={date => setTo(date)}
                            current={to}
                            options={{
                                backgroundColor: "#090C08",
                                textHeaderColor: "#FFA25B",
                                textDefaultColor: "#F6E7C1",
                                selectedTextColor: "#fff",
                                mainColor: "#FA722B",
                                textSecondaryColor: "#D6C7A1",
                                borderColor: "#D6C7A1",
                            }}
                            mode='calendar'
                            style={{ borderRadius: 10 }}
                        />
                    </View>

                    {/* results */}
                    <View>
                        <Text>{years} years {months} months {days} days</Text>
                        <Text>(or)</Text>
                        <Text>{monthsTotal} months {days} days</Text>
                        <Text>(or)</Text>
                        <Text>{weeksTotal} weeks {remDays} days</Text>
                        <Text>(or)</Text>
                        <Text>{daysTotal} days</Text>
                        <Text>(or)</Text>
                        <Text>{hoursTotal} hours</Text>
                        <Text>(or)</Text>
                        <Text>{minutesTotal} minutes</Text>
                        <Text>(or)</Text>
                        <Text>{secondsTotal} seconds</Text>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default AgeCalculator;