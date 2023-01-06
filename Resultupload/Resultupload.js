import { Text, View, useWindowDimensions, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import styles from './ResultuploadStyles';
import { Graydot, Grayfeedmedal, Goldstar, Alerticon } from './assets/Index';


export default function resultupload() {
    const width = useWindowDimensions().width;
  
    return (
      <SafeAreaView width={width} style={styles.container}>
         <View style={styles.navber}>
         <View style={styles.navberL}></View>
         <View style={styles.navberM}>
          <Text style={styles.navbertext}>경기 결과 업로드</Text>
         </View>
         <View style={styles.navberR}></View>
         </View>

         <View style={styles.content}>
          <View style={styles.contentboxview}>
          <View>
            <Text style={styles.textboldstyle}>결과 정보</Text>
            <View style={styles.alerttextview}>
              <Alerticon/>
              <Text style={styles.alerttext}>해당 대회 정보가 맞는지 확인해보세요</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.titleview}>
             <Grayfeedmedal/>
              <View style={styles.titletextview}>
                <Text style={styles.titletext}>제22회 대통령배 종합육상경기대회</Text>
                <View style={styles.datetextview}>
                  <Graydot/>
                  <Text style={styles.datetext}>22.04.11~22.04.13</Text>
                  <Graydot/>
                  <Text style={styles.datetext}>종합운동장</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentveiw}>
              <View style={styles.stariconview}>
                <Goldstar
                width={33}
                height={33}/>
                <Text style={styles.staricontext}>1</Text>
              </View>
              <Text style={styles.starlargetext}>위</Text>
              <Text style={styles.startext}>(27초 31)</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.textstyle}>출전 종목</Text>
              <View style={styles.eventbox}>
                <Text style={styles.eventtext}>400m</Text>
              </View>
            </View>
          </View>
          <View style={styles.checkboxview}>
            <View style={styles.checkbox}></View>
          <Text style={styles.checktext}>게시물에 공유합니다</Text>
          </View>
          </View>
        
        <View style={styles.buttonview}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>확인</Text>
        </TouchableOpacity>
        </View>

         </View>
      </SafeAreaView>
    );
  }
  