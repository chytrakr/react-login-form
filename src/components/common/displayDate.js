import React from 'react';

function DisplayDate(props) {
  const { date, type } = props;
  let d = (date)? new Date(Date.parse(date)): new Date();
  if(type === 'datetime') {
    d = d.toLocaleString()
  } else {
    d = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  }
  return (
    <span>{d}</span>
  );
}

export default DisplayDate;
