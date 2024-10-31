import React, { useEffect, useState } from 'react';
import closeBtn from '../assets/closeBtn.png';
import edit from '../assets/edit.png';
import save from '../assets/diskette.png';

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const updateLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      const newTasks = [...tasks, inputValue.trim()];
      setTasks(newTasks);
      updateLocalStorage(newTasks);
      setInputValue('');
      setEditIndex(null)
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    updateLocalStorage(newTasks);
    setEditIndex(null)
  };

  const handleSaveTask = () => {
    const newTasks = tasks.map((task, i) =>
      i === editIndex.index ? editIndex.value : task
    );
    setTasks(newTasks);
    updateLocalStorage(newTasks);
    setEditIndex(null);
  };

  return (
    <main className="container">
      <div className="content">
        <h1 className="title">Welcome</h1>
        <p className="sub-title">This todo app is for testing design.</p>
      </div>

      <div className="form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write text here..."
        />
        <button onClick={handleAddTask} aria-label="Add new task">
          + Add new
        </button>
      </div>

      <div id="list">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            {editIndex?.index === index ? (
              <>
              <p>
                <input
                  type="text"
                  value={editIndex.value}
                  onChange={(e) =>
                    setEditIndex({ index: index, value: e.target.value })
                  }
                  aria-label="Edit task"
                />
                <div style={{display: 'flex', gap: '4px', paddingLeft: '8px'}}>
                  <button onClick={handleSaveTask} aria-label="Save task">
                    <img src={save} alt="Save task" />
                  </button>
                  <button
                    onClick={() => setEditIndex(null)}
                    aria-label="Cancel edit"
                  >
                    <img src={closeBtn} alt="Cancel edit" />
                  </button>
                </div>
              </p>
              </>
            ) : (
              <>
              <p>
                <p>{task}</p>
                <div style={{display: 'flex', gap: '4px', paddingLeft: '8px'}}>
                  <button
                    onClick={() => handleRemoveTask(index)}
                    aria-label="Remove task"
                  >
                    <img src={closeBtn} alt="Remove task" />
                  </button>
                  <button
                    onClick={() => setEditIndex({ index: index, value: task })}
                    aria-label="Edit task"
                  >
                    <img src={edit} alt="Edit task" />
                  </button>
                </div>
              </p>
              </>
            )}
          </div>
        ))}
      </div>

      <div id="totalList">Total List: {tasks.length}</div>

      <button onClick={handleAddTask} id="add-new-task-mobile" aria-label="Add new task">
        + Add new
      </button>
    </main>
  );
};

export default Main;
