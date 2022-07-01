import { NextApiRequest, NextApiResponse } from "next";

type FormInputs = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

function sendMessage(formInput: FormInputs): Promise<boolean> {
  // do something to send your message

  return Promise.resolve(true);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;

  switch (req.method) {
    case "POST":
      const now = new Date();
      const payload: FormInputs = JSON.parse(body);
      const success = await sendMessage(payload);

      if (success) {
        res.status(200).end();
      } else {
        res.status(500).end();
      }
      break;

    default:
      res.status(405).end();
      break;
  }
}
