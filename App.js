import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import Task from './Task'

const colors = {
  themeColor: '#4263ec',
  white: '#fff',
  background: '#f4f6fc',
  greyish: '#a4a4a4',
  tint: '#2b49c3',
}

const tasks = [
  {
    task: 'morning walk',
    icon: 'hiking',
    theme: '#008b8b',
    stamp: 'Today . 8pm',
  },
  {
    task: 'meet with HR',
    icon: 'account-tie',
    theme: '#37003c',
    stamp: 'Today . 12 noon',
  },
  {
    task: 'shopping with family',
    icon: 'cart',
    theme: '#fed132',
    stamp: 'Tomorrow . 3pm',
  },
  {
    task: 'time for gym',
    icon: 'weight',
    theme: '#008b8b',
    stamp: 'Saturday . 4pm',
  },
]

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.row}>
          <MaterialCommunityIcons name="text" style={styles.icon} />
          <View style={styles.row}>
            <MaterialCommunityIcons name="bell-outline" style={styles.icon} />
            <AntDesign name="user" style={styles.icon} />
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.text}>{'Hello,\nOliver'}</Text>
          <View style={styles.searchBar}>
            <MaterialCommunityIcons name="magnify" style={styles.icon} />
            <View style={styles.row}>
              <MaterialCommunityIcons name="microphone" style={styles.icon} />
              <MaterialCommunityIcons name="tune" style={styles.icon} />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View
        style={{
          ...styles.row,
          ...styles.addBar,
          padding: 20,
          justifyContent: 'space-between',
	  borderTopLeftRadius: 20,
	  borderTopRightRadius: 20,
        }}
      >
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.roundIconWrapper}>
          <MaterialCommunityIcons name="plus" style={styles.addIcon} />
        </View>
      </View>
      <FlatList
        style={styles.taskList}
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={item => item.task}
        renderItem={({ item }) => <Task {...item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
  row: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  col: {
    padding: 16,
  },
  icon: {
    fontSize: 30,
    color: colors.white,
  },
  text: {
    color: colors.white,
    fontSize: 30,
  },
  searchBar: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.tint,
    borderRadius: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  addBar: {
    backgroundColor: colors.white,
    color: colors.themeColor,
  },
  addIcon: {
    fontSize: 40,
    color: colors.themeColor,
  },
  roundIconWrapper: {
    backgroundColor: colors.background,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    marginHorizontal: 12,
  },
  taskList: {
    backgroundColor: colors.white,
    flex: 1,
  },
})

export default App
