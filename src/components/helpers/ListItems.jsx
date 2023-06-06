import React from "react";
import "./helpers.css";
import { CheckCircle } from "react-bootstrap-icons";
export default function ListItems({ lists, icon }) {

  return (
    <ul className="list">
      {lists?.map((item, index) => (
        <li key={index} color="primary" className="li-item">
         {item.icon ? item.icon :<CheckCircle />} 
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
