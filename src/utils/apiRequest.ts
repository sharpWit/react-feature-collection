const apiRequest = async (
  url = "",
  optionsObj: RequestInit = {},
  errMsg: string = ""
) => {
  try {
    const res = await fetch(url, optionsObj);
    if (!res.ok) throw new Error("Please reload the app");
  } catch (error: unknown) {
    if (error instanceof Error) {
      errMsg = error.message;
    } else {
      return (errMsg = "An unknown error occurred!");
    }
  } finally {
    return errMsg;
  }
};

export default apiRequest;
