import * as React from 'react';
import {Text, TextInput, StyleSheet, Button,Image,View,TouchableOpacity,TouchableHighlight,KeyboardAvoidingView,FlatList,Modal, ScrollView } from 'react-native';
import {Header, Icon,Card} from 'react-native-elements'
import data from '../data'
import MyHeader from '../components/MyHeader';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import DataScreen from './DataScreen'
import Maps from './Maps';

  
export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            title:'',
            subtitle:'',
            isModalVisible:'false'
            
        }
    }
    showModal = () => {
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isModalVisible}>

          <View style={styles.modalContainer}>
              <ScrollView style={{ width: "100%" }}>
              <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <TouchableOpacity
        
        onPress={()=>this.setState({"isModalVisible":false})} > 
           <Text style = {{fontSize:29, fontWeight:'bold', color:'red', marginTop:80,marginBottom:10}}>Choose Option From Below</Text>
           <View style = {{width:'80%', height:'80%', border:'solid'}}>
           <TouchableOpacity
        
        onPress={()=>this.setState({"isModalVisible":false})}>
           <Text style={{fontWeight:'bold',fontSize:20,marginBottom:15}}>Assigned To Me   </Text>
           </TouchableOpacity>
            <TouchableOpacity
        
        onPress={()=>this.setState({"isModalVisible":false})}>
           <Text style={{fontWeight:'bold',fontSize:20,marginBottom:15}}>Priority  </Text>
           </TouchableOpacity>
            <TouchableOpacity
        
        onPress={()=>this.setState({"isModalVisible":false})} >
           <Text style={{fontWeight:'bold',fontSize:20,marginBottom:15}}>Unassigned  </Text>
          </TouchableOpacity>
           <TouchableOpacity
        
        onPress={()=>this.setState({"isModalVisible":false})} >
           <Text style={{fontWeight:'bold',fontSize:20,marginBottom:15}}>Everything </Text>
           </TouchableOpacity>
          
            </View>
            </TouchableOpacity>
            </KeyboardAvoidingView>
            </ScrollView>
            </View>
                
          </Modal>
          );
        };
  
    render(){
        return(
            <SafeAreaProvider>
            <View style={{flex:1,backgroundColor:'#d6e8d9'}}>
            {this.showModal()}
           
            <MyHeader title="Assigned To Me" navigation ={this.props.navigation}/>
            
            <View >
            <KeyboardAvoidingView>
            <View style = {{flexDirection:'row', justifyContent:"center",alignItems:'center'}}>
            <View style={styles.SectionStyle}>
 
                   
            <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
           
           <TextInput
            placeholder = "Search Task"
            onChangeText={text => {
              this.setState({
                title: text,
                subtitle:text
              });
            }}
          />
          </View>
        
          <TouchableOpacity
            style={styles.searchButton} 
                onPress={() => this.setState({ 
                isModalVisible: true,
                  })
            }>
           
            <Text style={styles.searchText}>Filter <Image source = {require('../assets/filter1.jpg')} style = {{width:20,height:20,flex:1,alignItems:'center'}}/></Text>
            </TouchableOpacity>
            <View>
            </View>
            </View>
            </KeyboardAvoidingView>
            </View>
            </View>
        </SafeAreaProvider>
        )
    }
}
const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    inputBoxContainer: {
      alignItems:'center',
      justifyContent:'space-between'
    },
    searchButton: {
      width: '20%',
      height: 40,
      margin:20,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderWidth: 2,
      borderRadius: 2,
      backgroundColor:'white'
    },
    searchText:{
      fontSize: 15,
      fontWeight: 'bold',
      flexDirection:'column',
      color:'grey'
    },
    searchIcon: {
        padding: 10,
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
        margin: 10,
        width:200  
    },
     outputContainer:{
        flex:0.7,
        alignItems:'center'
      },
      detailsContainer:{
        flexDirection:'row',
        alignItems:'center'
      },
      detailsTitle:{
        color:'orange',
        fontSize:20,
        fontWeight:'bold'
      },
        modalContainer: {
          flex: 1,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffff",
          marginRight: 30,
          marginLeft: 30,
          marginTop: 80,
          marginBottom: 80,
          backgroundColor:'grey'
        },
        KeyboardAvoidingView: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
      
})