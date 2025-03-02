import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function LoggedInHome() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} 
      value={value}
      showNeighboringMonth={false} // Hide the days from the previous and next months
        />
    </div>
  );
}

export default LoggedInHome;