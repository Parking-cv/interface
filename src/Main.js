import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import colors from '../assets/colors.json';
import wkuLogo from '../assets/wku.jpg';

const serverUrl = 'http://127.0.0.1:4321/api/';
const lotId = 'lot';

export default class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      count: undefined,
      history: undefined,
      error: false,
      debug: false
    };

    this._fetchCurrentCount(lotId);
  }

  _fetchCurrentCount(lotId) {
    fetch(serverUrl + 'count/' + lotId)
      .then(data => data.json())
      .then(json => this.setState({ count: json.count.toString() }))
      .catch(err => this.setState({ error: err }));
  }

  _fetchHistoricalData(lotId) {
    fetch(serverUrl + 'events/' + lotId)
      .then(data => data.json())
      .then(json => this.setState({ history: json.toString() }))
      .catch(err => this.setState({ error: err }));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBanner}>
          <Image source={wkuLogo} style={styles.logo} />
        </View>
        <View style={[styles.errorContainer, (this.state.error ? styles.showError : styles.hideError)]}>
          <Text style={styles.errorText}>
            Sorry, an error occurred. Please try again later.
          </Text>
        </View>
        <View style={styles.currentCountContainer}>
          <TouchableOpacity onPress={() => this._fetchCurrentCount(lotId)}>
            <Text>
              Refresh count
            </Text>
          </TouchableOpacity>
          <Text>
            { this.state.count }
          </Text>
        </View>
        <View style={styles.historicalCountContainer}>
          <TouchableOpacity onPress={() => this._fetchHistoricalData(lotId)}>
            <Text>
              View Historical Data
            </Text>
          </TouchableOpacity>
          <Text>
            { this.state.historicalData }
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end'
  },

  topBanner: {
    width: '100%',
    backgroundColor: colors["wku-primary"],
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logo: {
    height: '100%',
    aspectRatio: 1/1
  },

  errorContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    padding: 15,
    color: 'white',
    width: '90%',
    borderRadius: 15,
    alignSelf: 'center',
    bottom: 15
  },
  showError: {
    display: 'flex'
  },
  hideError: {
    display: 'none',
  },
  errorText: {
    color: 'white',
    fontWeight: '700'
  },

  currentCountContainer: {
    flex: 4
  },

  historicalCountContainer: {
    flex: 4
  }
});
