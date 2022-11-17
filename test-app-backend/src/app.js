const { data, offlinedata } = require("./utils/data");
const { apiCall } = require("./service/apiCall");

const checkServersIsOnline = (serversDetail) => {
  return new Promise((resolve, reject) => {
    /**  parallel call server request */
    Promise.allSettled(serversDetail.map((obj) => apiCall(obj))).then(
      (results) => {
        /** check status of request fulfilled or rejected */
        const result = results.filter((obj) => obj.status === "fulfilled");
        if (result.length === 0) {
          /** reject when all server is going offline */
          return reject("No servers are online");
        }
        return resolve(
          result.sort((a, b) => a.value.priority - b.value.priority)
        );
      }
    );
  });
};

const findServer = async (data) => {
  try {
    /** return response when any one of server is running */
    const result = await checkServersIsOnline(data);
    return result;
  } catch (err) {
    /** return error when all server is offline */
    return err;
  }
};

findServer(data)
  .then((res) => console.log("Response ", res))
  .catch((err) => console.error("Error", err.message));

module.exports = { findServer };
