import { CommonActions, StackActions, createNavigationContainerRef } from "@react-navigation/native";

const navigationRef = createNavigationContainerRef();

const navigate = (name: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(name, params));
  }
};

const push = (name: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
};

const pop = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop());
  }
};

const popToTop = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

const replace = (name: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
};

export default {
  navigationRef,
  navigate,
  push,
  pop,
  popToTop,
  replace
};