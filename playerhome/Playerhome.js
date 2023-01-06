import { StatusBar } from 'expo-status-bar';
import React, { usestate, Fragment } from 'react';
import { Text, View, SafeAreaView, useWindowDimensions, TouchableOpacity, Image } from 'react-native';
import styles from './PlayerhomeStyles';
import feedstyles from './PlayerfeedStyle';
import {
  Defaultimage,
  Feedcontest,
  Feedmedal,
  Feedtalk,
  Graydot,
  Heart,
  Talk,
  Goldstar,
  Label,
  Storyplusicon,
} from './assets/Index';


 
export default function PlayerHome() {
  const width = useWindowDimensions().width;

  return (
    <Fragment> 
      <SafeAreaView style={{ flex:0}} />
      <SafeAreaView  style={{ flex:1, backgroundColor: '#f6f6f6' }} >
    <View width={width} style={ styles.container}>
        <View style={ styles.navber}>
            <View style={styles.navberL}></View>
            <View>
            <Text style={ styles.navbertext}>강석원</Text>
            </View>
            <View style={styles.navberL}></View>
        </View>
        <View style={ styles.profileview}>
           <View style={ styles.profile}>
             <View style={  styles.profileL }>
                <Defaultimage style={styles.profileimageview} />
             <Text style={  styles.Profilemargintext }>수영선수</Text>
             <Text style={  styles.Profiletext }>강원체육고등학교</Text>
           </View>
           <View style={ styles.profileR}>
                 <View style={  styles.textbox }>
                <Text style={styles.Profiletext }>전적</Text>
                <Text style={ styles.Profiletext }>팬</Text>
                <Text style={ styles.Profiletext }>전체</Text>               
                 </View>
                <View style={ styles.textbox }>
                <Text style={  styles.Profiletext }>12</Text>
                <Text style={  styles.Profiletext }>104</Text>
                <Text style={  styles.Profiletext }>7위</Text>
               </View>
               <TouchableOpacity style={ styles.button}>
                 <Text style={ styles.buttontext}>나의 라인업에 추가</Text>
                </TouchableOpacity>
          </View>
          </View>
            <Text style={styles.playertext}>안녕하세요. 반가워요</Text>
        </View>
        <View style={feedstyles.feedview}>

        <View style={feedstyles.playerfeed}>
          <View style={feedstyles.feedmain}>
            <View style={feedstyles.titleview}>
              <View style={feedstyles.titleveiwL}>
              <Feedcontest/>
              <View style={feedstyles.titletextview}>
                <Text style={feedstyles.titletext}>제22회 대통령배 종합육상경기대회</Text>
                <View style={feedstyles.datetextview}>
                  <Graydot/>
                  <Text style={feedstyles.datetext}>22.04.11~22.04.14</Text>
                  <Graydot/>
                  <Text style={feedstyles.datetext}>인천종합운동장</Text>
                </View>
              </View>
              <View style={feedstyles.titleviewR}>
                <Label/>
                <Text style={feedstyles.labeltext}>D-15</Text>
              </View>
              </View>
            </View>
            <View style={feedstyles.contentview}>
              <Text>최선을 다하고 오겠습니다</Text>
            </View>
            <View style={feedstyles.eventview}>
              <Text style={feedstyles.eventtext}>출전 종목</Text>
              <View style={feedstyles.eventboxview}>
                <View style={feedstyles.eventbox}>
                  <Text style={feedstyles.eventboxtext}>400m</Text>
                </View>
                <View style={feedstyles.eventbox}>
                  <Text style={feedstyles.eventboxtext}>400m</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={feedstyles.feedfooter}>
            <View style={feedstyles.footerL}>
            <Heart/>
            <Text style={feedstyles.footernumber}>98</Text>
            <Talk/>
            <Text style={feedstyles.footernumber}>23</Text>
            </View>
            <Text style={feedstyles.footertext}>3분전</Text>
          </View>
        </View>
      
        <View style={feedstyles.playerfeed}>
          <View style={feedstyles.feedmain}>
            <View style={feedstyles.titleview}>
              <View style={feedstyles.titleveiwL}>
              <Feedmedal/>
              <View style={feedstyles.titletextview}>
                <Text style={feedstyles.titletext}>제22회 대통령배 종합육상경기대회</Text>
                <View style={feedstyles.datetextview}>
                  <Graydot/>
                  <Text style={feedstyles.datetext}>22.04.11~22.04.14</Text>
                  <Graydot/>
                  <Text style={feedstyles.datetext}>인천종합운동장</Text>
                </View>
              </View>
              <View style={feedstyles.titleviewR}>
              </View>
              </View>
            </View>
            <View style={feedstyles.contentview}>
          
            <View style={feedstyles.contentresult}>

              <View style={feedstyles.stariconview}>
              <Goldstar
                width={33}
                height={33}/>
                <Text style={feedstyles.staricontext}>1</Text>
              </View>

              <Text style={feedstyles.starlargetext}>위</Text>
              <Text style={feedstyles.startext}>(27초 31)</Text>

              </View>
            </View>

            <View style={feedstyles.eventview}>
              <Text style={feedstyles.eventtext}>출전 종목</Text>
              <View>
                <View style={feedstyles.eventbox}>
                  <Text style={feedstyles.eventboxtext}>400m</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={feedstyles.feedfooter}>
            <View style={feedstyles.footerL}>
            <Heart/>
            <Text style={feedstyles.footernumber}>98</Text>
            <Talk/>
            <Text style={feedstyles.footernumber}>23</Text>
            </View>
            <Text style={feedstyles.footertext}>3분전</Text>
          </View>
        </View>

        <View style={feedstyles.playerfeed}>
          <View style={feedstyles.feedmain}>
            <View style={feedstyles.titleview}>
              <View style={feedstyles.titleveiwL}>
              <Feedtalk/>
              <View style={feedstyles.titletextview}>
                <Text style={feedstyles.titletext}>이번 대회에서는 정말..</Text>
                <View style={feedstyles.datetextview}>
              
                </View>
              </View>
              <View style={feedstyles.titleviewR}>
              </View>
              </View>
            </View>
            <View style={feedstyles.contentview}>
          
            <View style={feedstyles.contentresult}>

              </View>
            </View>

            <View style={feedstyles.eventview}>
              <Text style={feedstyles.eventtext}>출전 종목</Text>
              <View>
                <View style={feedstyles.eventbox}>
                  <Text style={feedstyles.eventboxtext}>400m</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={feedstyles.feedfooter}>
            <View style={feedstyles.footerL}>
            <Heart/>
            <Text style={feedstyles.footernumber}>98</Text>
            <Talk/>
            <Text style={feedstyles.footernumber}>23</Text>
            </View>
            <Text style={feedstyles.footertext}>3분전</Text>
          </View>
        </View>
         
         <TouchableOpacity  style={feedstyles.storyiconstyle}>
         <Storyplusicon/>
         </TouchableOpacity>
      

      </View>
        </View>
        </SafeAreaView>
      </Fragment>
  );
}

