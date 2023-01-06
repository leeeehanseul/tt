import { Text, View, useWindowDimensions, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import styles from './ResultlistStyles';
import { Colordot, Goldstar, Graydot, Upload, Graystar } from './assets/Index';


export default function resultlist() {
    const width = useWindowDimensions().width;
  
    return (
      <SafeAreaView width={width} style={styles.container}>
        <View style={styles.navber}>
        <View style={styles.navberL}></View>
        <View style={styles.navberM}>
          <Text style={styles.navbertext}>경기 결과</Text>
        </View>
        <View style={styles.navberR}></View>
        </View>
  
        <View style={styles.content}>

          <View>
            <View style={styles.topview}>
            <View style={styles.textview}>
               <Text style={styles.titletext}>22회 대통령배 종합육상경기</Text>
              <View style={styles.dateview}>
               <Graydot/>
               <Text style={styles.datetext}>22.04.11~22.04.14</Text>
               <Graydot/>
               <Text style={styles.datetext}>인천종합운동장</Text>
              </View>
              <View style={styles.eventview}>
               <Colordot/>
               <Text style={styles.eventtext}>100M</Text>
              </View>
            </View>
             <View style={styles.iconview}>
             </View>
             </View>

            <View style={styles.resultview}>
              <View style={styles.resulttextview}>
               <Text style={styles.resulttext}>결과가 입력되지 않았습니다.</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.topview}>
            <View style={styles.textview}>
               <Text style={styles.titletext}>22회 대통령배 종합육상경기</Text>
              <View style={styles.dateview}>
               <Graydot/>
               <Text style={styles.datetext}>22.04.11~22.04.14</Text>
               <Graydot/>
               <Text style={styles.datetext}>인천종합운동장</Text>
              </View>
              <View style={styles.eventview}>
               <Colordot/>
               <Text style={styles.eventtext}>100M</Text>
              </View>
            </View>
             <View style={styles.iconview}>
              <Upload/>
             </View>
             </View>

            <View style={styles.resultview}>
              <View style={styles.resulttextview}>
               <Text style={styles.resultboldtext}>5위 1분45초35</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.topview}>
            <View style={styles.textview}>
               <Text style={styles.titletext}>22회 대통령배 종합육상경기</Text>
              <View style={styles.dateview}>
               <Graydot/>
               <Text style={styles.datetext}>22.04.11~22.04.14</Text>
               <Graydot/>
               <Text style={styles.datetext}>인천종합운동장</Text>
              </View>
              <View style={styles.eventview}>
               <Colordot/>
               <Text style={styles.eventtext}>100M</Text>
              </View>
            </View>
             <View style={styles.iconview}>
              <Upload/>
             </View>
             </View>

            <View style={styles.resultview}>
              <View style={styles.resulttextview}>
                <View style={styles.medalview}>
                  <Goldstar
                   width={25}
                   height={25}
                   />
                  <Text style={styles.medaltext}>1</Text>
                </View>
               <Text style={styles.resultboldtext}>27초 31</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.topview}>
            <View style={styles.textview}>
               <Text style={styles.titletext}>22회 대통령배 종합육상경기</Text>
              <View style={styles.dateview}>
               <Graydot/>
               <Text style={styles.datetext}>22.04.11~22.04.14</Text>
               <Graydot/>
               <Text style={styles.datetext}>인천종합운동장</Text>
              </View>
              <View style={styles.eventview}>
               <Colordot/>
               <Text style={styles.eventtext}>100M</Text>
              </View>
            </View>
             <View style={styles.iconview}>
             </View>
             </View>

            <View style={styles.resultview}>
              <View style={styles.resulttextview}>
               <Text style={styles.resulttext}>아래 결과를 입력해주세요</Text>
              </View>
            </View>

            <View style={styles.resultinput}>
              <View>
              <Text style={styles.titletext}>4X100mR</Text>

              <View style={styles.input}>
                <View style={styles.input1}>
                <Text>순위</Text>
                <View style={styles.pickmedalview}>
                  <Graystar
                   width={24}
                   height={24}
                   />
                  <Text style={styles.medaltext}>1</Text>
                </View>
                <View style={styles.pickmedalview}>
                  <Graystar
                   width={24}
                   height={24}
                   />
                  <Text style={styles.medaltext}>2</Text>
                </View>
                <View style={styles.pickmedalview}>
                  <Graystar
                   width={24}
                   height={24}
                   />
                  <Text style={styles.medaltext}>3</Text>
                </View>
                  <View style={styles.numberinput}>
                    <Text>4</Text>
                  </View>
                  </View>

                  <View style={styles.input2}>
                  <Text>기록</Text>
                  <TextInput
                  style={styles.textinputview}
                  placeholder='예) 27초 11'/>
                  </View>
              </View>
              </View>

              <View style={styles.buttonview}>
              <TouchableOpacity style={styles.button}>
               <Text style={styles.buttontext}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


        </View>
      </SafeAreaView>
    );
  }
  
  
  