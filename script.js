// ========================================
// MENU RESPONSIVO
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Abre e fecha o menu mobile.
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );
});

// Fecha o menu ao clicar em um link.
navLinks.querySelectorAll("a").forEach((link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
}));

// ========================================
// ANO AUTOMÁTICO NO RODAPÉ
// ========================================

const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();

// ========================================
// MODAL DE INSCRIÇÃO DEMONSTRATIVA
// ========================================

const enrollButton = document.querySelector("#enroll-button");
const enrollmentModal = document.querySelector("#enrollment-modal");
const closeModalButton = document.querySelector(".modal-close");
const demoForm = document.querySelector("#demo-form");
const formMessage = document.querySelector("#form-message");

// Abre o modal.
enrollButton.addEventListener("click", () => {
    enrollmentModal.showModal();
});

// Fecha o modal pelo botão.
closeModalButton.addEventListener("click", () => {
    enrollmentModal.close();
});

// Fecha o modal ao clicar fora do conteúdo.
enrollmentModal.addEventListener("click", (event) => {
    if (event.target === enrollmentModal) {
        enrollmentModal.close();
    }
});

// ========================================
// FORMULÁRIO FICTÍCIO
// ========================================

demoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentName = document
        .querySelector("#student-name")
        .value
        .trim();

    const studentEmail = document
        .querySelector("#student-email")
        .value
        .trim();

    // Validação básica dos campos.
    if (!studentName || !studentEmail) {
        formMessage.textContent =
            "Preencha todos os campos para continuar.";

        return;
    }

    // Nenhum dado é enviado ou armazenado.
    formMessage.textContent =
        `Obrigado, ${studentName}! Esta foi uma inscrição demonstrativa.`;

    demoForm.reset();
});

// ========================================
// FAQ: UM ITEM ABERTO POR VEZ
// ========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
        if (item.open) {
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.open = false;
                }
            });
        }
    });
});