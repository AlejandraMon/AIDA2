const users = [
    {
        id: 1,
        email: 'user1@email.com',
        username: 'user1',
        password: 'password',
        userToken: 'token123'
    },
    {
        id: 2,
        email: 'user2@email.com',
        username: 'user2',
        password: 'pass1234',
        userToken: 'token12345'
    },
    {
        id: 3,
        email: 'testuser@email.com',
        username: 'testuser',
        password: 'testpass',
        userToken: 'testtoken'
    },
];

async function login({
  user,
  password
}) {
  const response = await fetch(`http://192.168.8.34/API/usuario/login.php?username=${user}&pass=${password}`)
  const responseJson = await response.json()
  console.log({ responseJson });
  return responseJson
}


export const UserService = {
  login
}
