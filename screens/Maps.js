import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker } from 'react-native-maps';

const InteractionDetailsView = () => {
  
  const _map = React.useRef(null);

  const onRegionChangeComplete = () => {
    if(_map?.current)
    _map.current.animateCamera(
      {
        center: {
          latitude: 37.7510,
          longitude: -97.8220
        }
      },
      0
    );
    console.log('region change completed')
  }

  return (
    <View style={styles.greenContainer}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            ref={_map}
            provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
            showsUserLocation={false}
            onRegionChangeComplete={onRegionChangeComplete}
            
            region={{
              latitude: 37.7510,
              longitude: -97.8220,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }} >
            <Marker
              tracksViewChanges={false}
              coordinate={{
                latitude: 37.7510,
                longitude: -97.8220,
              }}
            />
          </MapView>
        </View>
          
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  greenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 15,
  },
  headerIcon: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  interactionTitle: {
    fontSize: 12,
    color: 'rgb(138, 138 ,142)',
  },
  font18: {
    fontSize: 15,
    lineHeight: 24
  },
  titleDetails: {
    marginTop: 15,
    color: 'rgb(100,117,101)',
  },
  status: {
    fontSize: 12,
    color: 'rgb(100,117,101)',
  },
  divider: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#e8ecf0',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  mapPointer: {
    height: 40,
    width: 40,
    flex: 1,
    resizeMode: 'contain',
  },
  mapContainer: {
    flex: 1,
    height: 200,
  },
})

export default (InteractionDetailsView);