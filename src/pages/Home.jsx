// import { useState, useEffect } from 'react';
// import axios from '../axios';

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     const res = await axios.get('posts/');
//     setPosts(res.data);
//   };

//   const handlePost = async () => {
//     const token = localStorage.getItem('access');
//     await axios.post('posts/', { content }, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//         }
//     );
//     setContent('');
//     fetchPosts();
//   };

//   return (
//     <div className="p-4">
//       <textarea value={content} onChange={e => setContent(e.target.value)} className="border w-full p-2" />
//       <button onClick={handlePost} className="bg-blue-600 text-white px-4 py-2 mt-2">Post</button>

//       <div className="mt-4">
//         {posts.map(post => (
//           <div key={post.id} className="border p-2 mb-2">
//             <strong>{post.user.username}</strong>
//             <p>{post.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect } from 'react';
// import axios from '../axios';

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     const res = await axios.get('posts/');
//     setPosts(res.data);
//   };

//   const handlePost = async () => {
//     const token = localStorage.getItem('access');
//     await axios.post('posts/', { content }, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     setContent('');
//     fetchPosts();
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-6 py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">🎉 Share Your Thoughts</h2>

//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-purple-100">
//         <textarea
//           value={content}
//           onChange={e => setContent(e.target.value)}
//           placeholder="What's on your mind?"
//           className="w-full h-28 border border-purple-200 rounded-lg p-4 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none placeholder:text-purple-400"
//         />

//         <button
//           onClick={handlePost}
//           className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition duration-200"
//         >
//           🚀 Post
//         </button>
//       </div>

//       <div className="mt-8">
//         <h3 className="text-2xl font-semibold text-purple-600 mb-4">📝 Recent Posts</h3>
//         {posts.length > 0 ? (
//           posts.map(post => (
//             <div key={post.id} className="bg-white shadow-md rounded-lg p-5 mb-5 border border-purple-100 hover:shadow-lg transition duration-200">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-medium">
//                   @{post.user.username}
//                 </div>
//               </div>
//               <p className="text-gray-700 leading-relaxed">{post.content}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-purple-400 italic">No posts yet. Be the first to share something!</p>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import axios from '../axios';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get('posts/');
    setPosts(res.data);
  };

  const handlePost = async () => {
    const token = localStorage.getItem('access');
    await axios.post('posts/', { content }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setContent('');
    fetchPosts();
  };

  return (
    <div className="bg-[#f3f2ef] min-h-screen text-gray-800 font-sans px-4 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left: Feed */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md border border-gray-300 mb-6 p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.pravatar.cc/50"
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="text-xl font-semibold text-blue-700">Welcome, Professional!</h1>
                <p className="text-sm text-gray-500">Ready to share your thoughts?</p>
              </div>
            </div>

            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Start a post..."
              className="w-full h-28 p-4 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />

            <button
              onClick={handlePost}
              className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition"
            >
              Post
            </button>
          </div>

          <h2 className="text-xl font-bold text-gray-700 mb-4">📰 Recent Posts</h2>

          {posts.length > 0 ? (
            posts.map(post => (
              <div
                key={post.id}
                className="bg-white p-5 rounded-lg mb-4 border border-gray-300 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={`https://ui-avatars.com/api/?name=${post.user.username}&background=0D8ABC&color=fff`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-800">@{post.user.username}</span>
                </div>
                <p className="text-gray-700">{post.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No posts yet. Be the first one to share your insight.</p>
          )}
        </div>

        {/* Right: Sidebar */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
          <h2 className="text-lg font-bold text-blue-700 mb-4">📈 Grow Your Network</h2>
          <ul className="text-sm text-gray-700 space-y-4">
            <li>✔️ Connect with people from your industry</li>
            <li>✔️ Share posts that show your expertise</li>
            <li>✔️ Stay updated with trends and tech</li>
            <li>✔️ Comment thoughtfully and consistently</li>
          </ul>

          <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-blue-700 font-semibold text-center">
              “Opportunities don’t happen. You create them.” – Chris Grosser
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-md font-semibold text-gray-800 mb-2">💼 Recommended Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Django', 'UI/UX', 'Teamwork'].map(skill => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
