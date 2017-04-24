import React, {Component} from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native'
import { CardSection } from './common'
import { Actions } from 'react-native-router-flux'

class EmployeeListItem extends Component{
  constructor(props) {
    super(props);
  }

  onRowPress = () => {
    Actions.employeeEdit( { employeeId: this.props.employee.id});
  }

  render() {
    const { name } = this.props.employee;
    const { titleStyle } = styles;

    return(
      <TouchableWithoutFeedback onPress={ this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10

  }
}
export default EmployeeListItem;
