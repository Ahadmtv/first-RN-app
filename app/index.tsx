import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import GoalForm from '@/components/goal-form'
import GoalList from '@/components/goal-list'

export interface IGoal {
    goal: string,
    id: string
}
const index = () => {
    const [toggleModal, setToggleModal] = useState<boolean>(false);
    const [goals, setGoals] = useState<IGoal[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    return (
        <View style={styles.container}>
            <GoalForm setToggleModal={setToggleModal} toggleModal={toggleModal} setGoals={setGoals} setInputValue={setInputValue} inputValue={inputValue} />
            <GoalList setToggleModal={setToggleModal} toggleModal={toggleModal} goals={goals} setGoals={setGoals} />
        </View>
    )
}

export default index

//styles comes here
const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
})