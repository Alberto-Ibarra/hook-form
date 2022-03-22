import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFName] = useState("")
    const [lastName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setCPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log(newUser);
        setHasBeenSubmitted(true)
    }

    const formMessage = () => {
        if(hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        }else{
            return "Welcome, please submit the form"
        }
    }
    
    return (
        <div>
            {
                hasBeenSubmitted===true?
                <h1>thank you for submitting the form</h1>:
                <h1>please fill in the form</h1>
            }
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                    <div>
                        <label> First Name: </label>
                        <input name="firstName" type="text" onChange={(e)=>setFName(e.target.value)} value={firstName} />
                        {
                            firstName.length < 2?
                            <p>first name must be at least 2 characters</p>:
                            ""
                        }
                    </div>
                    <div>
                        <label> Last Name: </label>
                        <input name="lastName" type="text" onChange={(e)=>setLName(e.target.value)} value={lastName} />
                        {
                            lastName.length < 2?
                            <p>last name must be at least 2 characters</p>:
                            ""
                        }
                    </div>
                    <div>
                        <label> Email: </label>
                        <input name="email" type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
                        {
                            email.length < 2?
                            <p>email must be at least 2 characters</p>:
                            ""
                        }
                    </div>
                    <div>
                        <label> Password: </label>
                        <input name="password" type="text" onChange={(e)=>setPassword(e.target.value)} value={password} />
                        {
                            password.length < 8?
                            <p>password must be at least 8 characters</p>:
                            ""
                        }
                    </div>
                    <div>
                        <label> Confirm Password: </label>
                        <input name="confirmPassword" type="text" onChange={(e)=>setCPassword(e.target.value)} value={confirmPassword} />
                        {
                            password !== confirmPassword?
                            <p>password must match</p>:
                            ""
                        }
                    <div>
                        <button>Submit</button>
                    </div>
        </div>
            </form>
            <p> First Name: {firstName}</p>
            <p> Last Name: {lastName}</p>
            <p> Email: {email}</p>
            <p> Password: {password}</p>
            <p> Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default Form