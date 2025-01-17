import Image from "next/image";
import styles from "./page.module.css";
import  Header from "../components/Header";
import Link from 'next/link'
import Auth from "../hooks/useAuth.ts";

export default function Home() {
  return (
    <>
    <Header />
    <Auth />
    </>
  );
}
