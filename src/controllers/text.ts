import { Request, Response } from "express";
import Text from "../models/text";
import mongoose, { mongo } from "mongoose";
import { getTextMetrics } from "../utils/metricHelpers";

export const getTextMeta = async (req: Request, res: Response) => {
  try {
    const { id, type } = req.params;
    const textData = await Text.findById(id);
    if (!textData) {
      return res.status(404).json({ error: "Text data not found." });
    }
    const result = getTextMetrics(textData?.data, type);
    return res.json({ data: { [type]: result } });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message });
  }
};
