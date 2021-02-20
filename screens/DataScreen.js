import React from 'react';
import { StyleSheet, FlatList, Text, View,TouchableHighlight,Button,TouchableOpacity,Modal,ScrollView,KeyboardAvoidingView } from 'react-native';
import {Card,Avatar,Icon} from 'react-native-elements'
import {data} from '../data'
import MyHeader from '../components/MyHeader';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import Collapsible from 'react-native-collapsible';
import * as ErrorRecovery from 'expo-error-recovery';
export default class fetchscreen extends React.Component{
  constructor(props){
  super(props);
  this.state={
    title:'',
    subtitle:'',
    id:'',
    collapsed:true
  }
  }
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  
  
 extractdata = ({item})=>{
   return(
     <TouchableHighlight>
  <View>
  <Card>
  <Card.Title>User Information
  </Card.Title>
  <Card.Divider/>
  <Text style={{fontWeight:'bold',backgroundColor:'#B6CEC7'}}>Created : {item.created}</Text>
  <Text style={{fontWeight:'bold',backgroundColor:'#D8E0BB'}}>Name : {item.title} {item.subtitle}</Text>
  <Text style={{fontWeight:'bold',backgroundColor:'#D8E0BB'}}>Description :{item.long_desc}</Text> 
  </Card>    
 
  </View>
  </TouchableHighlight> 
   )
 }
 
render(){
    return (
      <SafeAreaProvider>
    <View>
    <MyHeader title="Assigned To Me" navigation ={this.props.navigation}/>
     <Card>
       
        <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity onPress={this.toggleExpanded }>
        
        <View style = {{border:'solid',backgroundColor:'#D2A295'}}>
        <Text style={styles.headerText}>View</Text>
        </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed}>
        <View style={styles.content}>
        
        <Card>
        <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={this.extractdata}
      />          
       
      </Card>
      </View>
      
      </Collapsible>
      </ScrollView>
      </View>
      
      </Card>
    </View>
    </SafeAreaProvider>
  );
};
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }}
})