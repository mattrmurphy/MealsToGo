import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen'
import { SafeArea } from './src/components/utility/safe-area.component'
import { theme } from './src/infrastructure/theme'

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'compass',
  Settings: 'cog',
}

const Settings = () => (
  <SafeArea style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Settings!</Text>
  </SafeArea>
)

const Map = () => (
  <SafeArea style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Map!</Text>
  </SafeArea>
)

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]

  return {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  }
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
            <ExpoStatusBar style="auto" />
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
    </>
  )
}
