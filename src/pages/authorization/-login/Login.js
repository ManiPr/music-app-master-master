import React from 'react'

export default function Login() {
  return (
  <div className='login'>
      <div className='container'>
        <div className='login__wrapper'>
          <h3 className='login__title'>Login Page</h3>
         <form className='login__form'>
          <input className='login__input' placeholder='Email Or Username' type='text'></input>
          <input className='login__input' placeholder='Password' type='text'></input>
          <div className='login__buttons'>
            <div className='login__check'>
            <input className='login_button' type="checkbox"/>
            <label for="vehicle1">Remember me</label>
            </div>
            <input type='submit' value={'Login'} className='login_button'/>
         
          </div>
          <p className='login__forget-password'>Forgot your password?</p>
         </form>
         <div className='login__create-accounts'>
          <p className='login__create-acount'>Create Account</p>
         </div>
         </div>
        
      </div>
    </div>
  
  )
}