import {userRoutines} from './userRoutines'

export const userSetGroups = []

userRoutines.forEach(rt => userSetGroups.push(...rt.set_groups))

export const userExSets = []

userRoutines.forEach(rt => userExSets.push(...rt.exercise_sets))

export const exerciseExSets = {}
export const exerciseIdName = {}

userExSets.forEach(set => {
  // register the exercise
  if(!exerciseExSets[set.exercise._id]){
    exerciseExSets[set.exercise._id] = []
    exerciseIdName[set.exercise._id] = set.exercise.name
  }

  exerciseExSets[set.exercise._id].push(set)

})