export default {
  jwt: {
    secret: process.env.APP_SECRET ?? '1ea4a45d8a9e2e4f4c1e498b8b5335f8',
    expiresIn: '1d',
  },
};
