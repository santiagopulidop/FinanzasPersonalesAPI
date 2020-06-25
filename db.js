/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");

module.exports = () => {
  const data = {
    users: [
      {
        id: 0,
        nombre: "Cristian",
        password: 123456789,
        correo: "cristian@email.com",
        progreso: [
          {
            nivel1: 0,
            nivel2: 0,
            nivel3: 0,
            nivel4: 0,
            nivel5: 0,
          },
        ],
      },
      {
        id: 1,
        nombre: "Tatiana",
        password: 123456789,
        correo: "tatiana@email.com",
        progreso: [
          {
            nivel1: 0,
            nivel2: 0,
            nivel3: 0,
            nivel4: 0,
            nivel5: 0,
          },
        ],
      },
      {
        id: 2,
        nombre: "Santiago",
        password: 123456789,
        correo: "santiago@email.com",
        progreso: [
          {
            nivel1: 0,
            nivel2: 0,
            nivel3: 0,
            nivel4: 0,
            nivel5: 0,
          },
        ],
      },
    ],
  };
  return data;
};
