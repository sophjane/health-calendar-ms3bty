import { IonButton } from "@ionic/react";
import React from "react";
import "./DateButton.css";

interface DateButtonProps {
  onClick: (arg0:boolean) => void,
  isDisplayed:boolean
}

const DateButton = ({ onClick, isDisplayed }: DateButtonProps) => {
  return (
    <IonButton className="availability-btn" shape="round" expand="block" onClick={()=> {onClick(true); console.log(onClick(true))}}>
      Data Pretendida
    </IonButton>
  );
};

export default DateButton;
