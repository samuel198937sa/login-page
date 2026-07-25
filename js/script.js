// ---------------- Alternar entre Entrar e Cadastrar ----------------
const logregBox = document.getElementById('logregBox');
const loginLinks = document.querySelectorAll('.login-link');
const registerLinks = document.querySelectorAll('.register-link');

registerLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		logregBox.classList.add('active');
	});
});

loginLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		logregBox.classList.remove('active');
	});
});

// ---------------- Menu mobile ----------------
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
	menuToggle.addEventListener('click', () => {
		const isOpen = mobileNav.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		menuToggle.innerHTML = isOpen ? "<i class='bx bx-x'></i>" : "<i class='bx bx-menu'></i>";
	});

	mobileNav.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			mobileNav.classList.remove('open');
			menuToggle.setAttribute('aria-expanded', 'false');
			menuToggle.innerHTML = "<i class='bx bx-menu'></i>";
		});
	});
}

// ---------------- Mostrar/ocultar senha ----------------
document.querySelectorAll('.toggle-password').forEach((icon) => {
	icon.addEventListener('click', () => {
		const input = icon.parentElement.querySelector('input');
		const isHidden = input.type === 'password';
		input.type = isHidden ? 'text' : 'password';
		icon.innerHTML = isHidden
			? "<i class='bx bxs-lock-open-alt'></i>"
			: "<i class='bx bxs-lock-alt'></i>";
	});
});

// ---------------- Validação simples dos formulários ----------------
function validateInputBox(inputBox) {
	const input = inputBox.querySelector('input');
	let valid = true;

	if (input.type === 'email') {
		valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
	} else if (input.type === 'checkbox') {
		valid = input.checked;
	} else {
		valid = input.value.trim().length >= (input.minLength > 0 ? input.minLength : 1);
	}

	inputBox.classList.toggle('invalid', !valid);
	return valid;
}

document.querySelectorAll('.form-box form, .contact-form-box form').forEach((form) => {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		let formValid = true;

		form.querySelectorAll('.input-box').forEach((box) => {
			const ok = validateInputBox(box);
			if (!ok) formValid = false;
		});

		const messageField = form.querySelector('textarea');
		if (messageField && messageField.hasAttribute('required') && !messageField.value.trim()) {
			formValid = false;
			messageField.style.borderBottomColor = '#ff6b6b';
		} else if (messageField) {
			messageField.style.borderBottomColor = '';
		}

		const feedback = form.querySelector('.form-feedback');

		if (formValid) {
			if (feedback) {
				feedback.textContent = 'Mensagem enviada com sucesso! (demonstração — sem back-end conectado)';
				feedback.className = 'form-feedback success';
			} else {
				const heading = form.querySelector('h2');
				alert(`${heading ? heading.textContent : 'Formulário'} concluído! (demonstração — sem back-end conectado)`);
			}
			form.reset();
			form.querySelectorAll('.input-box').forEach((box) => box.classList.remove('invalid'));
		} else if (feedback) {
			feedback.textContent = 'Confira os campos destacados antes de enviar.';
			feedback.className = 'form-feedback error';
		}
	});

	form.querySelectorAll('input').forEach((input) => {
		input.addEventListener('blur', () => {
			const box = input.closest('.input-box');
			if (box) validateInputBox(box);
		});
	});
});
