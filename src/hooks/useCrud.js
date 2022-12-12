import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import swal from 'sweetalert'

const useCrud = () => {

  const [users, setUsers] = useState()

  const getAllUsers = () => {
    const URL = `https://users-crud.academlo.tech/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const createNewUser = data => {
    const URL = `https://users-crud.academlo.tech/users/`
    axios.post(URL, data)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }

  const deleteUserById = (id) => {
    swal({
      title: "Delete User",
      text: "Are you sure?",
      icon: "warning",
      buttons: ["NO", "SI"]
    }).then(respuesta => {
      if (respuesta) {
        const URL = `https://users-crud.academlo.tech/users/${id}/`
        axios.delete(URL)
          .then(res => getAllUsers())
          .catch(err => crossOriginIsolated.log(err))
        swal({
          title: "User deleted",
          text: "Sorry, User deleted successfully",
          icon: "success",
          button: "Accept"

        })
      }
    })
  }

  const updateUserById = (id, data) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`
    axios.put(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  console.log(users)

  return {
    users,
    createNewUser,
    getAllUsers,
    deleteUserById,
    updateUserById
  }
}

export default useCrud