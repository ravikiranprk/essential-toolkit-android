import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';

const Layout = () => {
  return ( 
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "#8E8E93",
            tabBarLabelStyle: {
                fontSize: 12,
            },
        }}
    >
        <Tabs.Screen 
            name="index" 
            options={{ 
                headerShown: false, 
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" size={size} color={color} className="" />
                )
            }} 
        />
        <Tabs.Screen 
            name="calculators" 
            options={{ 
                headerShown: false, 
                title: "Calculators",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="calculator-outline" size={size} color={color} className="" />
                ),
            }} 
        />
        <Tabs.Screen 
            name="converters" 
            options={{ 
                headerShown: false, 
                title: "Converters",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="swap-horizontal-outline" size={size} color={color} className="" />
                )
            }} 
        />
        <Tabs.Screen 
            name="counters" 
            options={{ 
                headerShown: false, 
                title: "Counters",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="document-text-outline" size={size} color={color} className="" />
                )  
            }} 
        />
    </Tabs>
  )
}

export default Layout