import React from 'react';
import {Modal, View} from 'react-native'


const ModalApp = ({children, visible}) => {
    return(

        <Modal
          visible={visible}
          transparent
          animationType="slide"
          onRequestClose={ () => {}}
          >
            <View style={styles.containerStyle}>
              {children}
            </View>
        </Modal>

    )
}

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}


export {ModalApp};
