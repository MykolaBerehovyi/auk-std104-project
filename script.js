const birthyear = 2008;

const currentYear = new Date().getFullYear();

document.getElementById("age").textContent = `Age: ${currentYear - birthyear} | `;