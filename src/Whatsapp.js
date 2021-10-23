/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";

const INJECTEDJAVASCRIPT =
  "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";

const App = () => {
  const webViewRef = useRef();
  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={ref => (webViewRef.current = ref)}
        userAgent="Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:90.0) Gecko/20100101 Firefox/90.0"
        contentMode="desktop"
        source={{
          uri: "https://www.whatsapp.com"
        }}
        injectedJavaScript={INJECTEDJAVASCRIPT}
      />
      <TouchableOpacity
        onPress={() => webViewRef.current.reload()}
        style={{
          backgroundColor: "rgb(141, 171, 203)",
          height: 40,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>
          Tap to restart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
