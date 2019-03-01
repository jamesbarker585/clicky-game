import React from "react";
import "./AircraftCard.css";

const AircraftCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectAircraft(props.jet)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.jet} src={props.image} />
            </a>
        </div>
    </div>
);

export default AircraftCard;
