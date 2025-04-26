import Swal from "sweetalert2";

export const validatePhoneShow = () => {
  Swal.fire({
    icon: 'error',
    title: 'Teléfono inválido',
    text: 'Por favor ingresa un número de teléfono válido de 10 dígitos',
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#6A64F1',
    background: '#030712',
    color: '#fff'
  });
}

export const loadingMessage = async () => {
  Swal.fire({
    title: 'Enviando mensaje...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    background: '#030712',
    color: '#fff'
  });
}

export const successMessage = async (userName, userMail, userNumber, formCurrent) => {
  Swal.fire({
    icon: 'success',
    title: '¡Mensaje enviado!',
    html: `
          <div style="text-align: left;">
            <p>Gracias por contactarnos, <strong>${userName}</strong>.</p>
            <p style="margin-top: 10px;">Nos pondremos en contacto al <strong>${userNumber}</strong> o a <strong>${userMail}</strong> pronto.</p>
          </div>
        `,
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#6A64F1',
    background: '#030712',
    color: '#fff',
    timer: 6000,
    timerProgressBar: true,
    willClose: () => {
      formCurrent.reset();
    }
  });
}

export const errorMessage = () => {
  Swal.fire({
    icon: 'error',
    title: 'Error inesperado',
    html: `
          <div style="text-align: left;">
            <p>No pudimos enviar tu mensaje.</p>
            <p style="margin-top: 10px;">Por favor intenta nuevamente o contáctanos directamente a <strong>panificadoraandinasa@gmail.com</strong></p>
          </div>
        `,
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#6A64F1',
    background: '#030712',
    color: '#fff'
  });
}