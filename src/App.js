import { useState } from "react";
import "./App.css";

function App() {
  const[formData,setFormData] = useState({
    firstName : "",
    lastName : "",
    country : "India",
    streetAddress : "",
    city:"",
    state:"",
    postalCode : "",
    comments : false,
    offers : false,
    pushNotification : ""

  })

  function changeHandler(event){
    //destructuring kar rha hai
    const{name,value,checked,type} = event.target;
    setFormData( (prev)=>(
      {
        ...prev,
        [name]:type === "checkbox" ? checked : value
      }
    ))

  }

  function submitHandler(event){
    //default behaviour ko prevent karta hai
    event.preventDefault();
    
    console.log("finally printing the value of Form Data:");

    console.log(formData);
  }



  return (
    <div className="flex flex-col items-center" >


      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
      
        <br></br>
        <input
          type='text'
          name="firstName"
          id="firstName"
          placeholder="Ritesh"
          value={formData.firstName}
          onChange = {changeHandler}
          className = "border border-slate-500"
        />

        <br></br>
        <br></br>

        <label htmlFor="lastName">Last Name</label>
        
        <br></br>
        <input
          type='text'
          name="lastName"
          id="lastName"
          placeholder="Prasad"
          value={formData.lastName}
          onChange = {changeHandler}
          className = "border border-slate-500"
        />

        <br></br>
        <br></br>

        <label htmlFor="email">E-mail</label>
        
        <br></br>
        <input
          type='email'
          name="email"
          id="email"
          placeholder="riteshprasad@google.com"
          value={formData.email}
          onChange = {changeHandler}
          className = "border border-slate-500"
        />

        <br></br>
        <br></br>
        <label htmlFor="country">Country</label>
        
        <br></br>
        <select id="country"
        name="country"
        value={formData.country}
        onChange = {changeHandler}
        className = "border border-slate-500"
        >
          <option>India</option>
          <option>US</option>
          <option>UK</option>
          <option>Amsterdam</option>
        </select>

        <br></br>
        <br></br>

        <label htmlFor="streetAddress">Street Address</label>
        
        <br></br>
        <input
          type='text'
          name="streetAddress"
          id="streetAddress"
          placeholder="Asansol"
          value={formData.streetAddress}
          onChange = {changeHandler}
          className = "border border-slate-500"
        />

        <br></br>
        <br></br>

        <label htmlFor="city">City</label>
        
        <br></br>
        <input
          type='text'
          name="city"
          id="city"
          placeholder="Asansol"
          value={formData.city}
          onChange = {changeHandler}
          className = "border border-slate-500"
        />

        <br></br>
        <br></br>

        <label htmlFor="state">State</label>
        
        <br></br>
        <input
          type='text'
          name="state"
          id="state"
          placeholder="W.B"
          value={formData.state}
          onChange = {changeHandler}
          className = "border border-slate-500"
        />
        
        <br></br>
        <br></br>

        <label htmlFor="postalCode">Postal Code</label>
        
        <br></br>
        <input
          type='text'
          name="postalCode"
          id="postalCode"
          placeholder="713031"
          value={formData.streetAddress}
          onChange = {changeHandler}
          className = "border border-slate-500"
        />
        
        <br></br>
        <br></br>
        <fieldset>
          {/* legend caption ka lia use karta hai  */}
          <legend>By Email</legend>

          <div className="flex">
            <input 
            type="checkbox"
            id="comments"
            name="comments"
            checked={formData.comments}
            onChange = {changeHandler}
            />

            <label htmlFor="comments">Comments</label>
          </div>
          <p>Get notified when someones post a comments</p>

          <div className="flex">
            <input 
            type="checkbox"
            id="candidate"
            name="candidate"
            checked={formData.candidate}
            onChange = {changeHandler}
            />

            <label htmlFor="candidate">Candidate</label>
          </div>
          <p>Get notified when someones post a comments</p>


          <div className="flex">
            <input 
            type="checkbox"
            id="offers"
            name="offers"
            checked={formData.offers}
            onChange = {changeHandler}
            />

            <label htmlFor="offers">Comments</label>
          </div>
          <p>Get notified when someones post a comments</p>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS</p>
        </fieldset>

        <input
          type="radio"
          id="pushEverything"
          name="pushNotification"
          value="Everything"
          onChange={changeHandler}
        />

        <label htmlFor="pushEverything">Everything</label>

        <br></br>
        <input
          type="radio"
          id="pushEmail"
          name="pushNotification"
          value="same as email"
          onChange={changeHandler}
        />

        <label htmlFor="pushEmail">Push Email</label>

        <br></br>
        <input
          type="radio"
          id="pushNothing"
          name="pushNotification"
          value="No Push Notifications"
          onChange={changeHandler}
        />

        <label htmlFor="pushNothing">Nothing</label>

        </fieldset>

        <button className="bg-blue-500 text-white rounded-sm p-2">
        Save
        </button>

      </form>
    </div>
  );
}

export default App;
