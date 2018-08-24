import { NetInfo } from "react-native";

export const checkNetworkConnectivity = () =>
  new Promise((resolve, reject) => {
    NetInfo.isConnected.fetch().then(isConnected => {
      resolve(isConnected);
    });
  });

// Make sure You have following lines added

//<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
