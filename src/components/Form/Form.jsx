import { useRef, useState } from 'react';
import axios from 'axios';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [infoMessage, setInfoMessage] = useState('');
    const [lockedForm, setLockedForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const sendButton = useRef(null);

    const handleInputChange = (e) => {
        setInfoMessage('');
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'name': setName(value)
                break;
            case 'email': setEmail(value)
                break;
            case 'subject': setSubject(value)
                break;
            case 'message': setMessage(value)
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (lockedForm) return
        setLockedForm(true);
        setLoading(true);
        try {
            if (!name || !email || !subject || !message) throw new Error("Form error");
            const response = await axios.post('https://message-victor.onrender.com/send-message', {
                name,
                email,
                subject,
                message,
                password: import.meta.env.VITE_SMTP_KEY,
            }, {
                timeout: 15000,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                setInfoMessage("Mensagem enviada com sucesso, obrigado! Entrarei em contato assim que possível");
                setSubject('');
                setMessage('');
            }
            console.log(response)
        } catch (error) {
            console.log(error)
            if (error.message === "Form error") {
                let message = 'Preencha:';
                if (!name) message += ' nome,';
                if (!email) message += ' email,';
                if (!message) message += ' mensagem,';
                if (!subject) message += ' assunto,';
                message += ' para enviar a mensagem'
                setInfoMessage(message)
            }
        } finally {
            setLockedForm(false);
            setLoading(false);
        }
    }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='input-box'>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" onChange={handleInputChange} value={name} />
            </div>
            <div className='input-box'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleInputChange} value={email} />
            </div>
            <div className='input-box'>
                <label htmlFor="subject">Assunto</label>
                <input type="text" name="subject" id="subject" onChange={handleInputChange} value={subject} />
            </div>
            <div className='input-box loader-div'>
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" id="message" cols="30" rows="10" onChange={handleInputChange} value={message}></textarea>
                {loading && <div className='loader' />}
            </div>
            {infoMessage && <p>{infoMessage}</p>}
            <button ref={sendButton}>ENVIAR</button>


        </form>
    )
}
