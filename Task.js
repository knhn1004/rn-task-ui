import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperInner}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name={icon}
            size={30}
            style={{ color: theme }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.task}>
              {task.charAt(0).toUpperCase() + task.slice(1)}
            </Text>
            <Text style={styles.timestamp}>{stamp}</Text>
          </View>
        </View>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons
            name="pencil"
            size={30}
            style={{ color: theme }}
          />
          <MaterialCommunityIcons
            name="trash-can"
            size={30}
            style={{ color: theme }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 4,
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: '#f4f6fc',
  },
  wrapperInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  task: {
    fontSize: 16,
  },
  timestamp: {
    color: '#a4a4a4',
  },
  iconWrapper: {
    flexDirection: 'row',
  },
})

export default Task
