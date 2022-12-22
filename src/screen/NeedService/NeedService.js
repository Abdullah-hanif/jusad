import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TxtInputContainer from '../../components/TxtInputContainer';
import {color} from '../../theme';
import UploadImgContainer from '../../components/UploadImgContainer';
import ButtonComp from '../../components/ButtonComp';

// @translation
import {useTranslation} from 'react-i18next';

const NeedService = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {t} = useTranslation();
  setTimeout(() => {
    setModalVisible(false);
  }, 4000);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.secoundContainer}>
        <TxtInputContainer
          icon={require('../../assets/Icons/name.png')}
          placeholder={t('common:myname')}
        />
        <TxtInputContainer
          icon={require('../../assets/Icons/calendar.png')}
          placeholder={t('common:service')}
        />
        <TxtInputContainer
          icon={require('../../assets/Icons/calender.png')}
          placeholder={t('common:dateandtime')}
        />
        <TxtInputContainer
          icon={require('../../assets/Icons/Group4039.png')}
          placeholder={t('common:houseaddress')}
        />
        <TxtInputContainer
          icon={require('../../assets/Icons/Group40.png')}
          placeholder={t('common:hours')}
        />
        {/* //Comment BOX */}
        <View style={styles.InputContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              resizeMode="contain"
              style={{height: 25, width: 25, left: 5}}
              source={require('../../assets/Icons/comment.png')}
            />
            <TextInput
              style={{left: 10}}
              placeholderTextColor={'gray'}
              placeholder={t('common:comment')}
            />
          </View>
        </View>
        {/* //Comment BOX END */}

        {/* //Photo */}
        <View style={{marginVertical: 20}}>
          <Text style={styles.photos}>{t('common:photos')}</Text>
          <View
            style={{
              flex: 1,
              //   backgroundColor: 'blue',
              width: '100%',
              paddingRight: '30%',
              flexDirection: 'row',
            }}
            horizontal={true}>
            <View
              style={{
                // marginVertical: 10,
                width: '40%',
                padding: 20,
                margin: 10,
                borderWidth: 1,
                borderColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                // paddingVertical: 30,
                borderRadius: 10,
                // backgroundColor: 'green',
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../assets/Icons/upload.png')}
              />
              <Text>{t('common:upload')}</Text>
            </View>
            <UploadImgContainer />
            <UploadImgContainer />
          </View>
        </View>
        {/* //Photo END*/}
        {/* @MAP SCREEN  */}
        <View>
          <Text>Map Screen here</Text>
        </View>
        {/* @Button here */}
        <ButtonComp
          onpress={() => setModalVisible(true)}
          name={t('common:sendrequest')}
        />
      </ScrollView>

      <Modal
        statusBarTranslucent={true}
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: 'white',
              width: Dimensions.get('screen').width - 30,
              padding: 30,
              borderRadius: 20,
              flexWrap: 'wrap',
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                resizeMode="contain"
                style={{height: 80, width: 80}}
                source={require('../../assets/Icons/Group16996.png')}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 18,
                  marginVertical: 20,
                }}>
                Sent Sucessfully
              </Text>
            </View>
            <Text style={{textAlign: 'center', color: 'gray'}}>
              your requst has been submitted Sucessfully{'\n'}We will notify you
              once admin approved your{'\n'}request,Thank you :)
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NeedService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secoundContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    // marginBottom: 30,
  },
  InputContainer: {
    height: 130,
    borderWidth: 0.8,
    borderColor: color.gray,
    borderRadius: 10,
    padding: 5,
  },
  photos: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.61)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
