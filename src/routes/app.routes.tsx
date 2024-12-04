import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../screens/Login';
import { Pets } from '../screens/Pets';
import { Scanner } from '../screens/Scanner';
import { PetsDetalhes } from '../screens/PetsDetalhes';
import { Rankings } from '../screens/Rankings';
import { Perfil } from '../screens/Perfil';
import { Ranking, Recycle, SquaresFour, User, House } from 'phosphor-react-native';
import { Text } from 'react-native';
import { Cadastro } from '../screens/Cadastro';

type RouteNames = 'pets' | 'rankings' | 'recycle' | 'perfil' | 'house';

const getTabIcon = (routeName: RouteNames, color: string, size: number) => {
  const icons: Record<RouteNames, JSX.Element> = {
    house: <House color={color} size={size} />,
    pets: <SquaresFour color={color} size={size} />,
    recycle: <Recycle color={color} size={size} />,
    rankings: <Ranking color={color} size={size} />,
    perfil: <User color={color} size={size} />

  };

  return icons[routeName];
};

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <TabNavigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          height: 60,
        },

        tabBarIcon: ({ color, size }) => getTabIcon(route.name as RouteNames, color, size) || <Text>?</Text>,
      })}
    >

      <TabScreen
        name="pets"
        component={Pets}
        options={{
          tabBarLabel: () => null
        }}
      />
      <TabScreen
        name="recycle"
        component={Scanner}
        options={{
          tabBarLabel: () => null
        }}
      />
      <TabScreen
        name="rankings"
        component={Rankings}
        options={{
          tabBarLabel: () => null
        }}
      />
      <TabScreen
        name="perfil"
        component={Perfil}
        options={{
          tabBarLabel: () => null
        }}
      />
    </TabNavigator>
  );
}

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <StackNavigator screenOptions={{ headerShown: false }}>
      <StackScreen name="login" component={Login} />
      <StackScreen name="main" component={TabRoutes} />
      <StackScreen name = "scanner" component={Scanner} />
      <StackScreen name="petsDetalhes" component={PetsDetalhes} />
      <StackScreen name="cadastro" component={Cadastro}/>
    </StackNavigator>
  );
}
