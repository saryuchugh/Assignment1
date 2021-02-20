import React from 'react';
import { StyleSheet, FlatList, Text, View,TouchableHighlight,Button,TouchableOpacity,Modal,ScrollView,KeyboardAvoidingView } from 'react-native';
import {Card,Avatar,Icon} from 'react-native-elements'
import {data} from '../data'
import MyHeader from '../components/MyHeader';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import Collapsible from 'react-native-collapsible';
import * as ErrorRecovery from 'expo-error-recovery';

export default class CollpasedScreen extends React.Component{
  constructor(props){
  super(props);
  this.state={
    title:this.props.navigation.getParam('details')["title"],
    subtitle:this.props.navigation.getParam('details')["subtitle"],
    id:this.props.navigation.getParam('details')["id"],
    collapsed:true
  }
  }
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render(){
    return (
      <SafeAreaProvider>
      
      
      <View style={styles.container}>
      <ScrollView>
      <TouchableOpacity onPress={this.toggleExpanded }>
      
      <View style = {{border:'solid',backgroundColor:'#D2A295'}}>
      <Text style={styles.headerText}>View</Text>
      </View>
      </TouchableOpacity>
      <Collapsible collapsed={this.state.collapsed}>
      <View style={styles.content}>
      <Card><Text style={{fontWeight:'bold',backgroundColor:'#B6CEC7'}}>Created : {item.created}</Text></Card>
       <Card><Text style={{fontWeight:'bold',backgroundColor:'#D8E0BB'}}>Name : {item.title} {item.subtitle}</Text>
    
     <Text style={{fontWeight:'bold',backgroundColor:'#D8E0BB'}}>Description : {item.long_desc}</Text>          
       </Card>  
       </View>
       </Collapsible>
       </ScrollView>
       </View>
       
      
      </SafeAreaProvider>
    )
  }
}