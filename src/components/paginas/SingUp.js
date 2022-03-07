import React from 'react';
import '../../App.css';
import './SingUp.css';
/*preview code of the section with no backend or jsx elements*/
function SingUp() {
    return (
    <section className='sing-up'>
     <div className="container">
        <form>
            <div className="links">
            <h1 className="heading">Sing <span>in</span></h1>
                <div className="buttons">
                    <a href="#" className="btn"><i className="fab fa-google"></i>Google</a>
                    <a href="#" className="btn"><i className="fab fa-facebook-f"></i>Facebook</a>
                   
                </div>
            </div>
            <div className="input-box">
                <h1 className="title"> Or sing in with e-mail</h1>
                <div className="input">
                    <span className="far fa-envelope"></span>
                    <input type="email" name="" placeholder="email" id="email"/>
                </div>
                <div className="input">
                    <span className="fas fa-lock"></span>
                    <input type="password" name="" placeholder="password" id="password"/>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="" id="remember"/>
                    <label>Remember me</label>
                </div>
                <input type="submit" value="Sing in" className="sing-in-btn"/>
            </div>
        </form>
    </div>
    </section>
    )
    
}
export default SingUp