// Navigation/Navigation.js

import React from 'react'; // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import {StyleSheet, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import{createStackNavigator} from'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail';
import Favorites from '../Components/Favorites';
import News from '../Components/News';

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  },
});

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  },
});

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Les Derniers Films',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  },
});

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../Images/ic_search.png')}
              style={styles.icon}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../Images/ic_favorite.png')}
              style={styles.icon}
            />
          );
        },
      },
    },
    News: {
      screen: NewsStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../Images/ic_fiber_new.png')}
              style={styles.icon}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true,
    },
  },
);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default createAppContainer(MoviesTabNavigator);