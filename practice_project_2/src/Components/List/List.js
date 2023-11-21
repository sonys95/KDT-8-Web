import React from "react";
import Card from "../Card/Card";
import classes from './List.module.css'

const List = ({ userList }) => {
    return (
        <Card className={classes.list}>
            {
                userList.map((item, index) => {
                    return (
                        <h3 key={index}>{item.userName} ( {item.userAge} years old )</h3>
                    )
                })
            }
        </Card>
    )
}

export default List