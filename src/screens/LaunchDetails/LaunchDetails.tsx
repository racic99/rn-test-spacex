import { ScreenNavigationProp } from "@/navigation/stacks/types";
import { GET_LAUNCH_DETAILS } from "@/services/launch/graphql";
import { useQuery } from "@apollo/client";
import { RouteProp } from "@react-navigation/native";
import { Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Loader from "@/components/Loader";
import moment from "moment";
import LaunchDetailsSection from "@/components/LaunchDetailsSection/LaunchDetailsSection";

type LaunchDetailsProps = {
  route?: RouteProp<{ params: { launchId: string } }, 'params'>;
  navigation?: ScreenNavigationProp;
};

const LaunchDetails = ({ route }: LaunchDetailsProps) => {
  const launchId = route?.params?.launchId;

  const { loading, error, data } = useQuery(GET_LAUNCH_DETAILS, {
    variables: { id: launchId },
    skip: !launchId,
  });

  const openExternalLink = (url: string) => {
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url)
    });
  };

  if (error) {
    return <Text>{error.message}</Text>
  }

  if (loading) {
    return <Loader loading={loading} fullHeight />
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      {data && (
        <>
          <Text style={styles.title}>{data.launch.mission_name}</Text>
          <Text style={styles.time}>{moment(data.launch.launch_date_utc).format('DD/MM/YYYY | HH:mm')}</Text>
          <LaunchDetailsSection label='Launch Site' text={data.launch.launch_site?.site_name || 'Unknown'} />
          <LaunchDetailsSection label='Rocket' text={data.launch.rocket?.rocket_name || 'Unknown'} />
          <LaunchDetailsSection label='Rocket Type' text={data.launch.rocket?.rocket_type || 'Unknown'} />
          <LaunchDetailsSection label='Description' text={data.launch.details || 'No Description'} />
          {data.launch.links?.article_link ? (
            <TouchableOpacity 
              style={styles.linkButton} 
              onPress={() => openExternalLink(data.launch.links.article_link)}
            >
              <Text style={styles.linkButtonText}>Read More</Text>
            </TouchableOpacity>
          ) : null}
          {data.launch.links?.video_link ? (
            <TouchableOpacity 
              style={styles.linkButton} 
              onPress={() => openExternalLink(data.launch.links.video_link)}
            >
              <Text style={styles.linkButtonText}>Watch Video</Text>
            </TouchableOpacity>
          ) : null}
        </>
      )}
    </ScrollView>
  );
}
 
export default LaunchDetails;