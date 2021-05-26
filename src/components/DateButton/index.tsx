import { IonButton } from "@ionic/react";
import React from "react";
import "./DateButton.css";

interface DateButtonProps {
  onClick: () => void;
}

const DateButton = ({ onClick }: DateButtonProps) => {
  return (
    <IonButton className="availability-btn" shape="round" expand="block">
      Data Pretendida
    </IonButton>
  );
};

export default DateButton;
