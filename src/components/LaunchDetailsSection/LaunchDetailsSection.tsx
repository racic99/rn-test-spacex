import { Text, View } from "react-native";
import styles from "./styles";
import { FC, memo } from "react";

type LaunchDetailsSectionProps = {
  label: string;
  text: string;
}

const LaunchDetailsSection: FC<LaunchDetailsSectionProps> = ({ label, text }) => {
  return (
    <View style={styles.sectionContainer}>
    <Text style={styles.sectionLabel}>{label}</Text>
    <View style={styles.sectionSeparator} />
    <Text style={styles.sectionText}>{text}</Text>
  </View>
  );
}
 
export default memo(LaunchDetailsSection);