import axios from "axios";
export default async function (req, res) {
  if (req.method === "GET") {
    const response = await fetch(`${process.env.API_URL}/schedules`);
    const data = await response.json();

    return res.send(data);
  }

  if (req.method === "POST" || req.method === "PATCH") {
    const { id, title, description, link, priority, timeToEnd } = req.body;

    let url = `${process.env.API_URL}/schedules`;

    if (!title || !description || !link || !priority || !timeToEnd) {
      return res.status(422).send("Data is missing or incomplete");
    }

    if (req.method === "PATCH") {
      url += `/${id}`;
    }

    try {
      const axiRes = await axios[req.method.toLowerCase()](url, req.body);
      return res.send(axiRes.data);
    } catch {
      return res.status(422).send("Data unable to be stored");
    }
  }
}
