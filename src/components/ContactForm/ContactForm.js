import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
    state = {
        email: '',
        emailError: null,
        offer: '',
        offerError: null
    };

    emailChangeHandler = event => {
        const email = event.target.value;
        this.setState({
            email,
            emailError: !email
        });
    };

    offerChangeHandler = event => {
        const offer = event.target.value;
        this.setState({
            offer,
            offerError: !offer
        });
    };

    submitHandler = event => {
        event.preventDefault();

        const { email, offer } = this.state;

        if (email && offer) {
            this.setState({
                email: '',
                emailError: false,
                offer: '',
                offerError: false
            });
            this.props.onSubmit();
            return;
        }

        this.setState({
            emailError: !email,
            offerError: !offer
        });
    };

    render() {
        const { email, emailError, offer, offerError } = this.state;

        return (
            <form className='contact-form' onSubmit={this.submitHandler}>
                <div className='contact-form__field'>
                    <input
                        value={email}
                        onChange={this.emailChangeHandler}
                        placeholder='Email для связи'
                    />
                    {emailError ? (
                        <div className='error'>Заполните поле</div>
                    ) : null}
                </div>
                <div className='contact-form__field'>
                    <textarea
                        rows='10'
                        value={offer}
                        onChange={this.offerChangeHandler}
                        placeholder='Ваше предложение'
                    ></textarea>
                    {offerError ? (
                        <div className='error'>Заполните поле</div>
                    ) : null}
                </div>
                <button className='button' type='submit'>
                    Отправить
                </button>
            </form>
        );
    }
}

export default ContactForm;
