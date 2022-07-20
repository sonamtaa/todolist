import React from 'react';
import { List } from "antd";
import TodoItem from './TodoItem';

const TodoTab = ({ todos, onTodoRemoval, onTodoToggle }) => {
    return (
        <>
            <List
                locale={{ emptyText: "There are no todos :(", }}
                dataSource={todos}
                renderItem={(todo) => (
                    <TodoItem
                        todo = { todo }
                        onTodoRemoval = { onTodoRemoval }
                        onTodoToggle = { onTodoToggle }
                    />
                )}
                pagination={{
                    position: 'bottom',
                    pageSize: 10
                }}
            />
        </>
    )
}

export default TodoTab;