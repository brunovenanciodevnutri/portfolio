const isProduction = import.meta.env.PROD;

const config = {
  urlBase: isProduction ? "portfoliobrunovenanciodev.vercel.app" : "http://localhost:3000",
};

export default config;
