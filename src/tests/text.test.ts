import request from "supertest";
import express from "express";
import { authenticateJWT } from "../middlewares/auth";
import { getTextMeta } from "../controllers/text";
import { mockTextData } from "./mocks";
import { getTextMetrics } from "../utils/metricHelpers";
import { clear } from "console";

const app = express();
app.use(express.json());
app.get("/text/:id/:type", async (req, res) => {
  const mockData = mockTextData.find((dt) => dt.id === req.params.id);
  const response = getTextMetrics(mockData?.data as string, req.params.type);
  res.status(response ? 200 : 400).send({ [req.params.type]: response });
});

describe("GET /text/:id/:type", () => {
  it("should return the correct word count for a given text", async () => {
    const response = await request(app).get(
      "/text/66e1d7062dbeb87e9952f280/words"
    );
    expect(response.status).toBe(200);
    expect(response.body.words).toBe(16);
  });

  it("should handle an empty string", async () => {
    const response = await request(app).get(
      "/text/66e1d7062dbeb87e9952f281/chars"
    );
    expect(response.status).toBe(200);
    expect(response.body.wordCount).toBe(0);
  });

  it("should handle text with multiple spaces between words", async () => {
    const response = await request(app)
      .post("/wordCount")
      .send({ text: "Hello    world    " });
    expect(response.status).toBe(200);
    expect(response.body.wordCount).toBe(2);
  });

  it("should return 400 for invalid input", async () => {
    const response = await request(app)
      .post("/wordCount")
      .send({ text: 12345 });
    expect(response.status).toBe(400);
    expect(response.text).toBe("Invalid input");
  });
});
