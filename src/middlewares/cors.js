"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corsOptions = {
    allowedHeaders: ["Content-Type, Authorization"],
    exposedHeaders: ["Content-Type"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
};
exports.default = corsOptions;
