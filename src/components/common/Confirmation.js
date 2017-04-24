import React from 'react';
import {ModalApp} from './ModalApp';
import { Text } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


const Confirmation = ({visible, children, onAccept, onDecline}) => {

  return(
    <ModalApp visible={visible}>
      <CardSection>
          <Text style={styles.warningMessage}>
            {children}
          </Text>
      </CardSection>
      <CardSection>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardSection>
    </ModalApp>
  )

}

const styles = {
  warningMessage: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    lineHeight: 40
  }
}
export {Confirmation};
