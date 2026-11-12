/**
 * Clube VIP Barbearia — Main Scripts
 * Ordem Design System Interaction Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initToastController();
  initInteractiveTriggers();
});

/**
 * Toast Notification Controller
 */
let toastTimeout = null;

function showToast(message) {
  const toastElement = document.getElementById('toast');
  if (!toastElement) return;

  // Clear pending dismissals
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  // Update text & show
  toastElement.textContent = `// ${message.toUpperCase()}`;
  toastElement.classList.add('show');

  // Auto-dismiss after 2.4s
  toastTimeout = setTimeout(() => {
    toastElement.classList.remove('show');
  }, 2400);
}

/**
 * Delegated and Attribute-based Event Listeners
 * Adheres to strict separation of concerns (no inline onclick in HTML)
 */
function initInteractiveTriggers() {
  const triggerElements = document.querySelectorAll('[data-toast]');

  triggerElements.forEach(element => {
    element.addEventListener('click', (event) => {
      const message = element.getAttribute('data-toast');
      if (message) {
        showToast(message);
      }
    });
  });
}

