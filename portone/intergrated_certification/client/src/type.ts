export type MerchantUid = {
  merchant_uid: string;
};

export interface Certification {
  error_code: string;
  error_message: string;
  imp_uid: string;
  merchant_uid: string;
  pg_provider: string;
  pg_type: string;
  success: boolean;
}
