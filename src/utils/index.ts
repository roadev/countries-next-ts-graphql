export const sleep = (time: number): Promise<any> =>
  new Promise((res) => setTimeout(res, time, 'done sleeping'));
