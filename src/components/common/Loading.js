import React from 'react';
import { View, Text } from 'react-native'
import {Spinner} from './Spinner';
import {ModalApp} from './ModalApp';

const Loading = ({visible}) => {

  return(
    <ModalApp visible={visible}>
      <Spinner size="large" />
    </ModalApp>
  )

}

export {Loading};
