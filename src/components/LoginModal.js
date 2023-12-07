import React, {useContext, useState} from "react";
import '../styles/login.scss';
import { AuthContext } from "./AuthProvider";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    email: yup.string().email('Невірний Email').required('Введіть email'),
    password: yup.string().required(),
}).required();


function LoginModal() {
    const {loginModalIsOpen, toggleLogin, toggleRegister} = useContext(AuthContext);
    const [showPass, togglePass] = useState(false);
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });
    
    const closeModal = () => {
        toggleLogin(false);
        reset()
    }

    const onSubMit = data => {
        console.log(data);
        reset();
    }

    const togleShowPass = () => {
        togglePass(prev => !prev)
    }

    const registration = () => {
        toggleRegister(true);
        toggleLogin(false);
    }

    return (
        <div 
            className={`login-modal ${!loginModalIsOpen ? "login-modal_closed" : ''}`}
        >
            <div className="login-modal__container">
                <div onClick={closeModal} className="close-btn">
                    <span className="material-icons">close</span>
                </div>
                <h1>Вхід</h1>
                <form className="login-form" onSubmit={handleSubmit(onSubMit)}>
                    <div className="login-form__field">
                        <label 
                            className={`login-form__label ${errors.hasOwnProperty('email') && 'login-form__label_error'}`}
                            htmlFor="login"
                        >
                            {errors.email?.message || "Логін"}
                        </label>
                        <input
                            {...register('email')} 
                            type="text"
                            name="email"
                            placeholder="Ваш Email або номер телефону"
                            className={`login-form__input ${errors.hasOwnProperty('email') && 'login-form__input_error'}`}
                            id="login"
                        />
                    </div>
                    <div className="login-form__field">
                        <label 
                            className={`login-form__label ${errors.hasOwnProperty('password') && 'login-form__label_error'}`}
                            htmlFor="pass"
                        >
                            {errors.email?.message || "Пароль"}
                        </label>
                        <input
                            {...register("password")} 
                            type={`${showPass ? 'text' : "password"}`}
                            name="password"
                            placeholder="Ваш пароль"
                            className={`login-form__input ${errors.hasOwnProperty('password') && 'login-form__input_error'}`}
                            id="pass"
                        />
                        <span className="material-icons visibility" onClick={togleShowPass}>
                            {`${showPass ? 'visibility' : 'visibility_off'}`}
                        </span>
                    </div>
                    <div className="login-form__field">
                        <button className="login-btn" type="submit">Увійти</button>
                    </div>
                </form>
                    <div className="">
                        <button 
                            className="login-btn login-btn_grey"   
                            onClick={registration} 
                        >Реєстрація</button>
                    </div>
            </div>
        </div>
    )
}

export default LoginModal;