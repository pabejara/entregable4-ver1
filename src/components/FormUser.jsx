import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setCloseForm }) => {

    useEffect(() => {
        reset(updateInfo)

    }, [updateInfo])

    const { register, reset, handleSubmit } = useForm()

    const submit = data => {
        if (updateInfo) {
            // update
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else {
            // create
            createNewUser(data)
        }

        setCloseForm(true)
        
        reset({
            email: "",
            last_name: "",
            first_name: "",
            birthday: "",
            password: ""
        })
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <div onClick={()=> setCloseForm(true)} className='form__x' >X</div>
            <h2 className='form__title' >{updateInfo ? 'Update User' : 'Create User'}</h2>
            <div className='form__div' >
                <label className='form__label' htmlFor="email">E-mail: </label>
                <input className='form__input' id='email' type="email" {...register("email")} />
            </div>
            <div className='form__div' >
                <label className='form__label' htmlFor="password">Password: </label>
                <input className='form__input' id='password' type="password" {...register("password")}/>
            </div>
            <div className='form__div' >
                <label className='form__label' htmlFor="first_name">First Name: </label>
                <input className='form__input' id='first_name' type="text" {...register("first_name")} />
            </div>
            <div className='form__div' >
                <label className='form__label' htmlFor="last_name">Last Name: </label>
                <input className='form__input' id='last_name' type="text" {...register("last_name")} />
            </div>
            <div className='form__div' >
                <label className='form__label' htmlFor="birthday">Birthday: </label>
                <input className='form__input' id='birthday' type="date" {...register("birthday")} />
            </div>
            <button className='form__btn' >Submit</button>
        </form>
    )
}

export default FormUser