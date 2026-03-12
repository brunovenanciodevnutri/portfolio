const isProduction = import.meta.env.PROD;

const config = {
  urlBase: isProduction ? "https://www.brunovenanciodev.com" : "http://localhost:3000",
};

export default config;
