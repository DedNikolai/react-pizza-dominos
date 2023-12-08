import React, {useContext, useState} from "react";
import '../styles/login.scss';
import { AuthContext } from "./AuthProvider";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerNewUser } from "../api/user";

const schema = yup.object({
    email: yup.string().email('Невірний Email').required('Введіть email'),
    password: yup.string().required(),
    firstName: yup.string().required('Введіть імя').min(2, 'Занадто коротке').max(20, 'Дуже довге'),
    lastName: yup.string().required('Введіть Прізвище').min(2, 'Занадто коротке').max(20, 'Дуже довге'),
    repeatPass: yup.string()
     .oneOf([yup.ref('password'), null], 'Паролі повинні співпадати')
}).required();


function RegisterModal() {
    const {registerModalIsOpen, toggleRegister} = useContext(AuthContext);
    const [showPass, togglePass] = useState(false);
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });
    
    const closeModal = () => {
        toggleRegister(false);
        reset()
    }

    const onSubMit = data => {
        registerNewUser(data).then(() => {
            closeModal()
        });
    }

    const togleShowPass = () => {
        togglePass(prev => !prev)
    }

    return (
        <div 
            className={`login-modal ${!registerModalIsOpen ? "login-modal_closed" : ''}`}
        >
            <div className="login-modal__container">
                <div onClick={closeModal} className="close-btn">
                    <span className="material-icons">close</span>
                </div>
                <h1>Реєстрація</h1>
                <form className="login-form" onSubmit={handleSubmit(onSubMit)}>
                    <div className="login-form__field">
                        <label 
                            className={`login-form__label ${errors.hasOwnProperty('email') && 'login-form__label_error'}`}
                            htmlFor="log"
                        >
                            {errors.email?.message || "Логін"}
                        </label>
                        <input
                            {...register('email')} 
                            type="text"
                            name="email"
                            placeholder="Ваш Email або номер телефону"
                            className={`login-form__input ${errors.hasOwnProperty('email') && 'login-form__input_error'}`}
                            id="log"
                        />
                    </div>
                    <div className="login-form__field">
                        <label 
                            className={`login-form__label ${errors.hasOwnProperty('password') && 'login-form__label_error'}`}
                            htmlFor="pas"
                        >
                            {errors.email?.message || "Пароль"}
                        </label>
                        <input
                            {...register("password")} 
                            type={`${showPass ? 'text' : "password"}`}
                            name="password"
                            placeholder="Ваш пароль"
                            className={`login-form__input ${errors.hasOwnProperty('password') && 'login-form__input_error'}`}
                            id="pas"
                        />
                        <span className="material-icons visibility" onClick={togleShowPass}>
                            {`${showPass ? 'visibility' : 'visibility_off'}`}
                        </span>
                    </div>
                    <div className="login-form__field">
                        <label 
                            className={`login-form__label ${errors.hasOwnProperty('repeatPass') && 'login-form__label_error'}`}
                            htmlFor="repeatPass"
                        >
                            {errors.repeatPass?.message || "Повторіть пароль"}
                        </label>
                        <input
                            {...register("repeatPass")} 
                            type={`${showPass ? 'text' : "password"}`}
                            name="repeatPass"
                            placeholder="Повторіть пароль"
                            className={`login-form__input ${errors.hasOwnProperty('repeatPass') && 'login-form__input_error'}`}
                            id="repeatPass"
                        />
                    </div>
                    <div className="login-form__field">
                        <label 
                            className={`login-form__label`}
                            htmlFor="firstName"
                        >
                            {errors.name?.firstName  || "Ім'я"}
                        </label>
                        <input
                            {...register("firstName")} 
                            type='text'
                            name="firstName"
                            placeholder="Ім'я"
                            className={`login-form__input ${errors.hasOwnProperty('firstName') && 'login-form__input_error'}`}
                            id="firstName"
                        />
                    </div>
                    <div className="login-form__field">
                        <label 
                            className={`login-form__label`}
                            htmlFor="lastName"
                        >
                            {errors.name?.lastName  || "Прізвище"}
                        </label>
                        <input
                            {...register("lastName")} 
                            type='text'
                            name="lastName"
                            placeholder="Ім'я"
                            className={`login-form__input ${errors.hasOwnProperty('lastName') && 'login-form__input_error'}`}
                            id="lastName"
                        />
                    </div>
                    <div className="login-form__field">
                        <button className="login-btn" type="submit">Реєстрація</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterModal;