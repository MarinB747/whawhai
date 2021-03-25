import React from "react";
import axios from "axios";

export const fetchWarriorData = async () => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "Status",
      params: {
        WarriorType: "",
      },
    }),
  };
  const response = await fetch(
    "https://recruitment-test.ants.house/jsonrpc2/whawhai/v1",
    requestOptions
  );
  const data = await response.json();
  console.log(data);
};
