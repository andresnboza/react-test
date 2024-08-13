export const login = (username: string, password: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((u: any) => u.username === username && u.password === password);

      if (user) {
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("user", JSON.stringify(user));
        resolve(true);
      } else {
        resolve(false);
      }
    }, 3000); // Simulate a 2-second API delay
  });
};

export const register = (username: string, password: string, firstName: string, lastName: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // Check if user already exists
      if (users.find((u: any) => u.username === username)) {
        resolve(false); // Username already taken
      } else {
        const newUser = { username, password, firstName, lastName };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("user", JSON.stringify(newUser));
        resolve(true);
      }
    }, 2000); // Simulate a 2-second API delay
  });
};

export const logout = () => {
  localStorage.removeItem("authenticated");
  localStorage.removeItem("user");
};

export const isAuthenticated = () => {
  return localStorage.getItem("authenticated") === "true";
};
