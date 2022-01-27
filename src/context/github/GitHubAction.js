export const searchUsers = async (text) => {
  const response = await fetch(`http://localhost:8000/search?q=${text}`);
  const { items } = await response.json();

  return items;
};

export const getUser = async (login) => {
  const response = await fetch(`https://api.github.com/users/${login}`);

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();

    return data;
  }
};

export const getRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const response = await fetch(
    `https://api.github.com/users/${login}/repos?${params}`
  );

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();

    return data;
  }
};
