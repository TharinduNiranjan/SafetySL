import React, { Component } from 'react';
import { View, StyleSheet,Button } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  idNumber: t.String,
  birthDate : t.Date
});
// var options = t.enums({
//   fields: {
//     birthDate:{
//       mode:"date"
//     }
//   }
// });
var options = {
  fields: {
    birthDate: {
      mode: 'date' // display the Date field as a DatePickerAndroid
    }
  }
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this.refs.form.getValue(); // use that ref to get the form value
    if(value!=null){
      console.log('value: ', value);
      console.log(value.idNumber.substr(0,2),typeof value.birthDate)
      
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Form ref="form" type={User} options={options} />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});