const corsOptions = {
  allowedHeaders: ["Content-Type, Authorization"],
  exposedHeaders: ["Content-Type"],
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

export default corsOptions;
