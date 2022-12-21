import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// @components
import NotificationContainer from '../../components/NotificationContainer';
// @translation
import {useTranslation} from 'react-i18next';

const Notification = ({navigation}) => {
  const {t} = useTranslation();
  const toadyMsg = [
    {
      id: 1,
      imguri: require('../../assets/Icons/Group17000.png'),
      msg: 'Your service request has been approved by Jusad Assistence. Our representative will be come to your place on 4th December 10:00AM',
      date: '12/04/2022',
    },
  ];

  const PreviousMsg = [
    {
      id: 1,
      imguri: require('../../assets/Icons/Group17000.png'),
      msg: 'Service has been ended 3:20 PM by employee John Micheal',
      date: '12/04/2022',
    },
    {
      id: 2,
      imguri: require('../../assets/Icons/Group17000.png'),
      msg: 'Service has been ended 3:20 PM by employee John Micheal',
      date: '12/04/2022',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.secoundContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            {t('common:today')}
          </Text>
        </TouchableOpacity>
        {toadyMsg.map((data, index) => {
          return (
            <NotificationContainer
              imgUri={data.imguri}
              msg={data.msg}
              date={data.date}
            />
          );
        })}
        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
          {t('common:previous')}
        </Text>
        {PreviousMsg.map((data, index) => {
          return (
            <NotificationContainer
              imgUri={data.imguri}
              msg={data.msg}
              date={data.date}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secoundContainer: {
    backgroundColor: 'white',
    marginVertical: 30,
    padding: 10,
  },
});
