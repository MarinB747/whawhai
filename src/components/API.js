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
        id: "0f230b20-21d5-47bd-a8a2-d49f97433126",
      },
    }),
  };
  const response = await fetch(
    "https://recruitment-test.ants.house/jsonrpc2/whawhai/v1",
    requestOptions
  );
  const data = await response.json();
};
