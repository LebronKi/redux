import './App.css';
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {
    addCustomerAction,
    removeCustomerAction,
} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";


const App = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state =>state.customers.customers)

    function plusCash(cash) {
        dispatch({type:'ADD_CASH', payload: cash })}

    function minusCash(cash) {
        dispatch({type:'GET_CASH',payload: cash})}


    function addCustomer (name){
        const customer = {name, id : Date.now()}
        dispatch(addCustomerAction(customer))}

    function removeCustomer (customer){
        dispatch(removeCustomerAction(customer.id))}

    return (
        <div className="App">
            <h1 style={{paddingTop:25}}>___Cash___ : {cash} $ </h1>
             <button id='btn-one' className='btn-success' onClick={()=>  plusCash(Number(prompt()))}>Top up your account</button>
            <button className='btn-info' onClick={()=> minusCash(Number(prompt()))}>Withdraw from the account</button>
            <hr/>
            <div className='customers'>
                <h2>___Bank customers___ : </h2>
                <div className='clients'>
                    {customers.length > 0 ?
                        <div>
                            {customers.map(customer =>
                                <h3 style={{color:'rgba(248, 124, 0)'}} onClick={() => removeCustomer(customer)}>
                                    {customer.name}
                                </h3>)}
                        </div>
                        : <div style={{marginTop: 10, fontSize:20, color:'#dc573b'}}>No clients founded !</div>
                    }
                </div>
                <div className='get-clients-btn'>
                    <button className='btn-primary' onClick={() => addCustomer(prompt())}>Add clients</button>
                    <button onClick={() => dispatch(fetchCustomers())} className='btn-warning'>Get clients from the database</button>
                </div>
            </div>
            <img
                src="https://papik.pro/uploads/posts/2022-01/1642343322_38-papik-pro-p-investitsii-klipart-39.png" alt=""/>
        </div>
    );
}

export default App;
