/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from './src/components/Button';
import {CustomInput} from './src/components/CustomInput';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={style.flex}>
        <View style={[style.flex, style.container]}>
          <View>
            <Text style={style.title}>Sign in to Dribbble</Text>
          </View>

          <Button icon label="Sign In with Google" />

          <View style={style.loginOptionContainer}>
            <View style={style.horizontalLine} />
            <Text style={style.loginOptionLabel}>or sign in with email</Text>
            <View style={style.horizontalLine} />
          </View>

          <View style={style.spacer} />

          <CustomInput label="Username or Email" />
          <View style={style.spacer} />
          <CustomInput label="Password" subText="Forgot?" />

          <View style={style.spacer} />

          <Button label="Sign In" variant="inverted" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  title: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginTop: 20,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'lightgray',
  },
  loginOptionLabel: {
    paddingHorizontal: 10,
    color: 'gray',
    fontWeight: '300',
  },
  spacer: {
    marginTop: 10,
  },
});

export default App;
