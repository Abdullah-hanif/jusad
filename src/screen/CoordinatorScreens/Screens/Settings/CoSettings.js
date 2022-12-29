import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../../../theme';

// import {color} from '../../theme';
// import {t} from 'i18next';

const CoSettings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View
        style={{
          marginTop: '10%',
          margin: 15,
        }}>
        <Text
          style={{
            // fontWeight: 'bold',
            fontWeight: '700',
            fontSize: 18,
            color: 'black',
          }}>
          Settings
        </Text>

        <View style={{marginTop: '10%'}}>
          <SettingItems
            name="Notifications"
            icon={
              <Switch
                trackColor={{false: '#767577', true: color.primmary}}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            }
          />
          <SettingItems
            name="Change Password"
            icon={
              <Image
                resizeMode="contain"
                style={{height: 20, width: 20}}
                source={require('../../../../assets/Icons/back-2.png')}
              />
            }
          />
          <SettingItems
            name="privacy Policy"
            icon={
              <Image
                resizeMode="contain"
                style={{height: 20, width: 20}}
                source={require('../../../../assets/Icons/back-2.png')}
              />
            }
          />
          <SettingItems
            name="Termms & Condition"
            icon={
              <Image
                resizeMode="contain"
                style={{height: 20, width: 20}}
                source={require('../../../../assets/Icons/back-2.png')}
              />
            }
          />
          <SettingItems
            name="About Us"
            icon={
              <Image
                resizeMode="contain"
                style={{height: 20, width: 20}}
                source={require('../../../../assets/Icons/back-2.png')}
              />
            }
          />
          <SettingItems
            //   onPress={() => navigation.navigate('Login')}
            name="Log Out"
            icon={
              <Image
                resizeMode="contain"
                style={{height: 20, width: 20}}
                source={require('../../../../assets/Icons/back-2.png')}
              />
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

const SettingItems = ({name, icon, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#C6C6C6',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: 17,
            }}>
            {name}
          </Text>
          {icon}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CoSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
