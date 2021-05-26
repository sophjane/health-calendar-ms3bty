import React from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface props {
    children: React.ReactNode;
}

const Analysis_ToDo: React.FC = (children) => {
    return <div>{children}</div>;
};

export default Analysis_ToDo;