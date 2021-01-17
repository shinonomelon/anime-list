import React, { useState, useEffect } from "react";
import Head from "next/head";
import api from "../api/api";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import styles from "./Content.module.css";

export default ({ id }) => {
  const [anime, setAnime] = useState("");

  const year = useSelector((state) => state.year);
  const season = useSelector((state) => state.season);

  useEffect(async () => {
    const animeList = await api.getSeason(year, season);
    const anime = animeList.data[id];
    setAnime(anime);
  }, []);
  const twitterUrl =
    "https://twitter.com/" + anime.twitter_account + "?ref_src=twsrc%5Etfw";
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{anime.title}</title>
      </Head>
      <Header />
      <div className={styles.contained}>
        <div className={styles.title}>
          <h1>{anime.title}</h1>
        </div>
        <div className={styles.animeContent}>
          <p>制作会社:  {anime.product_companies}</p>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            twitterをフォローする
          </a><br/>
          <a href={anime.public_url} target="_blank" rel="noopener noreferrer">
            公式ホームページを見る
          </a>
        </div>
      </div>
    </div>
  );
};
