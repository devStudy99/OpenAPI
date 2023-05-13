import React from "react";
import axios, { AxiosResponse } from "axios";
import { Certification, MerchantUid } from "./type";

declare const window: typeof globalThis & {
  IMP: any;
};

function App() {
  const onClickCertification = () => {
    const { IMP } = window;
    IMP.init(`${process.env.REACT_APP_MERCHANT_IDENTIFICATION_CODE}`);
    const data: MerchantUid = {
      merchant_uid: `mid_${new Date().getTime()}`,
    };
    IMP.certification(data, (res: Certification) => {
      if (res.success) {
        const apiUrl = `http://localhost:${process.env.REACT_APP_SERVER_PORT}/certifications`;
        axios
          .post(
            apiUrl,
            { imp_uid: res.imp_uid },
            { headers: { "Content-Type": "application/json" } }
          )
          .then(
            (
              res: AxiosResponse<{
                isOver18YearsOld: boolean;
                birthday: string;
                name: string;
              }>
            ) => {
              const { isOver18YearsOld, birthday, name } = res.data;
              console.log(isOver18YearsOld, birthday, name);
            }
          )
          .catch((error) => {
            console.error("인증에 실패하였습니다.", error);
          });
      } else {
        alert(`인증에 실패하였습니다. 에러 내용: ${res.error_message}`);
      }
    });
  };

  return <button onClick={onClickCertification}>통합인증</button>;
}

export default App;
