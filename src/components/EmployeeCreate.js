import React, {Component} from 'react';
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component{
  constructor(props) {
    super(props);
  }

  save = (values) => {
    this.props.save(values);
  }

  render() {
    const initialValues = {
      initialValues: {}
    }
    return(
      <EmployeeForm {...initialValues} onSubmit={this.save.bind(this)} />
    )
  }
}
export default EmployeeCreate;
