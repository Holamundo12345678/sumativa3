document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("formLogin");
    const loginBackground = document.getElementById("login-background");
    const contenido = document.getElementById("contenido");
    const menuSection = document.getElementById("menu");
    const reservarSection = document.getElementById("reservar");
    const contactoSection = document.getElementById("contacto");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Evento de Login
    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const clave = document.getElementById("clave").value;

        if (usuario === "melvinpalma@mail.com" && clave === "123") {
            loginBackground.classList.add("oculto");
            contenido.classList.remove("oculto");
            menuSection.classList.remove("oculto");
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });

    // Manejo de navegación
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const sections = [menuSection, reservarSection, contactoSection];

            sections.forEach(section => {
                section.classList.toggle("oculto", section.id !== targetId);
            });
        });
    });

    // Manejo de reservas
    document.getElementById("formReserva").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Reserva realizada con éxito.");
        
    });

    document.getElementById("modificarReserva").addEventListener("click", function () {
        alert("Puedes modificar tu reserva llamando al restaurante.");
    });

    document.getElementById("cancelarReserva").addEventListener("click", function () {
        alert("Reserva cancelada.");
    });

    // Manejo de contacto
    document.getElementById("formContacto").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Mensaje enviado con éxito.");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // ... (Tu código JavaScript existente) ...

    // Manejo del formulario de Servicio al Cliente
    document.getElementById('commentForm').addEventListener('submit', function(event) {
        let isValid = true;

        // Validación de formato de teléfono
        const phoneInput = document.getElementById('phone');
        const phoneRegex = /^\d{8}$/; // Ejemplo: 8 dígitos
        if (!phoneRegex.test(phoneInput.value)) {
            alert('Por favor, ingresa un número de teléfono válido.');
            isValid = false;
        }

        // Si hay errores, evita que el formulario se envíe
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Comentario enviado con éxito.");
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (otros códigos) ...

    const botonesPedido = document.querySelectorAll('.pedido-btn');
    const listaPedidos = document.getElementById('lista-pedidos');
    const totalPedido = document.getElementById('total-pedido');
    let total = 0;

    botonesPedido.forEach(boton => {
        boton.addEventListener('click', function() {
            const nombre = this.getAttribute('data-nombre');
            const precio = parseFloat(this.getAttribute('data-precio'));
            const cantidad = parseInt(this.previousElementSibling.value); // Obtener la cantidad del input

            const li = document.createElement('li');
            li.textContent = `${nombre} x${cantidad} - $${(precio * cantidad).toFixed(2)}`;
            listaPedidos.appendChild(li);

            total += precio * cantidad;
            totalPedido.textContent = `Total: $${total.toFixed(2)}`;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('formLogin');
    const loginBackground = document.getElementById('login-background');
    const contenido = document.getElementById('contenido');
    const formReservar = document.getElementById('formReservar');
    const reservaMessage = document.getElementById('reserva-message');

    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        // Lógica de inicio de sesión (simulada)
        const usuario = document.getElementById('usuario').value;
        const clave = document.getElementById('clave').value;

        if (usuario === 'usuario' && clave === 'clave') {
            loginBackground.classList.add('oculto');
            contenido.classList.remove('oculto');
        } else {
            document.getElementById('login-message').textContent = 'Usuario o contraseña incorrectos.';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // ... (Tu código existente) ...

    // Manejo de reservas (CORREGIDO)
    const formReservar = document.getElementById("formReservar"); // Obtenemos el formulario correcto
    if (formReservar) { // Verificamos si el formulario existe
        formReservar.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevenimos el envío del formulario

            // Aquí puedes agregar la lógica para guardar la reserva (por ejemplo, enviarla a un servidor)

            alert("Reserva realizada con éxito."); // Mostramos el mensaje de éxito
        });
    }

    document.getElementById("modificarReserva").addEventListener("click", function () {
        alert("Puedes modificar tu reserva llamando al restaurante.");
    });

    document.getElementById("cancelarReserva").addEventListener("click", function () {
        alert("Reserva cancelada.");
    });

    // ... (Tu código existente) ...
});
