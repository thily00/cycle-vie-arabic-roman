const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Convertisseur de chiffres arabes en chiffres romains</title>
        <style>
            h1{
                text-align: center;
            }
            /* Style pour le formulaire */
            .form-container {
            width: 300px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f2f2f2;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            /* Style pour le titre du formulaire */
            .form-container h1 {
            font-size: 24px;
            text-align: center;
            margin-bottom: 20px;
            }

            /* Style pour les étiquettes du formulaire */
            .form-container label {
            display: block;
            font-weight: bold;
            margin-bottom: 10px;
            }

            /* Style pour les champs de saisie */
            .form-container input[type="text"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 3px;
            }

            /* Style pour le bouton du formulaire */
            .form-container button {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            }

            /* Style pour le bouton au survol */
            .form-container button:hover {
            background-color: #0056b3;
            }
        </style>
      </head>
      <body>
        <h1>Convertisseur de chiffres arabes en chiffres romains</h1>
        <form class="form-container" method="post" action="/convert">
          <label for="arabicNumber">Entrez un numéro arabe:</label>
          <input type="text" name="arabicNumber" id="arabicNumber" required>
          <button type="submit">Convertir</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/convert', (req, res) => {
  const arabicNumber = parseInt(req.body.arabicNumber);
  if (!isNaN(arabicNumber) && arabicNumber > 0 && arabicNumber < 4000) {
    const romanNumeral = convertToRoman(arabicNumber);
    res.send(`Roman Numeral: ${romanNumeral}`);
  } else {
    res.send('Invalid input. Please enter a valid Arabic number.');
  }
});

function convertToRoman(number) {
    if (number < 1 || number > 3999) {
      return "Invalid input. Please enter a valid Arabic number (1-3999).";
    }
  
    const romanNumerals = [
      ["", "M", "MM", "MMM"],
      ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
      ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
      ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    ];
  
    const thousands = romanNumerals[0][Math.floor(number / 1000)];
    const hundreds = romanNumerals[1][Math.floor((number % 1000) / 100)];
    const tens = romanNumerals[2][Math.floor((number % 100) / 10)];
    const ones = romanNumerals[3][number % 10];
  
    return thousands + hundreds + tens + ones;
  }

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

