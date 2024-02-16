const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/create-checkout-session", // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: "http://localhost:4242", // Specify the target URL of your server
      changeOrigin: true,
    })
  );
  app.use(
    "/session-status", // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: "http://localhost:4242", // Specify the target URL of your server
      changeOrigin: true,
    })
  );

  app.use(
    "/v1/prices", // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: "http://localhost:4242", // Specify the target URL of your server
      changeOrigin: true,
    })
  );
  app.use(
    "/create-product-and-price", // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: "http://localhost:4242", // Specify the target URL of your server
      changeOrigin: true,
    })
  );
  app.use(
    "/v1/products", // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: "http://localhost:4242", // Specify the target URL of your server
      changeOrigin: true,
    })
  );
  app.use(
    "/v1/products/search", // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: "http://localhost:4242", // Specify the target URL of your server
      changeOrigin: true,
    })
  );

  app.use(
    "/v1/treasury/transactions", // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: "http://localhost:4242", // Specify the target URL of your server
      changeOrigin: true,
    })
  );

  app.use(
    "/update-product-and-price", // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: "http://localhost:4242", // Specify the target URL of your server
      changeOrigin: true,
    })
  );

  app.use(
    "/stripe/api/paymentdetails", // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: "http://localhost:4242", // Specify the target URL of your server
      changeOrigin: true,
    })
  );
};
