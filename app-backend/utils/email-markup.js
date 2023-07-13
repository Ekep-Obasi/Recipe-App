const generateEmailApiKeyMarkUp = (apiKey) => `
<div style=" margin: auto; background-color: #e0e0e0; padding: 2rem; width: fit-content;">
 <center>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWHQm6stTpiicLeRKHusuBOrqrXiM5M07Ns1Tguk&s"
    alt="icon"
    style="margin: auto; width: 75px; border-radius: 50%;"
  />
  </center>
  <center>
  <h3 style=" margin: auto; font-size: 1rem;">Welcome to Our Free API trial</h3>
  </center>
  <div style="margin: 1rem;">
    <span>View our Api documentation by visiting &nbsp;</span>
    <a href="http://localhost:5000/api-docs">tastie.drinks.documentation</a>
  </div>
  <p>
    Your API Key:
  </p>
  <p
      style=" margin: auto; 
        font-weight: bold;
        font-size: 0.7rem;
        padding: 1rem;
        font-family: monospace;
      "
    >
      ${apiKey}
    </p>
  <center>
  <button
    type="button"
    style=" margin: auto; 
      background-color: #ff5d3e;
      border: none;
      padding: 0.4rem 0.8rem;
      margin: auto;
    "
  >
    <a
      href="/"
      style=" margin: auto; 
        text-decoration: none;
        color: #fff;
        font-size: 0.65rem;
        cursor: pointer;
      "
      >Try your API key Now</a
    >
  </button>
  </center>
  <div></div>
</div>
`;

module.exports = generateEmailApiKeyMarkUp;
