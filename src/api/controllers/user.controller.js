let dummyDataUser = [
  {
    id: 1,
    name: 'ABC'
  },
  {
    id: 2,
    name: 'DEF'
  },
  {
    id: 3,
    name: 'GHJ'
  }
]

exports.list = (req, res) => {
  res.json(dummyDataUser)
}

exports.get = (req, res) => {
  const { id } = req.params

  const user = dummyDataUser.find((user) => user.id === +id)

  if (!user) {
    return res.status(404).json({ message: 'User not found!' })
  }

  res.json(user)
}

exports.create = (req, res) => {
  const { name } = req.body

  //validate
  if (name === '') {
    return res.status(400).json({ message: 'Name is required!' })
  }

  const isExistedUser = dummyDataUser.find((user) => user.name === name)
  if (isExistedUser) {
    return res.status(400).json({ message: 'User is existed!' })
  }

  const newUser = {
    id: dummyDataUser.length + 1,
    name
  }
  dummyDataUser.push(newUser)

  res.status(201).json(newUser)
}

exports.update = (req, res) => {
  const { name } = req.body

  if (name === '') {
    return res.status(400).json({ message: 'Name is required!' })
  }

  const user = dummyDataUser.find((user) => user.id === +req.params.id)

  if (!user) {
    return res.status(404).json({ message: 'User not found.' })
  }

  user.name = name

  res.json({ message: 'User updated successfully.', user })
}

exports.remove = (req, res) => {
  const userIndex = dummyDataUser.findIndex(
    (user) => user.id === +req.params.id
  )
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found.' })
  }

  dummyDataUser.splice(userIndex, 1)

  res.json({ message: 'User deleted successfully.' })
}
