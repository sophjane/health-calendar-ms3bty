import { IonToolbar, IonTitle } from "@ionic/react";

interface ToolbarProps {
  title: string;
}

const Toolbar = ({ title }: ToolbarProps) => {
  return (
    <IonToolbar className="ion-toolbar">
      <div className="toolbar">
        <img className="toolbar__logo" src="/favicon2.png" alt="Logo" />
        <IonTitle className="toolbar__title">{title}</IonTitle>
      </div>
    </IonToolbar>
  );
};

export default Toolbar;
