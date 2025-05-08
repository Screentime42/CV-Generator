import '../style/general.css';

export default function General({ generalInfo, setGeneralInfo }) {

        function handleChange(e) {
                const {name, value} = e.target;
                setGeneralInfo((prev) => {
                        return {...prev, [name]: value}
                })
        }

        function handleSubmit(e) {
                e.preventDefault();
                console.log(generalInfo);   
        }

        return (
                <div className="input-section">
                        
                        
                        <form onSubmit={handleSubmit} className="form" id="general-form">
                                
                                <label className="input">Name: </label>
                                <input 
                                        className="input"
                                        type="text" 
                                        placeholder="Your name.." 
                                        id="name-input"
                                        name="name"
                                        autoComplete="name"
                                        onChange={handleChange}
                                /> 
                               
                                
                                
                                <label className="input" htmlFor="email-input">Email: </label> 
                                <input 
                                        className="input"
                                        id="email-input"
                                        type="email" 
                                        placeholder="Your email address.." 
                                        name="email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                /> 

                                <label className="input" htmlFor="phone-input">Phone: </label> 
                                <input 
                                        className="input"
                                        id="phone-input"
                                        type="phone" 
                                        placeholder="Your phone number.." 
                                        name="phone"
                                        autoComplete="mobile"
                                        onChange={handleChange}
                                /> 
                                <label className="input" htmlFor="town-input">Town: </label> 
                                <input 
                                        className="input"
                                        id="town-input"
                                        type="text" 
                                        placeholder="Town you live in/near.." 
                                        name="town"
                                        autoComplete="address-level2"
                                        onChange={handleChange}
                                /> 
                                <label className="input" htmlFor="postcode-input">Postcode: </label>
                                <input 
                                        className="input"
                                        id="postcode-input"
                                        type="text" 
                                        placeholder="Postcode.." 
                                        name="postcode"
                                        autoComplete="postal-code"
                                        onChange={handleChange}
                                /> 
                               
                                
                                <label className="input" htmlFor="prof-input">Professional Profile: </label>
                                <textarea 
                                        className="input"
                                        id="prof-input"
                                        placeholder="A paragraph about you professionally.." 
                                        name="profile"
                                        style={{ height: "100px"}} 
                                        onChange={handleChange}
                                />   

                                
                        </form>
                </div>
        )
};