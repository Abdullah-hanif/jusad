import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const NotificationContainer = ({imgUri, msg, date}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        resizeMode="contain"
        style={{height: 60, width: 60, right: 10}}
        source={imgUri}
      />
      <View style={{flexShrink: 1}}>
        <Text style={{flexShrink: 1, left: 10, color: 'black'}}>{msg}</Text>
        <Text
          style={{left: 10, marginTop: 20, color: 'black', fontWeight: 'bold'}}>
          {date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});
