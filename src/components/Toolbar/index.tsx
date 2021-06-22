import { IonToolbar, IonTitle, IonBackButton } from "@ionic/react";
import "./Toolbar.css";

interface ToolbarProps {
  title: string;
  variant?: "logo" | "back";
}

const Toolbar = ({ title, variant }: ToolbarProps) => {
  console.log(variant==="back")
  return (
    <IonToolbar className="ion-toolbar">
      <div className="toolbar">
        {variant === "logo" && (
          <img className="toolbar__logo" src="/favicon2.png" alt="Logo" />
        )}
        {variant === "back" && <IonBackButton className="toolbar__back-btn" />}
        <IonTitle className="toolbar__title">{title}</IonTitle>
      </div>
    </IonToolbar>
  );
};

export default Toolbar;
