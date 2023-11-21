import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from './Modal.module.css'
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={classes.modalBackground} onClick={props.clickHandler} />
}
const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <h2 className={classes.modalTitle}>An Error Occured</h2>
            <div className={classes.content}>
                <h3>{props.error}</h3>
            </div>
            <div className={classes.action}>
                <Button type={'button'} onClick={props.clickHandler}>Quit</Button>
            </div>
        </Card>
    )
}

const Modal = ({ error, setError }) => {
    const clickHandler = () => {
        setError('')
    }

    return (
        <>
            {
                ReactDOM.createPortal(<Backdrop clickHandler={clickHandler} />, document.querySelector('#backdrop-root'))
            }
            {
                ReactDOM.createPortal(<ModalOverlay error={error} clickHandler={clickHandler} />, document.querySelector('#overlay-root'))
            }
        </>
    )
}

export default Modal