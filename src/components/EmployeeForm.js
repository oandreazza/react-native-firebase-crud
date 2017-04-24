import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { View, Text, Picker } from 'react-native';
import { Card, CardSection, Input, Button} from './common'


const EmployeeCreate = ( { handleSubmit, children } ) => {

  renderInput = ( { input: { onChange, ...restInput }, placeholder, label, autoFocus} ) => {
    return <Input onChangeText={onChange} label={label} autoFocus={autoFocus} placeholder={placeholder} {...restInput} />
  }

  renderPicker = ( { input: { onChange, ...restInput }, placeholder} ) => {
    return (
      <View style={{ flex: 1}}>
        <Text style={styles.pickerLabelStyle}>Shift</Text>
        <Picker onValueChange={onChange}  selectedValue={restInput.value}>
          <Picker.Item label="Monday" value="1" />
          <Picker.Item label="Tuesday" value="2" />
          <Picker.Item label="Wednesday" value="3" />
          <Picker.Item label="Thursday" value="4" />
          <Picker.Item label="Friday" value="5" />
          <Picker.Item label="Saturday" value="6" />
          <Picker.Item label="Sunday" value="0" />
        </Picker>
      </View>
    )
  }


  return(
      <Card>
        <CardSection>
          <Field name="name" autoFocus={true} label="Name" placeholder="Name" component={this.renderInput} />
        </CardSection>
        <CardSection>
          <Field name="phone" label="Phone" placeholder="(51) 3023-9902" component={this.renderInput} />
        </CardSection>
        <CardSection>
          <Field name="shift"  component={this.renderPicker} />
        </CardSection>
        <CardSection>
          <Button onPress={handleSubmit}>
            Save
          </Button>
        </CardSection>
        {children}
      </Card>
    )
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}
export default reduxForm({
  form: 'employeeForm',
  enableReinitialize: true,
})(EmployeeCreate)
