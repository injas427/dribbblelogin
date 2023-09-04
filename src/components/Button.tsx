import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Button = ({
  label = '',
  icon = false,
  variant = 'default',
}: {
  label: string;
  icon?: boolean;
  variant?: 'default' | 'inverted';
}) => {
  return (
    <TouchableOpacity
      style={[style.buttonContainer, variant === 'inverted' && style.inverted]}>
      {icon && <View style={style.icon} />}
      <Text
        style={[
          style.buttonLabel,
          variant === 'inverted' && style.invertedLabel,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    borderColor: 'lightgray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  buttonLabel: {
    color: 'black',
    fontWeight: '500',
    marginLeft: 10,
  },
  inverted: {
    backgroundColor: 'black',
  },
  invertedLabel: {
    color: 'white',
  },
});
