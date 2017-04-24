import React, {Component} from 'react';
import { View, Text, ListView } from 'react-native';
import EmployeeListItem from './EmployeeListItem';
import { Loading }  from './common';

class EmployeeList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading
    }
  }

  componentWillMount = () => {
    this.props.fecthEmployees();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps = (nextProps) => {
    this.createDataSource(nextProps)
    this.setState({ loading: nextProps.loading})
  }

  createDataSource = ( {employees} ) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow = (employee) => {
    return(
      <EmployeeListItem employee={employee} />
    )
  }

  render() {
    return(
      <View>
        <Loading visible={this.state.loading} />
        <ListView
            enableEmptySection
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
      </View>
    )
  }
}
export default EmployeeList;
