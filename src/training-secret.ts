// Training fixtures for the Gitleaks secret scan. Not real credentials.
// The 16 characters after AKIA must be A-Z or 2-7. Digits 0, 1, 8, and 9 do not match.
export const trainingAccessKeyId = "AKIABCDFGHJKMNPQRSTU";

export const trainingPrivateKeyMarker = `-----BEGIN RSA PRIVATE KEY-----
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
-----END RSA PRIVATE KEY-----`;
