import React, {Component} from 'react';
import EmployeeForm from './EmployeeForm';
import { CardSection, Button, Confirmation } from './common/'
import Communications from 'react-native-communications'

class EmployeeEdit extends Component{
  constructor(props) {
    super(props);
    this.state = {
      confirmation: false
    }
  }

  componentWillMount = () => {
    const {employeeId} = this.props;
    this.props.findEmployee(employeeId);
  }

  edit = ( values ) => {
    const {employeeId} = this.props;
    this.props.updateEmployee(values,employeeId);
  }

  sendSMS = () => {
    const { phone, shift } = this.props.employee;
    Communications.text(`${phone}`, `Hey! you have an appointment on ${shift}`)
  }

  call = () => {
    const { phone } = this.props.employee;
    Communications.phonecall(`${phone}`,true)
  }

  fire = () => {
    this.setState({
      confirmation: true
    })

  }

  confirmFire = () => {
    this.setState({
      confirmation: false
    })
    const {employeeId} = this.props;
    this.props.fireEmployee(employeeId);
  }


  render() {
    const {employee} = this.props;
    const initialValues = {
      initialValues:employee
    }
    return(
      <EmployeeForm {...initialValues} onSubmit={this.edit.bind(this)}>
        <CardSection>
          <Button onPress={this.sendSMS.bind(this)}>
            Text Employee
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.call.bind(this)}>
            Call Employee
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.fire.bind(this)}>
            Fire!
          </Button>
        </CardSection>
        <Confirmation onAccept={this.confirmFire.bind(this)}
          onDecline={ () => this.setState({ confirmation: false })}
          visible={this.state.confirmation}>
          Are you sure ?
        </Confirmation>
      </EmployeeForm>

    )
  }
}
export default EmployeeEdit;
