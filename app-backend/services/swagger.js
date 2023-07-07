const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    servers: [{ url: "http://localhost:5000/" }],
    info: {
      title: "Drinks Api",
      version: "1.0.0",
      description:
        "This is a simple Drinks Api made with Express Js and documented by swagger",

      contact: {
        name: "Ekep Obasi",
        url: "https://github.com/Ekep-Obasi",
        email: "arreyettaekep@gmail.com",
      },
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
  },
  apis: ["./routes/*.js"],
};

const openapiSpecification = swaggerJsDoc(options);

module.exports = openapiSpecification;
