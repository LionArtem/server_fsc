const ERROR__INCORRECT = 400;
const ERROR__NOT__FOUND = 404;
const ERROR__DEFAULT = 500;
const ERROR__REPEATS_EMAIL = 409;
const ERROR__AUTHORIZATION = 401;
const ERROR__NO_ACCESS = 403;
const regularAvatar = /^(ftp|http|https):\/\/[^ "]+$/;
const regularLink = /^(ftp|http|https):\/\/[^ "]+$/;
const regularEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const listDomen = [
  'http://localhost:3001',
];

module.exports = {
  ERROR__INCORRECT,
  ERROR__NOT__FOUND,
  ERROR__DEFAULT,
  ERROR__REPEATS_EMAIL,
  ERROR__AUTHORIZATION,
  ERROR__NO_ACCESS,
  regularAvatar,
  regularLink,
  regularEmail,
  listDomen,
};
