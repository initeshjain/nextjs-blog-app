import React from "react"
import styles from "./Hero.module.css"
import Link from "next/link"

export default function Hero() {
  return (
    <div className={styles.main_container}>
      <h1>Welcome to 🔥 tiktook.in blog</h1>
      <h4>Here you can find all curated articles across</h4>
      <Link href="/blogs">Check New Stuff !!</Link>
    </div>
  )
}