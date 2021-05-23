import { IonButton } from "@ionic/react";
import React from "react";
import "./ThickButton.css";

interface ThickButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ThickButton = ({ children, onClick }: ThickButtonProps) => {
  return (
    <IonButton
      className="thick-btn"
      shape="round"
      size="large"
      onClick={onClick}
    >
      {children}
    </IonButton>
  );
};

export default ThickButton;
