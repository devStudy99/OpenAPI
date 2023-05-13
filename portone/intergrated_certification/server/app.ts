import "dotenv/config";
import express, { Request, Response } from "express";
import axios from "axios";
import { ImpUid, AccessToken, Certifications, ResData } from "./type";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/certifications", async (req: Request, res: Response) => {
  const imp_uid: ImpUid = req.body.imp_uid;
  try {
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: {
        imp_key: process.env.PORTONE_REST_API_KEY,
        imp_secret: process.env.PORTONE_REST_API_SECRET,
      },
    });
    const access_token: AccessToken = getToken.data.response.access_token;
    const getCertifications = await axios({
      url: `https://api.iamport.kr/certifications/${imp_uid}`,
      method: "get",
      headers: { Authorization: access_token },
    });
    const { name, birthday }: Certifications = getCertifications.data.response;
    const isOver18YearsOld = isOver18(birthday);
    const data: ResData = {
      isOver18YearsOld,
      birthday,
      name,
    };
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
});

function isOver18(birthday: string): boolean {
  const today = new Date();
  const birthDate = new Date(birthday);
  const yearsDiff = today.getFullYear() - birthDate.getFullYear();

  if (yearsDiff > 18) {
    return true;
  } else if (yearsDiff === 18) {
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    if (todayMonth > birthMonth) {
      return true;
    } else if (todayMonth === birthMonth && todayDay >= birthDay) {
      return true;
    }
  }
  return false;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
