(() => {
    const $ = window.jQuery;

    if (!$) {
        console.error('jQuery is not loaded: functions.js requires jQuery.');
        return;
    }

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

        if (!mapFrames.length) {
            return;
        }

        const loadMap = (frame) => {
            const mapSrc = frame.getAttribute('data-map-src');

            if (!mapSrc || frame.getAttribute('src')) {
                return;
            }

            frame.setAttribute('src', mapSrc);
        };

        if (!('IntersectionObserver' in window)) {
            mapFrames.forEach(loadMap);
            return;
        }

        const observer = new IntersectionObserver((entries, io) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                loadMap(entry.target);
                io.unobserve(entry.target);
            });
        }, {
            rootMargin: '220px 0px'
        });

        mapFrames.forEach((frame) => observer.observe(frame));
    }

    function getActiveData() {
        return locationData[activeLocation];
    }

    function escapeHtml(text) {
        return text
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#39;');
    }

    function renderLocationButtons() {
        $('.location-switcher button').removeClass('active-location bold');
        $(`.location-switcher button[data-location="${activeLocation}"]`).addClass('active-location bold');
    }

    function renderPackageButtons() {
        const data = getActiveData();

        packageOrder.forEach((key) => {
            const $btn = $(`.buttons-div button[data-package="${key}"]`);
            $btn.text(data.packageLabels[key]);
        });

        $('.buttons-div button').removeClass('bold');
        $(`.buttons-div button[data-package="${activePackage}"]`).addClass('bold');
    }

    function renderPackageContent() {
        const data = getActiveData();
        const packageText = data.packageLabels[activePackage];

        $('#package-name-title').text(packageText).css('color', packageColors[activePackage]);
        $('#package').empty();

        data.content[activePackage].forEach((item) => {
            $('#package').append(`<p>${escapeHtml(item)}</p>`);
        });

        $('#package').parent().css('background-color', packageColors[activePackage]);
    }

    function renderAddons() {
        const data = getActiveData();
        const $form = $('#addons-form');

        $form.empty();

        data.addons.forEach((addon) => {
            const html = `
                <div class="form-check mb-2" data-addon-id="${addon.id}">
                    <input class="form-check-input" type="checkbox" value="${addon.value}" id="${addon.id}" name="${addon.id}">
                    <label class="form-check-label" for="${addon.id}">${escapeHtml(addon.label)}</label>
                </div>
            `;
            $form.append(html);
        });

        if (data.special.extraKidsPackage) {
            const kidsHtml = `
                <div class="form-check mb-2 d-flex flex-column d-none" id="extra-kids-block">
                    <hr class="extra-kids-divider">
                    <label class="label mb-2">Dodatno djece:</label>
                    <div class="number-input d-flex flex-row align-items-center">
                        <button type="button" class="m-2 child-minus"></button>
                        <input class="quantity" min="0" value="0" type="number" readonly>
                        <button type="button" class="m-2 plus child-plus"></button>
                    </div>
                </div>
            `;
            $form.append(kidsHtml);
        }
    }

    function resetAddons() {
        $('#addons-form input.form-check-input').prop('checked', false).prop('disabled', false);
        $('#addons-form .form-check').removeClass('grow');
        $('#message').hide().text('');

        extraKidsCount = 0;
        $('#extra-kids-block input.quantity').val(0);
        $('#extra-kids-block').addClass('d-none');
    }

    function applySpecialPackageRules() {
        const data = getActiveData();
        const special = data.special;

        if (special.freeItemsPackage === activePackage && special.freeItemsMessage) {
            $('#message').text(special.freeItemsMessage).show().addClass('grow');
        }

        if (special.packageDefaults[activePackage]) {
            special.packageDefaults[activePackage].forEach((id) => {
                const $input = $(`#${id}`);
                $input.prop('checked', true);
                $input.prop('disabled', true);
                $input.closest('.form-check').addClass('grow');
            });
        }

        if (special.extraKidsPackage === activePackage) {
            $('#extra-kids-block').removeClass('d-none');
        }
    }

    function recalcPrice() {
        const data = getActiveData();
        const special = data.special;

        let price = data.prices[activePackage];
        const isFreeItemPackage = special.freeItemsPackage === activePackage;

        if (!isFreeItemPackage) {
            $('#addons-form input.form-check-input:checked').each(function () {
                price += parseInt($(this).val(), 10);
            });
        }

        if (special.extraKidsPackage === activePackage) {
            price += extraKidsCount * special.extraKidStep;
        }

        $('#price').html(`${price}€`);
    }

    function updateAllUI() {
        renderLocationButtons();
        renderPackageButtons();
        renderPackageContent();
        resetAddons();
        applySpecialPackageRules();
        recalcPrice();
    }

    $('.location-switcher button').on('click', function () {
        const newLocation = $(this).data('location');
        if (newLocation === activeLocation) {
            return;
        }

        activeLocation = newLocation;
        activePackage = 'basic';
        renderAddons();
        updateAllUI();
    });

    $('.buttons-div button').on('click', function () {
        activePackage = $(this).data('package');
        updateAllUI();
    });

    $('#addons-form').on('change', 'input.form-check-input', function () {
        const data = getActiveData();
        const special = data.special;
        const isFreeItemPackage = special.freeItemsPackage === activePackage;

        if (isFreeItemPackage && $(this).is(':checked')) {
            const selectedCount = $('#addons-form input.form-check-input:checked').length;
            if (selectedCount > special.freeItemsLimit) {
                $(this).prop('checked', false);
                $(this).closest('.form-check').removeClass('grow');
                return;
            }
        }

        $(this).closest('.form-check').toggleClass('grow', $(this).is(':checked'));
        recalcPrice();
    });

    $('#addons-form').on('click', '.child-plus', function () {
        extraKidsCount += 1;
        $('#extra-kids-block input.quantity').val(extraKidsCount);
        recalcPrice();
    });

    $('#addons-form').on('click', '.child-minus', function () {
        if (extraKidsCount === 0) {
            return;
        }

        extraKidsCount -= 1;
        $('#extra-kids-block input.quantity').val(extraKidsCount);
        recalcPrice();
    });

    initLazyMaps();
    renderAddons();
    updateAllUI();
})();
