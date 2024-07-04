import axios from "axios";
import type { ResResUserListResponse, User } from "../interfaces";
import { useEffect, useRef, useState } from "react";


export const loadUsers = async (page = 1): Promise<User[]> => {

  try {

    const { data } = await axios.get<ResResUserListResponse>('https://reqres.in/api/users', {
      params: {
        page: page
      }
    });

    return data.data;

  } catch (error) {
    return [];
  }


}
export const useUsers = () => {


  const [users, setUsers] = useState<User[]>([]);

  const currentPageRef = useRef(1);

  useEffect(() => {

    loadUsers(currentPageRef.current)
      .then(users => setUsers(users));

  }, [])


  const nextPage = async () => {

    currentPageRef.current++;

    const users = await loadUsers(currentPageRef.current);

    if (users.length > 0) {
      setUsers(users);
      return;
    }

    currentPageRef.current--;

  }

  const prevPage = async () => {

    if (currentPageRef.current < 1) return;

    currentPageRef.current--;

    const users = await loadUsers(currentPageRef.current);

    setUsers(users);
  }

  return {
    users,
    nextPage,
    prevPage
  }
}
