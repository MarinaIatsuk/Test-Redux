import { useSelector } from "react-redux" //хук, который отдает нам то, что лежит в редаксе


export default function User() {

    const {nameUser,email,phone,id}=useSelector(state=>state.user)//принимает всебя коллбэк ф-цию, которая должна нам что-то вернуть
    console.log(nameUser,email,phone,id);
  return (
    <div>
        <h1>{nameUser}</h1>
        <p>{email}</p>
        <p>{phone}</p>
    </div>
  )
}
