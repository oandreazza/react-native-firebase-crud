import React from 'react';
import {Input} from './Input'

const MailField = ({label, placeholder, value, onChangeText}) => {

  return(
    <Input
      label={label}
      placeholder={placeholder}
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
      keyboardType="email-address"
  />
  )
}

export {MailField};
