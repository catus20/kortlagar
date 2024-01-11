document.addEventListener('DOMContentLoaded', function () {
 
    const lagKortButton = document.querySelector('.button button');

    lagKortButton.addEventListener('click', function () {
        // Hent verdier fra skjemaet
        const overskrift = document.getElementById('navn').value;
        const tekst = document.getElementById('tekst').value;
        const fra = document.getElementById('fra').value;
        const valgtBilde = document.querySelector('.bilde select').value;
        const skriftfarge = document.getElementById('skriftfarge').value;
        const bakgrunnsfarge = document.getElementById('bkfarge').value;

        // Opprett kortet med de valgte verdiene
        const kort = document.createElement('div');
        kort.className = 'generertKort';
        kort.innerHTML = `
            <h2 style="color: ${skriftfarge}; font-size: 24px;">${overskrift}</h2>
            <img src="${valgtBilde}" alt="Valgt bilde" style="max-width: 60%; margin-top: 10px;">
            <p style="color: ${skriftfarge}; font-size: 24px;">${tekst} </p>
            <p style="color: ${skriftfarge}; font-size: 16px;"> <strong>Frå:</strong> ${fra}</p>
        `;

        // Stil kortet
        kort.style.backgroundColor = bakgrunnsfarge;
        kort.style.borderRadius = '20px';
        kort.style.padding = '20px';
        kort.style.width = '600px'; 
        kort.style.height = '700px';
        kort.style.margin = '0 auto';
        kort.style.maxWidth = '100%';
        kort.style.boxSizing = 'border-box';

        // Skjul skjemaet
        document.querySelector('.julekortDiv').style.display = 'none';

        // Legg til kortet i body
        document.body.appendChild(kort);

        // Legg til knapper
        const knappContainer = document.createElement('div');
        knappContainer.className = 'knapp-container';
        knappContainer.innerHTML = `
            <button onclick="gåTilbake()">Gå tilbake til kortgeneratoren</button>
            <button onclick="printKort()">Print julekortet</button>
        `;
        
        // Stil knapp-container
        knappContainer.style.textAlign = 'center';
        knappContainer.style.marginTop = '20px';

        // Legg til knapp-container under kortet
        document.body.appendChild(knappContainer);
    });
});

function gåTilbake() {
    // Vis skjemaet og fjern det genererte kortet og knappene
    document.querySelector('.julekortDiv').style.display = 'block';
    document.querySelector('.generertKort').remove();
    document.querySelector('.knapp-container').remove();
}

function printKort() {
    // Åpne printvinduet
    window.print();
}