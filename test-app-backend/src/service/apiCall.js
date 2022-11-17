const axios = require("axios");
/**
 *
 * @param {*} obj
 * @returns Promises
 */
const apiCall = (obj) => {
  /** call API return Promise */
  return new Promise((resolve, reject) => {
    /**timeout after 5 sec */
    setTimeout(() => {
      axios
        .get(obj.url)
        .then((res) => {
          if (res.status >= 200 && res.status <= 299) {
            return resolve(obj);
          }
        })
        .catch((err) => {
          return reject(err);
        });
    }, 5000);
  });
};

module.exports = { apiCall };
