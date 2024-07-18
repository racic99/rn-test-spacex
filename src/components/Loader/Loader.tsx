import React, { FC, memo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

type LoaderProps = {
  loading: boolean;
  fullHeight?: boolean;
};

const Loader: FC<LoaderProps> = ({ loading, fullHeight }) => {
  if (loading) {
    return (
      <View style={fullHeight ? styles.containerFullHeight : styles.containerSmall}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
};

export default memo(Loader);
