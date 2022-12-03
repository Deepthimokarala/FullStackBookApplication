import React, {useState} from "react";
import {Form , Button } from 'react-bootstrap';
const BookForm =(props)=>{
    const [book,setBook]=useState({
        bookname:props.book?
        props.book.bookname : ' ',
        author:props.book ?
        props.book.bookname : ' ',
        quantity : props.book ?
        props.book.quantity : ' ',
        price : props.book ?
        props.book.price : ' ',
        date : props.book ?
        props.book.date:''
    })
}
const [errorMsg ,setErrorMsg]=useState( ' ');
const {bookname, author ,price ,quantity}=book;
const handleOnSubmit=(event)=>{
    event.preventDefault();
    const values=[bookname,author,price,quantity];
    let errorMsg=' ';
    const allFieldsFilled=values.every((field)=>{
        const value ='${field}'.trim();
        return value !== ' ' && value !=='0';

    });
    if(allFieldsFilled){
        const book ={
            id:uuidv4(),
            bookname,
            author,
            price,
            quantity,
            date:new Date()
        };
        props.handleOnSubmit(book);
    }
    else{
        errorMsg='please fill all the details.';
    }
    setErrorMsg(errorMsg);
}
const handleInputChange=(event)=>{
    const {name,value}=event.target;
    switch(name){
        case 'quantity':
            if(value===' '|| value.match()){
                setBook(prevState =>({
                    ...prevState,[name]:value
                }))
            }
            
    }
}