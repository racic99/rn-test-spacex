import React, { FC, memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';
import { RocketOption } from '@/screens/LaunchList/LaunchList';

type LaunchFilterModalProps = {
  isVisible: boolean;
  closeModal: () => void;
  selectedOption: RocketOption;
  options: RocketOption[];
  selectOption: (rocketFilterOption: RocketOption) => void;
};

const LaunchFilterModal: FC<LaunchFilterModalProps> = ({
  isVisible,
  closeModal,
  options,
  selectOption,
  selectedOption
}) => {  
  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={closeModal}
      isVisible={isVisible}
      onBackButtonPress={closeModal}
    >
      <View style={styles.modalContainer}>
        {options.map(option => (
          <TouchableOpacity 
            key={option.label} 
            onPress={() => selectOption(option)}
            style={styles.selectItem}
          >
            <View style={styles.selectItemCircle}>
              {option.label === selectedOption.label ? <View style={styles.selectItemFilledCircle} /> : null}
            </View>
            <Text style={styles.selectItemText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

export default memo(LaunchFilterModal);
