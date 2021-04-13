import React from "react";
import './Rate.sass';

const Rate = props => {
    return (
        <div className="col-3">
            <div className="card currency">
                <div className="card-body currency__body">

                    <div className="currency__details">
                        <h5 className="card-title currency__title">{props.currency.cc}</h5>
                        <span className="currency__value">{props.currency.rate.toFixed(2)} &#8372;</span>
                    </div>
                </div>
            </div>
            {/*./card*/}
        </div>
    );


}

export default Rate;
