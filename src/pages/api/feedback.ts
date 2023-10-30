import type {APIRoute} from "astro";
import sendGrid from "@sendgrid/mail";

sendGrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const POST: APIRoute = async ({request}) => {
  const formData = await request.formData();

  const object: any = {};
  formData.forEach((value, key) => (object[key] = value));

  console.info(`Request form data`, JSON.stringify(object));
  console.table(object);

  const name = formData.get("name");
  const email = formData.get("email");
  const menu = formData.get("menu");
  const mealWish = formData.get("mealWish");
  const wish = formData.get("wish");

  // Validate the data
  if (!name || !email || !menu) {
    return new Response(JSON.stringify({message: "Missing required fields"}), {status: 400});
  }

  // SVARGA:
  // Do something with the data, then return a success response
  return new Response(JSON.stringify({message: "Success!"}), {status: 201});
};
