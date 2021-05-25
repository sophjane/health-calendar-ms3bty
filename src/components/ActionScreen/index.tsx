import { IonAlert, IonButton } from "@ionic/react";
import React, { useState } from "react";
import "./ActionScreen.css";

interface ActionScreenProps {
  children: React.ReactNode;
  alertHeader: string;
  alertMessage: string;
}

const ActionScreen = ({
  children,
  alertHeader,
  alertMessage,
}: ActionScreenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main">
      <div className="help-container">
        <IonButton
          className="help-container__btn"
          shape="round"
          size="large"
          onClick={() => setIsOpen(true)}
        >
          ?
        </IonButton>
        <IonAlert
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
          cssClass="help-alert"
          header={alertHeader}
          message={alertMessage}
          buttons={["OK"]}
        />
      </div>
      <div className="main__buttons">{children}</div>
    </div>
  );
};

export default ActionScreen;
