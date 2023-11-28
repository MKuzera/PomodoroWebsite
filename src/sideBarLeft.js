import React from 'react';
import { useState } from 'react';
import './sideBar.css';
import PomodoroList from './pomodoroList';
function SideBarLeft() {
    const [pomodorosHistory, setPomodoros] = useState([
        {description: 'Set description', date: 'enter date', counter: 0, id: 1}
    ])

    return (
        <PomodoroList pomodoros={pomodorosHistory} />
    );

}

export default SideBarLeft;