import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NextSeo, JsonLd } from 'next-seo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Delicious Recipes"
        description="A food blog with easy and tasty recipes for everyone"
        canonical="https://delicious-recipes.com/"
        openGraph={{
          url: "https://delicious-recipes.com/",
          title: "Delicious Recipes",
          description: "A food blog with easy and tasty recipes for everyone",
          images: [
            {
              url: "https://delicious-recipes.com/images/chocolate-cake.jpg",
              width: 300,
              height: 200,
              alt: "Chocolate cake",
            },
            {
              url: "https://delicious-recipes.com/images/veggie-burger.jpg",
              width: 300,
              height: 200,
              alt: "Veggie burger",
            },
            // More images...
          ],
          site_name: "Delicious Recipes",
        }}
        twitter={{
          handle: "@delicious_recipes",
          site: "@delicious_recipes",
          cardType: "summary_large_image",
        }}
      />
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Delicious Recipes",
          url: "https://delicious-recipes.com/",
          description: "A food blog with easy and tasty recipes for everyone",
          author: {
            "@type": "Person",
            name: "Jane Doe",
          },
        }}
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Delicious Recipes
        </h1>

        <p className={styles.description}>
          A food blog with easy and tasty recipes for everyone
        </p>

        <div className={styles.grid}>
          <a href="/posts/chocolate-cake" className={styles.card}>
            <Image src="/images/chocolate-cake.jpg" alt="Chocolate cake" width={300} height={200} />
            <h2>Chocolate Cake →</h2>
            <p>A moist and decadent chocolate cake with creamy frosting and fresh berries</p>
          </a>

          <a href="/posts/veggie-burger" className={styles.card}>
            <Image src="/images/veggie-burger.jpg" alt="Veggie burger" width={300} height={200} />
            <h2>Veggie Burger →</h2>
            <p>A satisfying and flavorful veggie burger with avocado, lettuce, tomato and onion</p>
          </a>

          <a href="/posts/banana-bread" className={styles.card}>
            <Image src="/images/banana-bread.jpg" alt="Banana bread" width={300} height={200} />
            <h2>Banana Bread →</h2>
            <p>A moist and delicious banana bread with walnuts and chocolate chips</p>
          </a>

          <a href="/posts/salmon-salad" className={styles.card}>
            <Image src="/images/salmon-salad.jpg" alt="Salmon salad" width={300} height={200} />
            <h2>Salmon Salad →</h2>
            <p>A fresh and healthy salad with grilled salmon, spinach, cherry tomatoes and feta cheese</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2023 Delicious Recipes. All rights reserved.</p>
      </footer>
    </div>
  )
}
