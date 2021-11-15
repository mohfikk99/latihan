import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import RootNavigation from './App/navigation/RootNavigation';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NetworkProvider } from 'react-native-offline';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <NetworkProvider>
      <ApolloProvider client={client}>

        <SafeAreaView style={styles.container}>
          <RootNavigation />
        </SafeAreaView>

      </ApolloProvider>
    </NetworkProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
});