async function postData(url, data) {
  // const res = await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  //   body: data,
  // })

  // if (!res.ok) {
  //   throw new Error(`Coluldn't fetch url ${url}, status: ${res.status}`)
  // }

  // return await res.json()

  const res = await axios.post(url, data)

  // const res = await axios({
  //   method: 'post',
  //   url: url,
  //   data: data,
  // })

  return await res
}

// module.exports = server
export default postData
