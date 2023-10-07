import { useState } from "react";
import { axiosWithAuth } from "../utilities/AxiosWithAuth";

export const useAxios = ({
  reqType,
  endPoint,
  payload,
  config,
  initialValue,
}) => {
  const [data, setData] = (useState = initialValue);
  const [loading, setLoading] = (useState = false);
  const [err, setErr] = (useState = "");

  const doRequest = () => {
    setLoading(true);
    return axiosWithAuth()
      [reqType](endPoint, payload, config)
      .then((res) => {
        setData(res.data);
        return res.data;
      })
      .catch((err) => {
        setErr(err);
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [data, doRequest, loading, err];
};
