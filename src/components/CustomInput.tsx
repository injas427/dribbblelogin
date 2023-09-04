import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const CustomInput = ({placeholder = '', label = '', subText = ''}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {!!subText && (
          <TouchableOpacity>
            <Text style={styles.subText}>{subText}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={[
          styles.inputContainer,
          isFocused ? styles.focused : styles.blur,
        ]}>
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
  },
  inputContainer: {
    borderRadius: 10,
    borderWidth: 2,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  subText: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  blur: {
    borderColor: 'lightgray',
  },
  focused: {
    borderColor: 'pink',
  },
});
