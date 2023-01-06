import { StatusBar } from 'expo-status-bar';
import { Text, View, useWindowDimensions, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import styles from './feedMessageStyles';
import { Feedtalk } from './assets';


export default function feedmessage() {
  const width = useWindowDimensions().width;

  return (
    <SafeAreaView width={width} style={styles.container}>
      <View style={styles.navber}>
      <View style={styles.navberL}></View>
      <View style={styles.navberM}>
        <Text style={styles.navbertext}>메시지</Text>
      </View>
      <View style={styles.navberR}></View>
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.textboldstyle}>내용</Text>
            <View style={styles.contentbox}>
               <View style={styles.title}>
                  <View style={styles.feedtalkview}>
                  <Feedtalk/>
                  </View>
              <TextInput
              style={styles.titletext}
              placeholder='제목을 입력해주세요'
              placeholderTextColor={'#0E0E0E'}
              />
               </View>
             <TextInput
              multiline={true}
              style={styles.contenttext}
              placeholder='어떤 말을 전하고 싶으신가요?'
              placeholderTextColor={'#0E0E0E66'}
             />
            </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}


