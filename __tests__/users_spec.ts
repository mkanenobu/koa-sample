import request from "supertest";
import { app } from "../src/app";

describe("users", () => {
  test("/users/ returns all users", async () => {
    const response = await request(app.callback()).get("/users/");
    expect(response.status).toBe(200);

    const body = JSON.parse(response.text);

    expect(body.length).toBe(4);
    expect(body.map((b: any) => b.name)).toEqual(
      expect.arrayContaining(["John", "Lisa", "Aria", "Kim"])
    );
  });

  describe("/users/:id", () => {
    test("returns User if exists", async () => {
      const response = await request(app.callback()).get("/users/1");
      expect(response.status).toBe(200);

      const body = JSON.parse(response.text);
      expect(body.name).toBe("John");
    });

    test("returns 404 is not exists", async () => {
      const response = await request(app.callback()).get("/users/-1");
      expect(response.status).toBe(404);
    });
  });
});
