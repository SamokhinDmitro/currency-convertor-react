import React from "react";
import './Home.sass';
import Rate from "../Rate/Rate";
import Calculator from "../Calculator/Calculator";
import Loader from "../UI/Loader";
import Auxility from "../hoc/Auxility";

import axios from 'axios';


export default class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            currencyRate: [],
            loading: true
        }

        //Массив интересующих валютвалют
        this.currency = ['USD', 'CAD', 'PLN', 'GBP', 'CZK', 'AED', 'ILS', 'TRY'];
    }

    componentDidMount() {

        const timerClock = 1000;
        //Исскуственная задержка выполнения запроса в 3000 мс
        setTimeout(()=> {
            axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
                .then(data => {
                    return data.data;
                })
                .then(data => {
                    //1 set date in state
                    let resData = '';
                    //Получаем актуальную дату от сервера
                    const dateArray = data[0].exchangedate.split('.').reverse();
                    console.log(dateArray);

                    const date = new Date(dateArray[0], dateArray[1]-1, dateArray[2]);
                    console.log(date);

                    let day = date.getDate();
                    let month = this.getPrepareMonth(date.getMonth());
                    let year = date.getFullYear();

                    resData = `${day} ${month} ${year} года`;

                    this.setState({date: resData})
                    //2 Get currencyRate
                    let result = [];

                    //Фильтрация двух массивов
                    for (let prop of data) {
                        for (let cur of this.currency) {
                            if (cur === prop.cc){
                                result.push(prop);
                            }
                        }
                    }
                    this.setState({ currencyRate: result, loading: false});
                })

                .catch(e => {
                    alert(e.message);
                })
        }, timerClock);

    }

    getPrepareMonth = month => {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        return months[month];
    }


    render() {

        const content = (
            <Auxility>
                <h2 className="main-title">Курс валют на {this.state.date}</h2>

                <div className="row">

                    {/*Rate*/}
                    {this.state.currencyRate.map((cur, index) => {
                        return (
                            <Rate key={index} currency={cur}/>
                        );
                    })}
                </div>

                <h2 className="main-title">Калькулятор валют</h2>

                {/*Calculator*/}
                <Calculator rate={this.state.currencyRate}/>
            </Auxility>
        );

        return (
            <div className="container">
                {this.state.loading
                    ? <Loader/>
                    : content
                }

            </div>
        );
    }
}
