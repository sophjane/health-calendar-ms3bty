import {
  IonList,
  IonCol,
  IonItem,
  IonRow,
  IonText,
  IonGrid,
} from "@ionic/react";
import React, { useState } from "react";
import "./AnalysisToDo.css";

interface AnalysisProps {
  type: string;
}

const List: React.FC<AnalysisProps> = ({ type }) => {
  const [color, setColor] = React.useState("unread");
  console.log(color);

  const [states, setStatesArray] = useState([
    "unread",
    "unread",
    "read",
    "read",
  ]);
  var analysis = [{ exam: "", speciality: "", date: "", class: "" }];
  const todo = [
    {
      exam: "Sangue e Urina",
      speciality: "Diabetes",
      date: "02/05/2021",
      class: states[0],
    },
    {
      exam: "Fezes",
      speciality: "Infeção intestinal",
      date: "01/04/2021",
      class: states[1],
    },
    {
      exam: "Sangue",
      speciality: "Colesterol",
      date: "02/01/2021",
      class: states[2],
    },
    {
      exam: "Urina",
      speciality: "Gravidez",
      date: "15/10/2020",
      class: states[3],
    },
  ]; /*analysis_todo = { exam , especiality , emission date} */

  const results = [
    {
      exam: "Sangue",
      speciality: "Colesterol",
      date: "20/05/2021",
      class: states[0],
    },
    {
      exam: "Urina e Fezes",
      speciality: "Infeção Urulógica",
      date: "30/04/2021",
      class: states[1],
    },
    {
      exam: "Sangue e Fezes",
      speciality: "Infeção Intestinal",
      date: "15/01/2021",
      class: states[2],
    },
    {
      exam: "Urina",
      speciality: "Gravidez",
      date: "03/11/2020",
      class: states[3],
    },
  ]; /*analysis_results = { exam , especiality , emission date} */

  const onCount = () => {
    if (count > -1) setCount(--count);
    console.log(count);
  };

  if (type === "todo") {
    analysis = todo;
  } else if (type == "results") {
    analysis = results;
  }
  var [count, setCount] = React.useState(2);
  const setRead = (index: number, state: string) => {
    if (state == "unread") {
      onCount();
    }
    var tempArray = states;
    tempArray[index] = "read";
    setStatesArray(tempArray);
    console.log(analysis);
  };

  return (
    <IonGrid>
        <IonList>
            <IonText>
                <div  className = "unread-header"><strong>{count} Não Lidas</strong></div>
                <hr className="hr-color"></hr>
            </IonText>
            {analysis.map((e, index) => (
                <IonItem  >
                    <div className={e.class} key={index}  >
                        <IonRow onClick={() => {setRead(index, e.class)}}>
                            <IonCol>
                                <h5>{e.exam}</h5>
                                <p className="speciality">{e.speciality}</p>
                            </IonCol>
                            <IonCol>
                                <h6 className="date">{e.date}</h6>
                            </IonCol>
                        </IonRow>
                    </div>
                </IonItem>
            ))}
        </IonList>
    </IonGrid>
  );
};

export default List;
