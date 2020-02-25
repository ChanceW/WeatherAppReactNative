import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function WeatherReport({ report }) {
    let count = 0;
    const items = () => {
      var rows = [];
      rows.push(<View key={count++} style={styles.row} >
          <View style={styles.headerCell} >
          <Image style={{width: 50, height: 50}} source={{uri: report.icon}} />
            <View><Text>{report.City}</Text></View>
            <View><Text>{report.Condition}</Text></View>
          </View>
      </View>);

      for(var prop in report){
        if(["icon","Condition","City"].includes(prop))
        {
          continue;
        }
        const row = <View key={count++} style={styles.row} >
            <View style={styles.cell} ><Text>{prop}</Text></View>
            <View style={styles.cell} ><Text>{report[prop]}</Text></View>
          </View>;
        rows.push(row);
      }
      return rows;
    };

  return <View style={styles.table}>{items()}</View>;
  }

  const styles = StyleSheet.create({
    table:{
      marginTop:20,
      borderRadius: 4,
      borderWidth: 3,
      borderColor: 'blue',
    },
    row: {
      flexDirection: 'row',
      margin:2
    },
    headerCell: {
      flex: 2,
      flexDirection: "column",
      backgroundColor: "skyblue",
      height:"auto",
      marginRight:2,
      alignItems: "center",
      justifyContent: "center"
    },
    cell: {
      flexDirection: "column",
      backgroundColor: "skyblue",
      width:200,
      height:50,
      marginRight:2,
      alignItems: "center",
      justifyContent: "center"
    }
  });