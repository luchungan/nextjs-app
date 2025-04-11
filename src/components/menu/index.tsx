import Link from "next/link"
import React from "react"
import styles from './index.module.scss'
import PostList from "../PostList"
const Menu = ()=>{
  const posts = [
    {slug:'aa',title:'aa'},
    {slug:'aa1',title:'aa1'},
    {slug:'aa2',title:'aa2'},
    {slug:'aa3',title:'aa3'},
  ]
  return <div className={styles.wrapper}>
    <Link className="text-black text-2xl"  href={'/about'} >about</Link>
    <Link href={'/'} >Home</Link>
    <Link href={'/blog'} >blog</Link>
    <Link href={'/cat/a'} >a</Link>
    <Link href={'/cat/b'} >b</Link>
    
    <PostList posts={posts} />
    
  </div>
  
}

export default Menu