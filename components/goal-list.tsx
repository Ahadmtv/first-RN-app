import { Button, Pressable, StyleSheet, View, Text, ScrollView } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { IGoal } from '@/app';

//types is here
interface IPrpos {
    setToggleModal: Dispatch<SetStateAction<boolean>>;
    toggleModal: boolean
    goals: IGoal[]
    setGoals: Dispatch<SetStateAction<IGoal[]>>
}
const GoalList: FC<IPrpos> = ({ setToggleModal, toggleModal, goals, setGoals }) => {
    //delete goal
    const handleDelete = (id: string) => {
        const filteredGoals = goals.filter((item) => item.id !== id);
        setGoals(filteredGoals);
    }
    return (
        <View style={{ padding: 4, gap: 6, height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 18, fontWeight: 700, maxWidth: "80%" }}>Press the Start button to start a new adventure</Text>
            <View style={styles.startButton}>
                <Button title='start' onPress={() => setToggleModal(!toggleModal)} />
            </View>
            <Text style={{ textAlign: "center", fontSize: 18, fontWeight: 700, marginTop: 40 }}>Your Goals</Text>
            <Text style={{ textAlign: "center" }}>(tap on goal to delete)</Text>
            <ScrollView style={{ width: "100%" }} >
                {goals.map((item) => {
                    return (
                        <Pressable key={Math.random()} style={styles.pressable} onPress={handleDelete.bind(this, item.id)}>
                            <Text style={styles.pressableText}>{item.goal}</Text>
                        </Pressable>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default GoalList

//style comes here
const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        width: "100%",
        borderRadius: 10,
        marginTop: 3
    },
    pressableText: {
        color: "white",
    },
    startButton: {
        width: 120,
        alignSelf: "center",
        borderRadius: 10,
        overflow: "hidden"
    }
})