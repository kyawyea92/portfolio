import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../firebase/firebaseAction";
import '@blocknote/mantine/style.css'
import '@blocknote/core/fonts/inter.css'

const blogsContent = [
  {
    order: 1,
    value: "Latest",
  },
  {
    order: 2,
    value: "Java",
  },
  {
    order: 1,
    value: "Spring Boot",
  },
];
export default function SideMenu() {
  const [blogContents, setBlogContent] = useState([]);
  useEffect(() => {
    getAllBlogs().then((data) => {
      Object.keys(data).forEach((key) => {
        let blogs = data[key];
        blogs["dataKey"] = key;
      });
      setBlogContent(Object.values(data));
    });
  }, []);
  const editor = (blogDetail) => {
    const blogDeatilParser = JSON.parse(blogDetail);
    var selectionList;
    if(blogDeatilParser[0]?.content[0]?.type==='text'){
       selectionList=blogDeatilParser[0]?.content[0]?.text
    }
    return selectionList ;
  };
  const readMoreText = <label className="text-cyan-500">Read More...</label>;
  const contents = () =>
    blogsContent.map((blog) => (
      <li key={blog.order}>
        <a
          href="#"
          class="flex items-center p-2 hover:underline text-gray-900 rounded-lg dark:text-white group"
        >
          <span class="ms-3">{blog.value}</span>
        </a>
      </li>
    ));
  return (
    <div className="flex">
      <aside
        id="default-sidebar"
        class="top-0 left-0 z-40 w-64 bg-slate-50 h-full transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto">
          <ul class="space-y-2 font-medium">{contents()}</ul>
        </div>
      </aside>

      <div class="container mx-auto px-6">
        <ul>
          { blogContents !== undefined && blogContents.map((data, key) => (
            <li key={key} className="text-left mb-4">
              <Link to={`/blogs/detail/${data.dataKey}`}>
                <label className="underline text-sky-600 text-2xl">
                  {data.title}
                </label>
                <p>
                  {
                    editor(data.blogDetail)
                  }
                </p>
                {data.blogDetail.length > 50 && readMoreText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
