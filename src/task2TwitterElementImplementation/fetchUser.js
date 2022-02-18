export default function fetchUser(userName) {
  const user = {
    id: '0',
    userName: userName,
    userLastName: `last ${userName}`
  }

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(user);
    }, 100)
  })
}