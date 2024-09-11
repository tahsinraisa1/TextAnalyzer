import { Request, Response } from "express";
import Text from "../models/text";

export const getTextMeta = async (req: Request, res: Response) => {
  try {
    res.json({});
  } catch (error: any) {
    res.status(500).json({ error: error?.message });
  }
};
