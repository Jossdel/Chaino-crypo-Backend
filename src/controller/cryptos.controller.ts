import express from "express";
import getData from "../plugins/axios.plugin";
const allCryptos = async (req: express.Request, res: express.Response) => {
  try {
    const data = await getData("https://api.coingecko.com/api/v3/coins/list");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "criptocurrencies not found",
    });
  }
};
const getCriptoByid = async (req: express.Request, res: express.Response) => {
  const id = req.params.id;
  try {
    const data = await getData(`https://api.coingecko.com/api/v3/coins/${id}`);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "cryptocurrency not found",
    });
  }
};
export { allCryptos, getCriptoByid };
