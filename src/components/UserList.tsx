import React, { useEffect, useState } from 'react';

interface User {
  ID: number;
  Company: string;
  Email: string;
  FirstNameLastName: string;
  JobTitle: string;
  Phone: number;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetch(`https://give-me-users-forever.vercel.app/api/users/${page}/next`)
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
      
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);

    if(arr[0] -1 !== 0){
        arr.pop();
        arr.unshift(arr[0] -1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
    if(page >= 10){
        arr.shift();
        arr.push(page+1);
    }
  };
  return (
    <div>
        
    <div className="container mx-auto py-8">
        <div className="overflow-x-auto">
            <table className="min-w-full bg-transparent border border-gray-200">
                <thead className="bg-transparent">
                    <tr className="text-white border">
                        <th className="py-2 px-4 border border-gray-200 text-left hover:bg-emerald-900">Name</th>
                        <th className="py-2 px-4 border border-gray-200 text-left hover:bg-emerald-900">Title</th>
                        <th className="py-2 px-4 border border-gray-200 text-left hover:bg-emerald-900">Company</th>
                        <th className="py-2 px-4 border border-gray-200 text-left hover:bg-emerald-900">Email</th>
                        <th className="py-2 px-4 border border-gray-200 text-left hover:bg-emerald-900">Phone</th>
                    </tr>
                </thead>
                {users.map((user) => (
                <tbody id="table-body" className="divide-y divide-gray-200">
                <tr className="border text-white">
                     <td className="border px-4 py-2 mg-5 hover:bg-emerald-900">{user.FirstNameLastName}</td>
                     <td className="border pl-4 hover:bg-emerald-900">{user.JobTitle}</td>
                     <td className="border pl-4 hover:bg-emerald-900">{user.Company}</td>
                     <td className="border pl-4 hover:bg-emerald-900">{user.Email}</td>
                     <td className="border pl-4 hover:bg-emerald-900">{user.Phone}</td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
    </div>
      <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 text-white border rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <div className="flex flex-wrap">
        {arr.map((item) => (
            
          <button
            key={item}
            onClick={() => setPage(item)}
            className={`px-4 py-2 mx-1 my-1 border text-white rounded ${page === item && 'bg-emerald-900'}`}
          >
            {item}
          </button>
        ))}
        </div>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-white border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
