import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { FC, memo } from "react";
import { Launch } from "@/services/launch/graphql";
import moment from "moment";
import navigatorUtil from "@/utils/navigator-util";

type LaunchCardProps = {
  launch: Launch;
}

const LaunchCard: FC<LaunchCardProps> = ({ launch }) => {
  const handleNavigateToLaunchDetails = () => {    
    navigatorUtil.navigate('LaunchDetails', { launchId: launch.id })
  }

  return (
    <TouchableOpacity onPress={handleNavigateToLaunchDetails} style={styles.container}>
      <Text style={styles.title}>{launch.mission_name}</Text>
      <Text style={styles.time}>{moment(launch.launch_date_utc).format('DD/MM/YYYY | HH:mm')}</Text>
      <Text style={styles.description} numberOfLines={3}>{launch.details || 'No description...'}</Text>
    </TouchableOpacity>
  );
}
 
export default memo(LaunchCard);