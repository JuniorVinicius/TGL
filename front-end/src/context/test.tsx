
import React, { createContext, useState } from 'react'


interface ChoosenType{
    chosenValue: any[],
    setChosenValue: any
}

export const ChosenNumbers = createContext({} as ChoosenType)

export const ChosenNumbersProvider: React.FC = ({ children }) =>{
   const [chosenValue, setChosenValue] = useState([])

  return (
    <ChosenNumbers.Provider
      value={{
        chosenValue,
        setChosenValue
      }}
    >
      {children}
    </ChosenNumbers.Provider>
  )
}