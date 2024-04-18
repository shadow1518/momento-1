const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
} 

const campos = {
  usuario: false,
  nombre: false,
  password: false,
  password2: false,
  correo: false,
  telefono: false


}

const validarformulario = (e) => {
    switch (e.target.name) {
      case "usuario": 
        validarcampo(expresiones.usuario, e.target, 'usuario');
      break;
      case "nombre": 
        validarcampo(expresiones.nombre, e.target, 'nombre');
      break;
      case "password": 
        validarcampo(expresiones.password, e.target, 'password');
        validarpassword2 ();
      break;
      case "password2": 
        validarpassword2 ();
      break;
      case "correo": 
        validarcampo(expresiones.correo, e.target, 'correo');
      break;
      case "telefono": 
        validarcampo(expresiones.telefono, e.target, 'telefono');
      break;
    }
}
const validarcampo = (expresion,input,campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    } else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');

    }
}

const validarpassword2 = () => {
    const inputpassword1 = document.getElementById('password');
    const inputpassword2 = document.getElementById('password2');


    /*if (inputpassword1.value !== inputpassword2.value){
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');

    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
    }*/
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarformulario);
    input.addEventListener('blur', validarformulario);
    
});

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();

    
});