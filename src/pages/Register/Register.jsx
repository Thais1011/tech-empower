import { useState } from "react";
import LayoutComponents from "../../components/Layout/AuthLayout/LayoutComponents";
import { Checkbox, FormControlLabel } from "@mui/material";
import { yellow } from "@mui/material/colors";


export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("")
    const [cellphone, setCellphone] = useState("")
    const [CEP, setCEP] = useState("")
    const [cellphoneValid, setCellphoneValid] = useState(true)


  const handleCellphoneElevenNumbers = () => {
    setCellphoneValid(/^\d{11}$/.test(cellphone));
  };


  
    return (
      <LayoutComponents >
        <form className="login-form">
          <span className="login-form-title"> Create account </span>
          

        <div className="wrap-input">
        <input
            required
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Name"></span>
        </div>

        <div className="wrap-input">
        <input
            required
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
        <input
            required 
            className={cellphone !== "" ? "has-val input" : "input"}
            type="cellphone"
            pattern="[0-9]{11}"
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
            onBlur={handleCellphoneElevenNumbers}
        />
        <span className="focus-input" data-placeholder="Phone Number"></span>
        </div>

        {!cellphoneValid && <span>Phone number must have 11 digits</span>}


        <div className="wrap-input">
        <input
        //In future, we will use a API to get the address when the user type the CEP, then I will use the same logic of the phone number to validate the CEP and show the address
            className={CEP !== "" ? "has-val input" : "input"}
            type="CEP"
            value={CEP}
            onChange={(e) => setCEP(e.target.value)}
        />
        <span className="focus-input" data-placeholder="CEP"></span>
        </div>        

        <div className="wrap-input">
        <input
            required
            className={password !== ""  ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        
        <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="wrap-input">
        <input 
            required
            className={password2 !== ""  ? "has-val input" : "input"}
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            />
        <span className="focus-input" data-placeholder="Confirm password"></span>        
        </div>

        {password2 !== password && <span className="error">Passwords must match</span>}
    
        <FormControlLabel 
        required control={<Checkbox />} 
        label="Accept the privacy policies."
        sx={{
            color: yellow[200],
            '&.Mui-checked': {
              color: yellow[600],
            },
          }} />

        <div className="container-login-form-btn">
        <button
         className="login-form-btn"
        >Login</button>
        </div>

        <div className="text-center">
        <span className="txt1">Have an account? </span>

        </div>
        </form>
        </LayoutComponents>
        )
        }