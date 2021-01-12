import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie,
} from 'victory-native';

const data = [
  {x: 'Cats', y: 35},
  {x: 'Dogs', y: 40},
  {x: 'Birds', y: 55},
];

export default function CardClickScreen({route}) {
  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryPie
            colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
            data={data}
          />
        </VictoryChart>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{route.params.title}</Text>
        </View>

        <View >
          <Text style={styles.description}>{route.params.subTitle}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },

  description: {
    textAlign: 'justify',

    marginTop: '5%',
    fontStyle: 'italic',
  },

  titleContainer: {
    padding: 4,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    marginBottom: '5%',
    padding: 20,
  },
});
