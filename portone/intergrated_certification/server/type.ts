export type ImpUid = string;

export type AccessToken = string;

export type Certifications = {
  name: string;
  birthday: string;
};

export type ResData = {
  isOver18YearsOld: boolean;
} & Certifications;
