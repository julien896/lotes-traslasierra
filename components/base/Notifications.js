import { notification } from 'antd';

export const notificationSuccess = () => {
    notification.success({
      message: 'Mensaje enviado con exito.',
      style: {
        background: 'rgba(13, 59, 102, 0.7)',
        border: '0.5px solid rgba(13, 59, 102, 1)',
        borderRadius: '3px',
      },
      placement: 'bottomRight'
    });
  };

  export const notificationError = () => {
    notification.error({
      message: 'Ha ocurrido un error. Revise sus datos e intente nuevamente.',
      placement: 'bottomRight',
      style: {
        background: 'rgba(194, 1, 20, 0.4)',
        border: '0.5px solid #C20114',
        borderRadius: '3px',
      },
    });
  };