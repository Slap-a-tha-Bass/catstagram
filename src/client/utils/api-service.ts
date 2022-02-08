const apiService = async (uri: string, method: string = "GET", body?: {}) => {
  const headers: any = {};
  const options: any = {
    method,
    headers,
  };

  const token = localStorage.getItem("token");

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (method === "POST" || method === "PUT") {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }
  try {
    const res = await fetch(uri, options);

    if (res.status === 404) {
      throw new Error("Check uri and server path");
    }
    if (res.status === 401) {
      throw new Error("Check localstorage or check server endpoint");
    }
    if (res.status === 404) {
      throw new Error("Check uri and server path");
    }
    if (res.status === 500) {
      throw new Error("Check server terminal");
    }
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error(error);
  }
};

export default apiService;
