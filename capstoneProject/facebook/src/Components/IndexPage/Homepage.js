import {Component} from 'react'
import './Css/Homepage.css'
class Homepage extends Component
{
    render()
    {
        return(
            <div className='Homepage_container'>
                <div className='Homepage_form'>
                    <form>
                        <div className='Homepage_form_inputs'>
                        <input placeholder='Email address or Phone number'/>
                        <input placeholder='Password'/>
                        </div>
                        <div>
                        <button >Log In</button>
                        </div>
                        <div>
                        <span>Forgetten Password?</span>
                        </div>
                        <hr/>
                       <div>
                       <button>Create New Account</button>
                       </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Homepage