const somethingWillHappend = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      reject('Ups!')
    }
  })
}

somethingWillHappend()
  .then(response => console.log(response))
  .catch(algo => console.error(algo))

const somethingWillHappend2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True')
      }, 2000)
    } else {
      const error = new Error('Woops!!!!')
      reject(error)
    }
  })
}

somethingWillHappend2()
  .then(response => console.log(response))
  .catch(err => console.error(err))

Promise.all([somethingWillHappend(), somethingWillHappend2()])
  .then(response => {
    console.log('Array of results', response)
  })
  .catch(err => {
    console.error(err)
  })