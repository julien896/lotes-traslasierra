import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import axios from 'axios';
import { notificationError, notificationSuccess } from '@/components/base/Notifications';

const CallModal = ({ modal, showModal }) => {    
    const reg = new RegExp('^[0-9]*$')

    const [form] = Form.useForm()
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        phone: '',
        message: 'Hola, estoy interesado en una propiedad, me gustaría que me llamen. Gracias'
    })
    
    const handleSubmit = () => {
        form.validateFields().then(() => {
            axios.post('/api/contact', {
                name: contactData.name,
                email: contactData.email,
                phone: contactData.phone,
                message: contactData.message
            })
            .then(() => {
                notificationSuccess()
            })
            .catch(e => {
              notificationError()
              console.error(e)
            })
            form.resetFields()
            showModal()
            setContactData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        })
    }
    return ( 
      <Modal 
        visible={modal} 
        onCancel={showModal}
        footer={[
            <Button className='submit-btn' key="submit" onClick={() => handleSubmit()}>
              Confirmar
            </Button>,
            <Button className='cancel-btn' key="back" onClick={() => showModal()}>
              Cancelar
            </Button>
        ]}
      >
        <div className='modal-form'>
          <Form
            name="basic"
            autoComplete="off"
            layout='vertical'
            form={form}
          >
            <Form.Item
              label="Nombre"
              name="name"
              rules={[{ required: true, message: 'Por favor, ingrese su nombre.', type: 'string' }]}
            >
                <Input 
                  value={contactData.name} 
                  onChange={e => setContactData({ ...contactData, name: e.target.value })}
                />
            </Form.Item>
            <Form.Item
                label="Teléfono"
                name="phone"
                rules={[
                    { 
                      required: (!reg.test(contactData.phone)), 
                      message: 'Por favor, ingrese su teléfono.', 
                      type: 'string' 
                    }
                ]}
            >
                <Input 
                  value={contactData.phone}
                  onChange={e => setContactData({ ...contactData, phone: e.target.value })} 
                />
            </Form.Item>
          </Form>
        </div>
      </Modal>
     );
}
 
export default CallModal;