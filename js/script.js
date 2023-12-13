// Get the form element
const form = document.querySelector('form');

// Add event listener to the form submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const recipient = document.getElementById('recipient').value;
    const message = document.getElementById('message').value;

    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 800; // Increase the width to make it bigger
    canvas.height = 400; // Increase the height to make it bigger

    // Get the canvas context
    const ctx = canvas.getContext('2d');

    // Set the background color
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text color and font
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';

    // Draw the message on the canvas
    ctx.fillText(recipient, 20, 50);
    ctx.fillText(message, 20, 100);

    // Draw a star in the middle of the canvas
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2 - 100);
    ctx.lineTo(canvas.width / 2 + 15, canvas.height / 2 + 45);
    ctx.lineTo(canvas.width / 2 - 15, canvas.height / 2 + 45);
    ctx.closePath();
    ctx.fill();

    // Draw additional lines to complete the star shape
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2 - 100);
    ctx.lineTo(canvas.width / 2 + 30, canvas.height / 2 + 45);
    ctx.lineTo(canvas.width / 2 - 30, canvas.height / 2 + 45);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2 - 100);
    ctx.lineTo(canvas.width / 2 + 15, canvas.height / 2 + 75);
    ctx.lineTo(canvas.width / 2 - 15, canvas.height / 2 + 75);
    ctx.closePath();
    ctx.fill();
    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL('image/png');

    // Create a link element
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'kort.png';
    link.click();
});
