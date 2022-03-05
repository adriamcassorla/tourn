import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';

import RouteRangeContext from './../Context/routeSetUp';

import * as col from './../Styles/Colours';

// Creates a squared button, with a given image, onPress callback, and a tag.
// The tag is a string that will be passed to the callback.

const TagButton = ({ img, onPress, tag }) => {
  const { preferences } = useContext(RouteRangeContext);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        preferences.filters.includes(tag) ? styles.selected : styles.unSelected,
      ]}
      onPress={() => onPress(tag)}
    >
      <Image source={img} style={styles.img} resizeMode={'contain'} />
    </TouchableOpacity>
  );
};

export default TagButton;

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: 110,
    backgroundColor: col.accentLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
    margin: 10,
  },
  selected: {
    backgroundColor: col.interactiveLight,
    opacity: 0.9,
  },
  unSelected: {
    backgroundColor: col.accentLight,
  },
  img: {
    height: '85%',
    width: '85%',
  },
});