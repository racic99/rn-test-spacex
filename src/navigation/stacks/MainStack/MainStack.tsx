import LaunchDetails from "@/screens/LaunchDetails";
import LaunchList from "@/screens/LaunchList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

type PresentationOption = 
  "formSheet" | 
  "card" | 
  "modal" | 
  "transparentModal" | 
  "containedModal" | 
  "containedTransparentModal" | 
  "fullScreenModal" | 
  undefined;

type RouteMap = {
  name: string,
  component: ({}: any) => React.JSX.Element,
  options: {
    presentation: PresentationOption,
  },
}

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  const routeMap: RouteMap[] = [
    {
      name: 'LaunchList',
      component: LaunchList,
      options: {
        presentation: 'card',
      }
    },
    {
      name: 'LaunchDetails',
      component: LaunchDetails,
      options: {
        presentation: 'modal',
      }
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="LaunchList">
        <>
          {routeMap.map(selectedRoute => (
            <Stack.Screen
              key={selectedRoute.name}
              name={selectedRoute.name}
              component={selectedRoute.component}
              options={{
                headerTitle: 'SpaceX',
                presentation: selectedRoute.options.presentation,
              }}
            />
          ))}
        </>
      </Stack.Navigator>
    </View>
  );
}
 
export default MainStack;