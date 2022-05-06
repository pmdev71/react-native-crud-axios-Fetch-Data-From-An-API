import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import axios from 'axios'

const App = () => {

//GET------------------------
const callGetApi = () =>{
  axios.get('https://crudcrud.com/api/fc787ce4634a4305b3d654a7992cbbc6/users')
  .then((response)=>{
    console.log('GET Clicked')
    console.log(response?.data)
  })
  .catch((error) => {
    console.log('Error Prinr: ' + error)
  })
}

//GET Single user by ID------------------------
const callGetSingleUserApi = (id) =>{
  axios.get(`https://crudcrud.com/api/fc787ce4634a4305b3d654a7992cbbc6/users/${id}`)
  .then((response)=>{
    console.log('GET Single User Clicked')
    console.log(response?.data)
  })
  .catch((error) => {
    console.log('Error Prinr: ' + error)
  })
}

//POST------------------------
const callPostApi = () =>{
  let params = {
    userID : 3,
    name: 'User 2'
  }

  axios.post('https://crudcrud.com/api/fc787ce4634a4305b3d654a7992cbbc6/users', params)
  .then((response)=>{
    console.log('POST Clicked')
    console.log(response?.data)
  })
  .catch((error) => {
    console.log('Error Prinr: ' + error)
  })
}


//PUT------------------------
const callPutApi = (id) =>{
  let params = {
    name: 'Update User 12',
    phone: '1726099909',
  }

  axios.put(`https://crudcrud.com/api/fc787ce4634a4305b3d654a7992cbbc6/users/${id}`, params)
  .then((response)=>{
    console.log('PUT Clicked')
    console.log(response?.data)
  })
  .catch((error) => {
    console.log('Error Prinr: ' + error)
  })
}

//Delete Single user by ID ------------------------
const callDeleteSingleUserApi = (id) =>{
  
  axios.delete(`https://crudcrud.com/api/fc787ce4634a4305b3d654a7992cbbc6/users/${id}`)
  .then((response)=>{
    console.log('DELETE Single user by ID Clicked')
    console.log(response?.data)
  })
  .catch((error) => {
    console.log('Error Prinr: ' + error)
  })
}

  return (
    <View>
      <Button title='GET(()' onPress={()=> callGetApi()} />
      <Button title='POST()' onPress={()=> callPostApi()} />
      <Button title='PUT()' onPress={()=> callPutApi('6274d1b46f047803e8ae4970')} />
      <Button title='GET() SingleUser' onPress={()=> callGetSingleUserApi('6274dcc86f047803e8ae4983')} />
      <Button title='DELETE() SingleUser' onPress={()=> callDeleteSingleUserApi('6274dcd76f047803e8ae4984')} />
      {/* <Button title='POST()' onPress={()=> callPostApi()} /> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})