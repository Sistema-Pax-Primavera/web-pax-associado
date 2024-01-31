import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const DateMaskInput = () => {
  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <InputMask
        mask="99/99/9999"
        maskPlaceholder={null}
        id="date"
        type="text"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateMaskInput;
