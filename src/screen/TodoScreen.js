import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { IconButton } from 'react-native-paper';
import Fallback from '../components/Fallback';



console.log(Date.now().toString())

const TodoScreen = () => {
    //init local states
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    //handle Add Todo
    const handleAddTodo = () => {
        // sturtcure of a single todo item

        // {
        //     id:
        //     title:
        // }
        //if input field empty, give alert
        if(todo === '') {
            alert('Please Enter a Task')
            return
        }

        setTodoList([...todoList, { id: Date.now().toString(), title: todo }])
        setTodo('')
    }

    //Delete
    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id)

        setTodoList(updatedTodoList)

    }

    //Edit
    const handleEditTodo = (todo) => {

        setEditedTodo(todo)
        setTodo(todo.title)
    }

    //Update
    const handleUpdateTodo = () => {

        const updatedTodos = todoList.map((item) => {
            if(item.id === editedTodo.id){
                return {...item, title: todo}
            }

            return item

        })

        setTodoList(updatedTodos)
        setEditedTodo(null)
        setTodo('')
    }

    // Render todo
    const renderTodos = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: '#1e90ff',
                borderRadius: 6,
                paddingHorizontal: 6,
                paddingVertical: 8,
                marginBottom: 12,
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 5,
                // elevation: 400 for android
            }}>

                <Text
                    style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 800,
                        flex: 1
                    }}
                >{item.title}</Text>
                <IconButton icon={'pencil'}
                    iconColor='#fff'
                    onPress={() => handleEditTodo(item)}
                />
                <IconButton icon={'trash-can'}
                    iconColor='#fff'
                    onPress={() => handleDeleteTodo(item.id)}
                />
            </View>
        );
    };
    return (
        <View style={{ marginHorizontal: 16 }}>
            <TextInput
                style={{
                    borderWidth: 2,
                    borderColor: '#1e90ff',
                    borderRadius: 6,
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                }}
                placeholder='Add a task'
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />
            {
                editedTodo ? ( <TouchableOpacity
                    style={{
                        backgroundColor: '#000',
                        borderRadius: 6,
                        paddingVertical: 8,
                        marginVertical: 34,
                        alignItems: 'center'
                    }}
                    onPress={() => handleUpdateTodo()}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 20
                        }}>
                        Save
                    </Text>
                </TouchableOpacity> 
                ) : (
                    <TouchableOpacity
                    style={{
                        backgroundColor: '#000',
                        borderRadius: 6,
                        paddingVertical: 8,
                        marginVertical: 34,
                        alignItems: 'center'
                    }}
                    onPress={() => handleAddTodo()}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 20
                        }}>
                        Add
                    </Text>
                </TouchableOpacity>
                )

}


            {/*render todo list*/}

            <FlatList data={todoList} renderItem={renderTodos} />

            {todoList.length <= 0 && <Fallback />}
        </View>
    );
};

export default TodoScreen

const styles = StyleSheet.create({})