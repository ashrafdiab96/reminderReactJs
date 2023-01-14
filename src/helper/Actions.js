const handleDelete = (setDatesData) => {
    setDatesData([]);
};

const handleShow = (setDatesData, dates) => {
    setDatesData(dates);
};

export { handleDelete, handleShow };
