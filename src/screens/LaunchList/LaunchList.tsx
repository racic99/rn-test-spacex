import { GET_LAUNCHES } from "@/services/launch/graphql";
import { useQuery } from "@apollo/client";
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LaunchCard from "@/components/LaunchCard";
import Loader from "@/components/Loader";
import LaunchFilterModal from "@/components/LaunchFilterModal";
import { useState } from "react";
import useToggle from "@/hooks/useToggle";
import Icon from 'react-native-vector-icons/Entypo'

export type RocketOption = {
  label: string;
};

const defaultRocketFilterOption: RocketOption = { label: 'All Launches' };

const LaunchList = () => {
  const insets = useSafeAreaInsets();
  const { value: isLaunchFilterModalOpen, toggle: toggleLaunchFilterModal } = useToggle();
  const [selectedRocketFilterOption, setSelectedRocketFilterOption] = useState(defaultRocketFilterOption);
  const { loading, error, data, refetch } = useQuery(GET_LAUNCHES);

  // Filter all unique rocket names
  const rocketFilterOptions = [
    ...new Set(data?.launches.map(launch =>  launch.rocket.rocket_name )),
  ];

  // Combine rocket names with default 'All Launches' option that displays all launches
  const allFilterOptions = [defaultRocketFilterOption, ...rocketFilterOptions.map(option => ({ label: option }))]

  const handleSelectRocketFilterOption = (rocketFilterOption: RocketOption) => {
    setSelectedRocketFilterOption(rocketFilterOption);
    toggleLaunchFilterModal();
  }

  const renderListHeaderComponent = () => {
    return (
      <View>
        <Text style={styles.title}>Launch List</Text>
        <TouchableOpacity onPress={toggleLaunchFilterModal} style={styles.rocketFilterSelectButton}>
          <Text style={styles.rocketFilterSelectButtonText}>{selectedRocketFilterOption.label}</Text>
          <Icon 
            name="chevron-small-down"
            size={36}
          />
        </TouchableOpacity>
      </View>
    );
  }

  const renderEmptyListComponent = () => {
    if (!error && loading) {
      return null;
    }
    if (!error && !loading) {
      return (
        <Text style={styles.emptyListText}>No Launches Available</Text>
      );
    }
    if (error && !loading) {
      return (
        <Text style={styles.errorText}>{error.message}</Text>
      )
    }
  }

  const flatListData = selectedRocketFilterOption.label === 'All Launches' ? 
    data?.launches || [] : 
    (data?.launches || []).filter((launch) => launch.rocket.rocket_name === selectedRocketFilterOption.label);
  
  return (
    <>
      <LaunchFilterModal 
        isVisible={isLaunchFilterModalOpen} 
        selectedOption={selectedRocketFilterOption}
        options={allFilterOptions}
        closeModal={toggleLaunchFilterModal}
        selectOption={handleSelectRocketFilterOption}
      />
      <FlatList
        data={flatListData}
        renderItem={({ item }) => (
          <LaunchCard key={item.id} launch={item} />
        )}
        refreshing={loading}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refetch}
          />
        }
        contentContainerStyle={[styles.container, { paddingBottom: insets.bottom + 16 }]}
        ListHeaderComponent={renderListHeaderComponent}
        ListEmptyComponent={renderEmptyListComponent}
        ListFooterComponent={<Loader loading={loading} />}
      />
    </>
  );
}
 
export default LaunchList;