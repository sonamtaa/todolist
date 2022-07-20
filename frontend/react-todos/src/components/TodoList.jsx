import React, { useEffect, useState, useCallback } from 'react';
import { Tabs, Layout, Row, Col, message } from 'antd';
import './TodoList.css';
import TodoTab from './TodoTab';
import TodoForm from './TodoForm';
import { createTodo, deleteTodo, updateTodo, loadTodos } from "../services/todoService";
const { TabPane } = Tabs
const { Content } = Layout

const TodoList = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [todos, setTodos] = useState([]);
    const [activeTodos, setActiveTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const handleFormSubmit = (todo) => {
        console.log('Todo Created', todo);
        createTodo(todo).then(onRefresh());
        message.success('Todo Added!');
    }

    const handleRemoveTodo = (todo) => {
        deleteTodo(todo).then(onRefresh());
        message.warn('Todo Removed!');
    }

    const handleToggleTodoStatus = (todo) => {
        todo.completed = !todo.completed;
        updateTodo(todo).then(onRefresh());
        message.info('Todo Status Updated!');
    }

    const refresh = () => {
        loadTodos()
            .then(json => {
                setTodos(json);
                setActiveTodos((json.filter(todo => todo.completed === false)));
                setCompleteTodos((json.filter(todo => todo.completed === true)));
        }).then(console.log('fetched complete data'));
    }

    const onRefresh = useCallback( async () => {
        setRefreshing(true);
        let data = await loadTodos();
        setTodos(data);
        setActiveTodos(data.filter(todo => todo.completed === false));
        setCompleteTodos(data.filter(todo => todo.completed === true));
        setRefreshing(false);
        console.log('Refresh State', refreshing);
    }, [refreshing]);

    useEffect(() => {
        refresh();
    }, [onRefresh])

    return (
        <Layout className='layout'>
            <Content style={{ padding: '0 50px' }}>
                <div className='todolist'>
                    <Row>
                        <Col span={14} offset={5}>
                            <h1>Sonams Todos</h1>
                            <TodoForm onFormSubmit={handleFormSubmit} />
                            <br />
                            <Tabs defaultactivitykey='all'>
                                <TabPane tab='All' key='all'>
                                    <TodoTab todos={todos} onTodoToggle={handleToggleTodoStatus} onTodoRemoval={handleRemoveTodo} />
                                </TabPane>
                                <TabPane tab='Complete' key='complete'>
                                    <TodoTab todos={completeTodos} onTodoToggle={handleToggleTodoStatus} onTodoRemoval={handleRemoveTodo} />
                                </TabPane>
                                <TabPane tab='Active' key='active'>
                                    <TodoTab todos={activeTodos} onTodoToggle={handleToggleTodoStatus} onTodoRemoval={handleRemoveTodo} />
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </div>

            </Content>
        </Layout>
    )
}

export default TodoList;
