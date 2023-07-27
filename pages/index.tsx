import Head from "next/head";
// import Image from 'next/image'
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SECU | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <p className={styles.text}>
          In today&apos;s fast-paced world, waiting for acceptance in companies
          can be time-consuming and frustrating for aspiring software
          developers. To address this issue, we propose the creation of a
          Freelance Teamwork Hub, where software enthusiasts can collaborate,
          train, and gain real-world experience through simulated projects. By
          working on these &quot;fake&quot; projects, participants can develop
          their skills while freelancing, helping them become more employable
          and confident in their abilities. My teamwork community consisting of
          60+ developers divided into multiple teams working as full-stack web
          and mobile developers, the primary goal of this community is to
          encourage them to collaborate as a team and collectively create
          exciting projects it&apos;s not just about work, but also about having
          fun while doing it! As a junior software engineer, you can join our
          community now and be a part of this exciting initiative
        </p>

        <div className="dvBtn">
          <Link href="/ninja" className={styles.btn}>
            Team projects
          </Link>
       
        </div>
      </div>
    </>
  );
}
