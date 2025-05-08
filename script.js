// Basic tab functionality for the Ideas Board
const ideaTabs = document.querySelectorAll('.ideas-board .tabs button');
const ideaContent = document.querySelector('.ideas-board .ideas-content');

ideaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        ideaTabs.forEach(btn => btn.classList.remove('active'));
        tab.classList.add('active');
        // Here you would dynamically load content based on the active tab
        ideaContent.innerHTML = `<p>Content for ${tab.textContent} will go here.</p>`;
    });
    document.addEventListener('DOMContentLoaded', () => {
        // --- Tabla de Ideas Interactiva ---
        const ideaTabs = document.querySelectorAll('.ideas-board .tabs button');
        const ideaContent = document.querySelector('.ideas-board .ideas-content');
        const addIdeaInput = document.createElement('input');
        addIdeaInput.type = 'text';
        addIdeaInput.placeholder = 'Añadir nueva idea...';
        const addIdeaButton = document.createElement('button');
        addIdeaButton.textContent = 'Añadir';
        const ideasData = {
            Catering: ['Idea 1 para Catering', 'Idea 2 para Catering'],
            Música: ['Idea A para Música', 'Idea B para Música'],
            Regalos: ['Opción de Regalo X', 'Opción de Regalo Y'],
        };
        let currentIdeaCategory = 'Catering';
    
        const displayIdeas = (category) => {
            ideaContent.innerHTML = '';
            if (ideasData[category]) {
                const ul = document.createElement('ul');
                ideasData[category].forEach((idea, index) => {
                    const li = document.createElement('li');
                    li.textContent = idea;
                    const voteButton = document.createElement('button');
                    voteButton.textContent = 'Votar';
                    voteButton.addEventListener('click', () => {
                        alert(`Funcionalidad de votación para "${idea}" se implementará aquí.`);
                    });
                    li.appendChild(voteButton);
                    ul.appendChild(li);
                });
                ideaContent.appendChild(ul);
            }
        };
    
        ideaTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                ideaTabs.forEach(btn => btn.classList.remove('active'));
                tab.classList.add('active');
                currentIdeaCategory = tab.textContent;
                displayIdeas(currentIdeaCategory);
            });
        });
    
        addIdeaButton.addEventListener('click', () => {
            const newIdeaText = addIdeaInput.value.trim();
            if (newIdeaText) {
                if (!ideasData[currentIdeaCategory]) {
                    ideasData[currentIdeaCategory] = [];
                }
                ideasData[currentIdeaCategory].push(newIdeaText);
                displayIdeas(currentIdeaCategory);
                addIdeaInput.value = '';
            }
        });
    
        ideaContent.parentNode.insertBefore(addIdeaInput, ideaContent);
        ideaContent.parentNode.insertBefore(addIdeaButton, ideaContent);
        displayIdeas(currentIdeaCategory); // Initial display
    
        // --- Chat Básico ---
        const chatContainer = document.createElement('div');
        chatContainer.classList.add('chat-container');
        const chatMessages = document.createElement('ul');
        chatMessages.classList.add('chat-messages');
        const chatInput = document.createElement('input');
        chatInput.type = 'text';
        chatInput.placeholder = 'Escribe un mensaje...';
        const sendButton = document.createElement('button');
        sendButton.textContent = 'Enviar';
    
        sendButton.addEventListener('click', () => {
            const messageText = chatInput.value.trim();
            if (messageText) {
                const newMessage = document.createElement('li');
                newMessage.textContent = `Usuario: ${messageText}`; // Replace 'Usuario' with actual user info
                chatMessages.appendChild(newMessage);
                chatInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
            }
        });
    
        chatContainer.appendChild(chatMessages);
        chatContainer.appendChild(chatInput);
        chatContainer.appendChild(sendButton);
    
        const chatSection = document.querySelector('.main-content'); // Adjust if needed
        if (chatSection) {
            const chatTitle = document.createElement('h2');
            chatTitle.textContent = 'Chat';
            chatSection.appendChild(chatTitle);
            chatSection.appendChild(chatContainer);
        }
    
        // --- Lista de Tareas Interactiva ---
        const taskListItems = document.querySelectorAll('.task-list ul li');
        taskListItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('completed');
                const checkIcon = item.querySelector('.icon.check');
                if (checkIcon) {
                    checkIcon.textContent = item.classList.contains('completed') ? '✓' : '';
                }
                // In a real application, you would update the task status in your data
            });
        });
    
        // --- Botón "+ Crear Evento" Funcionalidad ---
        const createEventButton = document.querySelector('.create-event');
        if (createEventButton) {
            createEventButton.addEventListener('click', () => {
                const modal = document.createElement('div');
                modal.classList.add('modal');
                const modalContent = document.createElement('div');
                modalContent.classList.add('modal-content');
                const closeButton = document.createElement('span');
                closeButton.classList.add('close-button');
                closeButton.textContent = '&times;';
                closeButton.addEventListener('click', () => {
                    modal.remove();
                });
                const modalTitle = document.createElement('h3');
                modalTitle.textContent = 'Crear Nuevo Evento';
                const eventNameInput = document.createElement('input');
                eventNameInput.type = 'text';
                eventNameInput.placeholder = 'Nombre del evento';
                const createButton = document.createElement('button');
                createButton.textContent = 'Crear';
                createButton.addEventListener('click', () => {
                    const eventName = eventNameInput.value.trim();
                    if (eventName) {
                        alert(`Se intentará crear el evento: ${eventName}`);
                        modal.remove();
                        // In a real application, you would handle event creation logic here
                    } else {
                        alert('Por favor, introduce un nombre para el evento.');
                    }
                });
    
                modalContent.appendChild(closeButton);
                modalContent.appendChild(modalTitle);
                modalContent.appendChild(eventNameInput);
                modalContent.appendChild(createButton);
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
            });
        }
    
        // --- Calendario Básico (Summary) ---
        const monthSelectorSpans = document.querySelectorAll('.calendar-summary .month-selector span');
        monthSelectorSpans.forEach(span => {
            span.addEventListener('click', () => {
                alert(`Navegación al mes de ${span.textContent} se implementará.`);
                // En una aplicación real, actualizarías los datos del calendario
            });
        });
    
        // --- Resaltar el día actual en el mini-calendario ---
        const miniCalendarTds = document.querySelectorAll('.calendar-widget .mini-calendar td');
        const today = new Date();
        const dayOfMonth = today.getDate();
        const currentMonth = today.getMonth(); // 0-indexed
    
        // Basic mapping of month number to short name (adjust as needed)
        const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        const displayedMonth = document.querySelector('.calendar-summary .month-selector span:nth-child(2)').textContent; // Assuming 'May' is the second span
    
        const displayedMonthIndex = monthNames.indexOf(displayedMonth);
    
        miniCalendarTds.forEach(td => {
            if (parseInt(td.textContent) === dayOfMonth && currentMonth === displayedMonthIndex) {
                td.classList.add('today');
            }
        });
    });
});


