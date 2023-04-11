import { useEffect } from "react";
import { Page } from "../style/style"
import axios from 'axios';
import {useQuery } from "react-query";


export const Dashboard =()=>{
    
    const { data:users, isLoading } = useQuery({
        queryKey: ["dashboard"],
        queryFn: () =>
          axios
            .get("https://random-data-api.com/api/v2/users?size=5")
            .then((res) => res.data)
      });
    
      if (isLoading) return <Page>Loading...</Page>


    return <Page>{users.map((user: { first_name: string; })=><div>{user.first_name}</div>)}</Page>
}