import React from "react";
import './Calculator.sass';


export default class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            value: 1
        }
    }

    static getDerivedStateFromProps(props, state){
        return {rate: props.rate}
    }


    handleCurrencyCalc = event => {
        this.setState({value: event.target.value});
    }

    /*Calculator Logic*/
    calcRate = event => {
        event.preventDefault();

        const countCurrency = this.state.value;
        const typeCurrency = event.target.elements['type-currency'].value;

        const currencyRate = this.state.rate.filter(val => {
           return val.cc === typeCurrency;
        });

        const result = countCurrency * Number(currencyRate[0].rate);
        this.setState({result: result});

        //Если требуется сразу очищать поле ввода
        //this.setState({result: result, value: 0});
    }

    render() {
        return (
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="calc">

                        <form className="calc-form" onSubmit={this.calcRate}>
                            <div className="form-group calc-form__group">
                                <label htmlFor="currency-buy" className="calc-form__label">Купить</label>
                                <input
                                    type="number"
                                    step='any'
                                    className="form-control calc-form__control"
                                    id="currency-buy"
                                    name="currency-buy"
                                    placeholder="Введите сумму..."
                                    value={this.state.value}
                                    onChange={this.handleCurrencyCalc}
                                />
                            </div>

                            <div className="input-group calc-form__group calc-form__select">
                                <select className="custom-select" name="type-currency">
                                    {this.state.rate.map((cur, index) => {
                                        return (
                                            <option key={index} value={cur.cc}>{cur.cc}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </form>

                        <p className="calc-result">Результат: <span className="calc-result__summa">{this.state.result.toFixed(2)} &#8372;</span></p>
                    </div>
                    {/* /.calculator */}
                </div>
            </div>
        );
    }
}
