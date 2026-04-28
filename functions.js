(() => {
    const locationData = {
        otona: {
            packageLabels: {
                basic: 'OSNOVNI PAKET',
                package1: 'TEMATSKI PAKET',
                package2: 'NAPUHANAC PAKET',
                package3: 'MAGIC PAKET'
            },
            content: {
                basic: [
                    '2 ANIMATORA',
                    '2 SATA ROĐENDANA',
                    'POZIVNICE (STANDARDNE ILI ONLINE)',
                    'NEOGRANIČENI SOKOVI I GRICKALICE',
                    'FOTOGRAFIJE S ROĐENDANA',
                    'TORTA',
                    'POKLONČIĆI',
                    'NEOGRANIČEN BROJ DJECE'
                ],
                package1: [
                    'OSNOVNI PAKET',
                    'PIZZA',
                    'TEMA',
                    'PRIMJERI TEMA:',
                    'ŠPIJUNSKI ROĐENDAN',
                    'HARRY POTTER ROĐENDAN',
                    'PIDŽAMA PARTY (KOKTELI/SLUSHY, SVJETLEĆE NARUKVICE, VATROMET NA TORTI...)',
                    'GUSARSKI ROĐENDAN (GUSARSKI PLES I IGRE)',
                    'SPORTSKI ROĐENDAN',
                    'DISCO ROĐENDAN (KOREOGRAFIJE, KARAOKE...)',
                    'GLAMOUR ROĐENDAN (MAKE UP, FACEPAINTING, TETOVAŽE...)'
                ],
                package2: [
                    'OSNOVNI PAKET',
                    'PIZZA',
                    'DISCO NAPUHANAC'
                ],
                package3: [
                    'OSNOVNI PAKET',
                    'PIZZA',
                    'MAĐIONIČAR'
                ]
            },
            prices: {
                basic: 170,
                package1: 210,
                package2: 250,
                package3: 270
            },
            addons: [
                { id: 'add1', value: 20, label: 'Torta (20€)' },
                { id: 'add2', value: 30, label: 'Pizza (30€)' },
                { id: 'add3', value: 20, label: 'Pinjata (20€)' },
                { id: 'add4', value: 20, label: 'Tema (20€)' },
                { id: 'add5', value: 5, label: 'Šampanjac (5€)' },
                { id: 'add6', value: 20, label: 'Facepainting ili tattoo (20€)' },
                { id: 'add7', value: 5, label: 'Fontana na torti (5€)' },
                { id: 'add8', value: 30, label: 'Pola sata više (30€)' },
                { id: 'add9', value: 10, label: 'Pokrivka za tortu (10€)' }
            ],
            mapSrc: 'https://www.google.com/maps?q=Ulica+Otona+Kucere+74,+Zagreb&output=embed',
            special: {
                freeItemsPackage: null,
                freeItemsLimit: 0,
                packageDefaults: {},
                extraKidsPackage: null,
                extraKidStep: 0,
                freeItemsMessage: ''
            }
        },
        dobojska: {
            packageLabels: {
                basic: 'OSNOVNI PAKET',
                package1: 'PAKET 1',
                package2: 'PAKET 2',
                package3: 'ČAROBNA AVANTURA'
            },
            content: {
                basic: [
                    'NEOGRANIČEN BROJ DJECE',
                    '2 SATA ANIMACIJE',
                    '2 ANIMATORA',
                    'GRICKALICE I SOKOVI',
                    'FOTOGRAFIJE',
                    'SVJEĆICE',
                    'BUBBLE MACHINE'
                ],
                package1: [
                    'NEOGRANIČEN BROJ DJECE',
                    '2 SATA ANIMACIJE',
                    '2 ANIMATORA',
                    'GRICKALICE I SOKOVI',
                    'FOTOGRAFIJE',
                    'SVJEĆICE',
                    'BUBBLE MACHINE'
                ],
                package2: [
                    'NEOGRANIČEN BROJ DJECE',
                    '2 SATA ANIMACIJE',
                    '2 ANIMATORA',
                    'GRICKALICE I SOKOVI',
                    'FOTOGRAFIJE',
                    'SVJEĆICE',
                    'BUBBLE MACHINE'
                ],
                package3: [
                    'MAĐIONIČARSKA PREDSTAVA U TRAJANJU OD 35 MIN',
                    'DO 15 DJECE',
                    '2 SATA ROĐENDANA',
                    '2 ANIMATORA',
                    'GRICKALICE I SOKOVI',
                    'FOTOGRAFIJE',
                    'SVJEĆICE',
                    'BUBBLE MACHINE'
                ]
            },
            prices: {
                basic: 100,
                package1: 120,
                package2: 150,
                package3: 200
            },
            addons: [
                { id: 'add1', value: 15, label: 'Pinjata (15€)' },
                { id: 'add2', value: 15, label: 'Pizza (15€)' },
                { id: 'add3', value: 15, label: 'Tema (Harry Potter, sport, zvijezde...) (15€)' },
                { id: 'add4', value: 5, label: 'Šampanjac (5€)' },
                { id: 'add5', value: 5, label: 'Poklončići za ekipu (5€)' },
                { id: 'add6', value: 15, label: 'Torta (15€)' },
                { id: 'add7', value: 15, label: 'Face Painting (15€)' },
                { id: 'add8', value: 5, label: 'Fontana svjećica na torti (5€)' },
                { id: 'add9', value: 15, label: 'Korištenje jedne prostorije za roditelje (15€)' },
                { id: 'add10', value: 15, label: 'Pola sata više zabave (15€)' },
                { id: 'add11', value: 10, label: 'Pokrivka za tortu (10€)' },
                { id: 'add12', value: 5, label: '2 isprintane fotke na foto papiru (5€)' }
            ],
            mapSrc: 'https://www.google.com/maps?q=Dobojska+ulica+36c,+Zagreb&output=embed',
            special: {
                freeItemsPackage: 'package2',
                freeItemsLimit: 5,
                packageDefaults: {
                    package1: ['add5', 'add6']
                },
                extraKidsPackage: 'package3',
                extraKidStep: 5,
                freeItemsMessage: '* odaberi besplatno do 5 artikala iz posebne ponude'
            }
        }
    };

    const packageOrder = ['basic', 'package1', 'package2', 'package3'];
    const packageColors = {
        basic: '#3F84B9',
        package1: '#494AA3',
        package2: '#8FDB83',
        package3: '#bb99ff'
    };

    let activeLocation = 'dobojska';
    let activePackage = 'basic';
    let extraKidsCount = 0;

    function initLazyMaps() {
        const mapFrames = document.querySelectorAll('iframe[data-map-src]');
        if (!mapFrames.length) return;

        const loadMap = (frame) => {
            const mapSrc = frame.getAttribute('data-map-src');
            if (!mapSrc || frame.getAttribute('src')) return;
            frame.setAttribute('src', mapSrc);
        };

        if (!('IntersectionObserver' in window)) {
            mapFrames.forEach(loadMap);
            return;
        }

        const observer = new IntersectionObserver((entries, io) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                loadMap(entry.target);
                io.unobserve(entry.target);
            });
        }, { rootMargin: '220px 0px' });

        mapFrames.forEach((frame) => observer.observe(frame));
    }

    function getActiveData() {
        return locationData[activeLocation];
    }

    function renderLocationButtons() {
        document.querySelectorAll('.location-switcher button').forEach((btn) => {
            btn.classList.remove('active-location', 'bold');
        });
        const activeBtn = document.querySelector(`.location-switcher button[data-location="${activeLocation}"]`);
        if (activeBtn) activeBtn.classList.add('active-location', 'bold');
    }

    function renderPackageButtons() {
        const data = getActiveData();

        packageOrder.forEach((key) => {
            const btn = document.querySelector(`.buttons-div button[data-package="${key}"]`);
            if (btn) btn.textContent = data.packageLabels[key];
        });

        document.querySelectorAll('.buttons-div button').forEach((btn) => btn.classList.remove('bold'));
        const activeBtn = document.querySelector(`.buttons-div button[data-package="${activePackage}"]`);
        if (activeBtn) activeBtn.classList.add('bold');
    }

    function renderPackageContent() {
        const data = getActiveData();
        const packageText = data.packageLabels[activePackage];

        const titleEl = document.getElementById('package-name-title');
        if (titleEl) {
            titleEl.textContent = packageText;
            titleEl.style.color = packageColors[activePackage];
        }

        const packageEl = document.getElementById('package');
        if (packageEl) {
            packageEl.innerHTML = '';
            data.content[activePackage].forEach((item) => {
                const p = document.createElement('p');
                p.textContent = item;
                packageEl.appendChild(p);
            });
            packageEl.parentElement.style.backgroundColor = packageColors[activePackage];
        }
    }

    function renderAddons() {
        const data = getActiveData();
        const form = document.getElementById('addons-form');
        if (!form) return;

        form.innerHTML = '';

        data.addons.forEach((addon) => {
            const div = document.createElement('div');
            div.className = 'form-check mb-2';
            div.dataset.addonId = addon.id;

            const input = document.createElement('input');
            input.className = 'form-check-input';
            input.type = 'checkbox';
            input.value = addon.value;
            input.id = addon.id;
            input.name = addon.id;

            const label = document.createElement('label');
            label.className = 'form-check-label';
            label.htmlFor = addon.id;
            label.textContent = addon.label;

            div.appendChild(input);
            div.appendChild(label);
            form.appendChild(div);
        });

        if (data.special.extraKidsPackage) {
            const kidsDiv = document.createElement('div');
            kidsDiv.className = 'form-check mb-2 d-flex flex-column d-none';
            kidsDiv.id = 'extra-kids-block';
            kidsDiv.innerHTML = `
                <hr class="extra-kids-divider">
                <label class="label mb-2">Dodatno djece:</label>
                <div class="number-input d-flex flex-row align-items-center">
                    <button type="button" class="m-2 child-minus"></button>
                    <input class="quantity" min="0" value="0" type="number" readonly>
                    <button type="button" class="m-2 plus child-plus"></button>
                </div>
            `;
            form.appendChild(kidsDiv);
        }
    }

    function resetAddons() {
        document.querySelectorAll('#addons-form input.form-check-input').forEach((input) => {
            input.checked = false;
            input.disabled = false;
        });
        document.querySelectorAll('#addons-form .form-check').forEach((el) => el.classList.remove('grow'));

        const message = document.getElementById('message');
        if (message) {
            message.style.display = 'none';
            message.textContent = '';
        }

        extraKidsCount = 0;
        const quantityInput = document.querySelector('#extra-kids-block input.quantity');
        if (quantityInput) quantityInput.value = 0;

        const extraKidsBlock = document.getElementById('extra-kids-block');
        if (extraKidsBlock) extraKidsBlock.classList.add('d-none');
    }

    function applySpecialPackageRules() {
        const data = getActiveData();
        const special = data.special;

        if (special.freeItemsPackage === activePackage && special.freeItemsMessage) {
            const message = document.getElementById('message');
            if (message) {
                message.textContent = special.freeItemsMessage;
                message.style.display = '';
                message.classList.add('grow');
            }
        }

        if (special.packageDefaults[activePackage]) {
            special.packageDefaults[activePackage].forEach((id) => {
                const input = document.getElementById(id);
                if (!input) return;
                input.checked = true;
                input.disabled = true;
                input.closest('.form-check').classList.add('grow');
            });
        }

        if (special.extraKidsPackage === activePackage) {
            const extraKidsBlock = document.getElementById('extra-kids-block');
            if (extraKidsBlock) extraKidsBlock.classList.remove('d-none');
        }
    }

    function recalcPrice() {
        const data = getActiveData();
        const special = data.special;

        let price = data.prices[activePackage];
        const isFreeItemPackage = special.freeItemsPackage === activePackage;

        if (!isFreeItemPackage) {
            document.querySelectorAll('#addons-form input.form-check-input:checked').forEach((input) => {
                price += parseInt(input.value, 10);
            });
        }

        if (special.extraKidsPackage === activePackage) {
            price += extraKidsCount * special.extraKidStep;
        }

        const priceEl = document.getElementById('price');
        if (priceEl) priceEl.textContent = `${price}€`;
    }

    function updateAllUI() {
        renderLocationButtons();
        renderPackageButtons();
        renderPackageContent();
        resetAddons();
        applySpecialPackageRules();
        recalcPrice();
    }

    document.querySelectorAll('.location-switcher button').forEach((btn) => {
        btn.addEventListener('click', function () {
            const newLocation = this.dataset.location;
            if (newLocation === activeLocation) return;
            activeLocation = newLocation;
            activePackage = 'basic';
            renderAddons();
            updateAllUI();
        });
    });

    document.querySelectorAll('.buttons-div button').forEach((btn) => {
        btn.addEventListener('click', function () {
            activePackage = this.dataset.package;
            updateAllUI();
        });
    });

    const addonsForm = document.getElementById('addons-form');

    addonsForm.addEventListener('change', function (e) {
        if (!e.target.matches('input.form-check-input')) return;

        const data = getActiveData();
        const special = data.special;
        const isFreeItemPackage = special.freeItemsPackage === activePackage;

        if (isFreeItemPackage && e.target.checked) {
            const selectedCount = document.querySelectorAll('#addons-form input.form-check-input:checked').length;
            if (selectedCount > special.freeItemsLimit) {
                e.target.checked = false;
                e.target.closest('.form-check').classList.remove('grow');
                return;
            }
        }

        e.target.closest('.form-check').classList.toggle('grow', e.target.checked);
        recalcPrice();
    });

    addonsForm.addEventListener('click', function (e) {
        if (e.target.matches('.child-plus')) {
            extraKidsCount += 1;
            const qty = document.querySelector('#extra-kids-block input.quantity');
            if (qty) qty.value = extraKidsCount;
            recalcPrice();
        } else if (e.target.matches('.child-minus')) {
            if (extraKidsCount === 0) return;
            extraKidsCount -= 1;
            const qty = document.querySelector('#extra-kids-block input.quantity');
            if (qty) qty.value = extraKidsCount;
            recalcPrice();
        }
    });

    initLazyMaps();
    renderAddons();
    updateAllUI();
})();
