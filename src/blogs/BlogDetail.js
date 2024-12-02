import React, { Component, useEffect, useMemo, useState }  from 'react';
import { BlockNoteView } from '@blocknote/mantine';
import Review from "../reviews/Review";
import '@blocknote/mantine/style.css'
import '@blocknote/core/fonts/inter.css'
import {getBlogById} from '../firebase/firebaseAction'
import { BlockNoteEditor } from '@blocknote/core'
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
  const params = useParams(); 
  const [initialContent, setInitialContent] = useState('loading')
  const [blogTitle,setBlogTitle] = useState('');
  useEffect(() => {
    const blog = getBlogById(params.id)
   const  blogDetail = blog.then((data) =>{
    setBlogTitle(data.title)
    return JSON.parse(data.blogDetail)
   });
    blogDetail.then((content) => {
      setInitialContent(content)
    })
  }, [])
  const editor = useMemo(() => {
    if (initialContent === 'loading') {
      return undefined
    }
    return BlockNoteEditor.create({ initialContent })
  }, [initialContent])
  return (
    <div className="mx-auto w-full max-w-screen-xl p-1 lg:py-8 ">
      <div className='py-3'>
        <text className="text-3xl">{blogTitle}</text>
      </div>
      <div className="text-left">
      {
        editor !== undefined &&
        <BlockNoteView
        editor={editor}
        editable={false}
      />
      }
      </div>
      <Review />
    </div>
  );
}
