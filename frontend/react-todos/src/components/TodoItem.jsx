import React from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const Todo = ({ todo, onTodoRemoval, onTodoToggle }) => {

    return(
        <List.Item
            actions={[
                <Tooltip title={todo.completed ? "Mark as incomplete" : "Mark as complete"}>
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        onChange={() => onTodoToggle(todo)}
                        defaultChecked={todo.completed}
                    />
                </Tooltip>,
                <Popconfirm
                    title="Are you sure you want to delete this todo?"
                    onConfirm={() => {
                        onTodoRemoval(todo)
                    }}>
                    <Button className='remove-todo-button' type='primary' danger>
                        X
                    </Button>
                </Popconfirm>
            ]}
            className='todo-item'
            key={todo.id}
            >
            <div className='todo-item'>
                <Tag color={todo.completed ? 'green' : 'red'} className='todo-tag'>
                    {todo.title}
                </Tag>
            </div>
        </List.Item>
    )
}

export default Todo;
