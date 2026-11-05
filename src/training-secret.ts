// Training fixtures for the Trivy secret scanner. Not real credentials.
// AKIA must be followed by exactly 16 letters or digits, or the rule does not match.
export const trainingAccessKeyId = "AKIATRAININGONLY0001";

export const trainingSecretAccessKey =
  "aws_secret_access_key=TRAININGONLYNOTAREALSECRETKEY00000000000";

export const trainingPrivateKeyMarker = `-----BEGIN RSA PRIVATE KEY-----
TRAINING-ONLY-NOT-A-REAL-KEY
-----END RSA PRIVATE KEY-----`;
