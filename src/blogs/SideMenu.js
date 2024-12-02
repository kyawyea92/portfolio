import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../firebase/firebaseAction";
import '@blocknote/mantine/style.css'
import '@blocknote/core/fonts/inter.css'

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
  return (
    <div className="flex">
      <div class="container h-[calc(100vh-150px)] overflow-auto mx-auto px-6">
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
