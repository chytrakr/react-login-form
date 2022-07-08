import React, {useState} from 'react';
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";
import "./styles.css"

export default function App(props) {
    const [fromDate, setFromDate] = useState(props.startDate ? props.startDate : new Date());
    const [toDate, setToDate] = useState(props.endDate ? props.endDate : new Date());
    const range = {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
      "Last 7 Days": [moment().subtract(6, "days"), moment()],
      "Last 30 Days": [moment().subtract(29, "days"), moment()],
      "This Month": [moment().startOf("month"), moment().endOf("month")],
      "Last Month": [
        moment()
          .subtract(1, "month")
          .startOf("month"),
        moment()
          .subtract(1, "month")
          .endOf("month")
      ],
      "Last Year": [
        moment()
          .subtract(1, "year")
          .startOf("year"),
        moment()
          .subtract(1, "year")
          .endOf("year")
      ]
    };

    function formatDate(date) {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
    }
  
    const handleEvent = (event, picker) => {
      setFromDate(picker.startDate._d);
      setToDate(picker.endDate._d);
    };
  
    return (
      <div className="App">
        <DateRangePicker
          ranges={range}
          alwaysShowCalendars={true}
          onApply={handleEvent}
          initialSettings={{startDate: fromDate, endDate: toDate, maxDate: props.maxDate ? props.maxDate : new Date()}}
          maxDate={props.maxDate ? props.maxDate : new Date()}
        >
          <button className="dateRangePicker">
            {moment(fromDate).format("DD-MM-YYYY")} to {moment(toDate).format("DD-MM-YYYY")}
          </button>
        </DateRangePicker>
      </div>
    );
  }
  