import { useContext,createContext } from "react"
import { AppStore } from "./Store/context"


export const ResultDiv=()=>{
  const{users,HandleDelete}=useContext(AppStore);
  return(
   <>

    <div className="overflow-x-auto">
    {users.length>0 ?
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">User ID</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">PostTitle</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">PostContent</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Reactions</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Hashtag</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 border-b border-gray-300">{user.IdRef}</td>
              <td className="px-6 py-4 border-b border-gray-300">{user.PostTitleRef}</td>
              <td className="px-6 py-4 border-b border-gray-300">{user.PostContentRef}</td>
              <td className="px-6 py-4 border-b border-gray-300">{user.ReactionRef}</td>
              <td className="px-6 py-4 border-b border-gray-300">{user.Hashtag}</td>
              <td className="px-6 py-4 border-b border-gray-300">
                
                <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={()=>HandleDelete(user.IdRef)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>:<h1 className="p-16 text-[2rem] font-bold">No post yet!!</h1>}
    </div>


   </>
  )
}