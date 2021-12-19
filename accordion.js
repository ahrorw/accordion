const accordion = (triggersSelector) => { // select to main.js main accordion-selector
	/* const btns = document.querySelectorAll(triggersSelector);

	btns.forEach(btn => {
		btn.addEventListener('click', function() {
			if (!this.classList.contains('active-style')) {
				btns.forEach(btn => {
					btn.classList.remove('active-style');
					btn.nextElementSibling.classList.remove('active-content');
				});
			}

			this.classList.toggle('active-style');
			this.nextElementSibling.classList.toggle('active-content');
		});
	}); */
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
};

export default accordion;
