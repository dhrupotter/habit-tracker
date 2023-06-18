import React, { useState } from "react";
import { habits } from "../../db/habits";
import Add from "../../components/AddHabit/add";

const Home = () => {
  const [mode, setMode] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [allHabits, setAllHabits] = useState(habits);

  const handleEditItemClick = (habit) => {
    setEditingItem(habit);
    setMode("EDIT");
  };

  const handleCloseMenu = () => {
    setMode(null);
    setEditingItem(null);
  };

  return (
    <>
      <button onClick={() => setMode("ADD")}>Add New Habit</button>
      {mode && (
        <Add
          allHabits={allHabits}
          habit={editingItem}
          setAllHabits={setAllHabits}
          mode={mode}
          handleCloseMenu={handleCloseMenu}
        />
      )}
      <section className="habits-section">
        <div className="habits-list">
          {allHabits.map((habit) => (
            <div>
              <h2>{habit.name}</h2>
              <h3>Goal: {habit.goal}</h3>
              <button onClick={() => handleEditItemClick(habit)}>Edit</button>
              <hr />
              <p></p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
