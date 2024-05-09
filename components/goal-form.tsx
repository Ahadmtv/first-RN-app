import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import uuid from 'react-native-uuid';
import { IGoal } from '@/app'

//types is here
interface IProps {
    setToggleModal: Dispatch<SetStateAction<boolean>>
    toggleModal: boolean
    setGoals: Dispatch<SetStateAction<IGoal[]>>
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
}

const GoalForm: FC<IProps> = ({ toggleModal, setToggleModal, setGoals, inputValue, setInputValue }) => {
    const handlePress = () => {
        //do not run function when the input is empty
        if (!inputValue) return null
        const newItem = {
            goal: inputValue,
            id: uuid.v4().toString() //generated a uniqe id
        }
        setGoals((prevGoals) => [...prevGoals, newItem]);
        setInputValue("");
        setToggleModal(false);
    }
    const handleChangeText = (text: string) => {
        setInputValue(text)
    }
    return (
        <Modal visible={toggleModal} animationType={"slide"}>
            <View style={styles.container}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>Write your goals here</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChangeText}
                />
                <View style={styles.button}><Button color={"green"} title='Add Goal' onPress={handlePress} /></View>
                <View style={styles.button}><Button color={"red"} title='cancle' onPress={() => setToggleModal(false)} /></View>
            </View>
        </Modal>

    )
}

export default GoalForm

//styles comes here
const styles = StyleSheet.create({
    input: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        width: 250,
        height: 40,
        padding: 10
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 6
    },
    button: {
        borderRadius: 10,
        overflow: "hidden",
        width: 100
    }
})