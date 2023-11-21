import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Card from '../Card/Card';
import Button from '../Button/Button';
import classes from './RegisterForm.module.css'

const RegisterForm = ({ onSubmit }) => {
    const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm();


    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

    return (
        <Card className={classes.registerForm}>
            <form onSubmit={handleSubmit((data) => onSubmit(data))} method='post'>
                <div className={classes.inputItem}>
                    <label htmlFor='userName'>Username</label>
                    <input type='text' id='userName' {...register('userName')}></input>
                </div>
                <div className={classes.inputItem}>
                    <label htmlFor='userAge'>Age(years)</label>
                    <input type='number' id='userAge' {...register('userAge')}></input>
                </div>
                <Button type={'submit'}>Add User</Button>
            </form>
        </Card>
    )

}

export default RegisterForm