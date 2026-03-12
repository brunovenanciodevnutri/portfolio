const isProduction = process.env.NODE_ENV === "production";

const config = {
  urlBase: isProduction ? "https://www.portfoliobrunovenancio.com.br" : "http://localhost:3000",
};

export default config;
