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
            <h1 style={{paddingTop:25}}>Cash: {cash}</h1>
            <button className='btn-success' onClick={()=>  plusCash(Number(prompt()))}>Top up your account</button>
            <button className='btn-info' onClick={()=> minusCash(Number(prompt()))}>Withdraw from the account</button>
            <h2 style={{margin: 25}} >
                Bank customers  : </h2>
            <div>
                {customers.length > 0 ?
                <div style={{fontSize: 25}} >
                    {customers.map(customer =>
                        <h3 onClick={() => removeCustomer(customer)}>
                            {customer.name}
                        </h3>)}
                </div>
                    : <h4 style={{margin: 25}}>No clients founded!</h4>
                }
            </div>

            <button className='btn-primary' onClick={() => addCustomer(prompt())}>Add clients</button>
            <div style={{margin:30}}>

                <button onClick={() => dispatch(fetchCustomers())} className='btn-warning'>Get clients from the database</button>
            </div>

        </div>
    );
}

export default App;
