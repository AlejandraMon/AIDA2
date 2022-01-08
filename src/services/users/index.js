const host = "http://192.168.8.34/API";

async function getFullData(id) {
  const response = await fetch(`${host}/usuario/consulta_id.php?iduser=${id}`)
  return await response.json()
}

async function login({
  user,
  password
}) {
  const response = await fetch(`${host}/usuario/login.php?username=${user}&pass=${password}`)

  const loginResponseJson = await response.json()
  const userId = loginResponseJson.iduser;

  const userWasFound = !!userId

  if (!userWasFound) return null;

  return await getFullData(userId)
}

async function getMedicData(id) {
  const response = await fetch(`${host}/manual/consult_iduser.php?iduser=${id}`);
  const data = await response.json();

  if (data?.Error) {
    throw new Error(data?.Error)
  }

  return data;
}

export const UserService = {
  login,
  getMedicData
}
