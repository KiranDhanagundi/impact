// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51Oc4QtSDyfxnEVq3O5DvhO1LZEKz9kJY0zptfTkNTweD0eN9F8EPprRJl2Nf9HGpMjGCCudr2X6pfk62gCGlEQds00W4hTLGct"
);
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());

const YOUR_DOMAIN = "http://localhost:3000/app";
  
app.post("/create-checkout-session", async (req, res) => {
  try {
    // Extract the cartItems from the request body
    const { cartItems } = req.body;
    // Construct line_items array dynamically from cartItems
    const lineItems = cartItems.map((item) => ({
      price: item.price_id, // Assuming the price ID is stored in the 'id' property of the 'price' object
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: lineItems,
      mode: "payment",
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send({ error: "Failed to create checkout session" });
  }
});

app.get("/session-status", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
});

app.post("/v1/prices", async (req, res) => {
  const price = await stripe.prices.create({
    currency: "usd",
    unit_amount: 10,
    product_data: {
      name: "Test Prod 3",
      active: true,
      description: " Testing prod 3 create product",
      images: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/shoe/l/i/m/6-397173-6-puma-sedate-grey-pel-yellow-sparkling-green-original-imagwhg7fwh5mgsv.jpeg?q=70&crop=false",
      ],
      metadata: {
        user_id: "Kiran124",
        plotform_id: "impact123",
        org_id: "org1234",
      },
    },
  });
  res.send({
    productID: price,
  });
});

// Route to create a product and price
app.post("/create-product-and-price", async (req, res) => {
  try {
    const { title, description, imageUrl, prices } = req.body;

    // Create a product   
    const product = await stripe.products.create({
      name: title,
      active: true,
      description: description,
      images: [imageUrl],
      metadata: {
        user_id: "elonmusk001",
        plotform_id: "impact123",
        org_id: "org1234",
      },
    });

    // Create a price for the product
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: prices,
      currency: "usd",
    });

    // Send the response once
    res.status(201).json({ product, price });
  } catch (error) {
    console.error("Error creating product and price:", error);
    // Send an error response if an error occurs
    res.status(500).json({ error: "Could not create product and price" });
  }
});

// Route to update a Stripe product and price
app.post("/update-product-and-price", async (req, res) => {
  try {
    const productData = {
      name: req.body.name,
      active: true,
      description: req.body.description,
      images: req.body.images,
      metadata: req.body.metadata,
    };

    const priceData = {
      active: true,
      unit_amount: req.body.unit_amount,
      currency: "usd",
    };

    const productId = req.body.id;
    const priceId = req.body.price_id;
    const updatedProduct = await stripe.products.update(productId, productData);
    const updatedPrice = await stripe.prices.update(priceId, priceData);
    res.json({ updatedProduct, updatedPrice });
  } catch (error) {
    console.error("Error updating product and price:", error);
    res.status(500).json({ error: "Failed to update product and price." });
  }
});

app.get("/v1/products", async (req, res) => {
  try {
    // Fetch products
    const products = await stripe.products.list({
      limit: 100,
    });

    // Fetch prices
    const prices = await stripe.prices.list({
      limit: 100,
    });

    res.status(200).json({
      products: products.data,
      prices: prices.data,
    });
  } catch (error) {
    console.error("Error fetching products and prices:", error);
    res.status(500).json({ error: "Unable to fetch products and prices" });
  }
});

app.get("/v1/products/search", async (req, res) => {
  try {
    // Fetch all products
    const products = await stripe.products.list();

    // Fetch all prices
    const prices = await stripe.prices.list();

    // Filter products based on user_id metadata
    const filteredProducts = products.data.filter(
      (product) => product.metadata.user_id === "elonmusk001"
    );

    // Filter prices based on user_id metadata
    const filteredPrices = prices.data.filter((price) =>
      filteredProducts.some((product) => product.id === price.product)
    );

    res.status(200).json({
      products: filteredProducts,
      prices: filteredPrices,
    });
  } catch (error) {
    console.error("Error fetching products and prices:", error);
    res.status(500).json({ error: "Unable to fetch products and prices" });
  }
});

app.get("/api/products/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    // Retrieve product details
    const product = await stripe.products.retrieve(productId);

    // List prices for the product
    const prices = await stripe.prices.list({
      product: productId,
      active: true, // Optional: Filter prices to active ones
    });

    // Combine product and prices data
    const combinedData = {
      product: product,
      prices: prices.data,
    };

    // Send the combined data as JSON response
    res.json(combinedData);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ error: "Failed to fetch product details" });
  }
});

app.get("/v1/treasury/transactions", async (req, res) => {
  try {
    // Fetch a Transactions
    // const transactionss = await stripe.treasury.transactions.list({
    //   // financial_account: "fa_1MtkYw2eZvKYlo2CrqmzUo3O",
    //   limit: 100,
    // });
    const btransactions = await stripe.balanceTransactions.list();

    const transactions = await stripe.paymentIntents.list({ limit: 100 });

    // Send the response once
    res.status(201).json({ transactions });
  } catch (error) {
    console.error("Error creating product and price:", error);
    // Send an error response if an error occurs
    res.status(500).json({ error: "Could not create product and price" });
  }
});

app.get("/stripe/api/paymentdetails/:orderId", async (req, res) => {
  try {
    const piId = req.params.orderId;

    const paymentDetails = await stripe.paymentIntents.retrieve(piId);

    // Send the response once
    res.status(201).json({ paymentDetails });
  } catch (error) {
    console.error("Error creating product and price:", error);
    // Send an error response if an error occurs
    res.status(500).json({ error: "Could not create product and price" });
  }
});

app.listen(4242, () => console.log("Running on port 4242"));
