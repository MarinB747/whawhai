export const fetchWarriorData = async () => {
  const endpoint = `https://recruitment-test.ants.house/jsonrpc2/whawhai/v1`;
  const data = await (await fetch(endpoint)).json();
};
