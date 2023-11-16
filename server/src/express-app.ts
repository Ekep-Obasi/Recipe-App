import express, { Express } from "express";
import cors from "cors";
import path from "path";

const startServer = async (app: Express) => {

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(process.cwd(), "/pulic")));
};

export default startServer;
