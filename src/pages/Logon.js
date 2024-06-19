import '../styles/Logon.css';

import { useState } from 'react';

import Form from '../components/Form';
import Footer from '../components/Footer';
import Input from '../components/Input';
import LogonButtons from '../components/LogonButtons';

import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Logon() {

  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    console.log('target: ' + e.target);

    setFormData({
      ...formData,
      [name] : value
    });
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      console.log(formData);

      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data); 

    } catch (error) {

      console.error('Error:', error);
      
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className='logon-inputs'>
          <Input type='text' placeholder='Digite seu nome completo...' htmlFor='name' label='Nome Completo' onChange={handleChange} value={formData.name} />
          <Input type='email' placeholder='Digite seu melhor e-mail...' htmlFor='email' label='E-mail' onChange={handleChange} value={formData.email} />
          <Input type='password' placeholder='Digite sua senha...' htmlFor='password' label='Senha' onChange={handleChange} value={formData.password} />
          <Input type='tel' placeholder='Digite seu melhor número de celular...' htmlFor='phone' label='Celular' onChange={handleChange} value={formData.phone} />
          <Input type='text' placeholder='Digite seu endereço...' htmlFor='address' label='Endereço' onChange={handleChange} value={formData.address} />
        </div>
        <div className='logon-buttons'>
          <LogonButtons message='Finalizar Cadastro' hoverColor='email-hover' icon={faPaperPlane } />
          <p className='buttons-divisor'>Ou</p>
          <div className='oauth-buttons'>
            <LogonButtons message='Continuar com Google' hoverColor='google-hover' icon={faGoogle} />
            <LogonButtons message='Continuar com Facebook' hoverColor='fa-hover' icon={faFacebook} />
            <LogonButtons message='Continuar com Twitter' hoverColor='tt-hover' icon={faTwitter} />
          </div>
        </div>
      </Form>
      <Footer 
        backFooter="logon-footer"
        where="logon"
      />
    </div>
  );
}

export default Logon;
