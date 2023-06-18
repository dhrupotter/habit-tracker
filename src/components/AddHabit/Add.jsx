import React, { useState } from "react";

const Add = ({ setAllHabits, mode, allHabits, habit, handleCloseMenu }) => {
  const [habitName, setHabitName] = useState(habit?.name || "");
  const [goal, setGoal] = useState(habit?.goal || "");
  const [startDate, setStartDate] = useState(habit?.startDate || new Date());

  const handleUpdateHabitName = (e) => {
    setHabitName(e.target.value);
  };

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleUpdateGoal = (e) => {
    setGoal(e.target.value);
  };

  const handleSubmit = () => {
    if (mode === "ADD") {
      setAllHabits((prev) => [...prev, { name: habitName, startDate, goal }]);
    } else if (mode === "EDIT") {
      const updatedHabits = allHabits.map((currHabit) => {
        if (currHabit.name === habit.name) {
          return { ...currHabit, name: habitName, startDate, goal };
        }
        return currHabit;
      });
      setAllHabits(updatedHabits);
    }
    handleCloseMenu();
  };
  return (
    <div>
      <div>
        Habit Name
        <input onChange={handleUpdateHabitName} value={habitName} />
      </div>
      <div>
        Set start date
        <input type="date" onChange={handleStartDate} value={startDate} />
      </div>
      <div>
        Set goal
        <input onChange={handleUpdateGoal} value={goal} />
      </div>
      <button onClick={handleSubmit}>
        {mode === "EDIT" ? "Edit" : "Submit"}
      </button>
    </div>
  );
};

export default Add;
