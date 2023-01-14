import { Container } from "react-bootstrap";
import { dates } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import { useState } from "react";
import { handleDelete, handleShow } from "./helper/Actions";

const App = () => {
    const [datesData, setDatesData] = useState(dates);

    return (
        <div className="font color-body">
            <Container className="py-5">
                <DatesCount count={datesData.length} />
                <DatesList dates={datesData} />
                <DatesAction
                    onDelete={() => handleDelete(setDatesData)}
                    onShow={() => handleShow(setDatesData, dates)}
                />
            </Container>
        </div>
    );
}

export default App;
