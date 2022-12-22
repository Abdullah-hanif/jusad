import {StyleSheet, Text, View, NativeModules} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// @Navigation
import StackNavigator from './src/navigation/StackNavigator';

// @Translation
import './src/constants/DCSLocalize';
import {useTranslation} from 'react-i18next';

const App = () => {
  const locale = NativeModules.I18nManager.localeIdentifier;
  console.log('==>LOCAL BEFORE===>', locale);
  const localLang = locale.split('_');
  const {t, i18n} = useTranslation();

  // const localLang = ['es', 'es'];
  // es mean spanish
  console.log('====>DEVICE LANG', localLang[0]);

  const setLanguge = code => {
    return i18n.changeLanguage(code);
  };

  React.useEffect(() => {
    setLanguge(localLang[0]);
    setTimeout(() => {
      setLanguge(localLang[0]);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
