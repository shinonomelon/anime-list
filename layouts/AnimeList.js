import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import api from "../api/api";
import { useSelector, useDispatch } from "react-redux";
import { yearCountAction, seasonCountAction } from "../redux/actions";
import Header from "../components/Header";
import styles from "./AnimeList.module.css";
import { FormControl, makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [year, setYear] = useState("2020");
  const [season, setSeason] = useState("1");

  const selectYear = useSelector((state) => state.year);
  const selectSeason = useSelector((state) => state.season);
  const dispatch = useDispatch();

  useEffect(async () => {
    const animeList = await api.getSeason(selectYear, selectSeason);
    setAnimeList(animeList.data);
  }, [selectYear, selectSeason]);

  const clickPeriod = () => {
    dispatch(yearCountAction({ year: year }));
    dispatch(seasonCountAction({ season: season }));
  };

  return (
    <>
      <Head>
        <title>アニメリスト</title>
      </Head>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <h3 style={{ fontWeight: "normal" }}>
            {selectYear}年/{selectSeason == "1" ? "冬" : undefined}
            {selectSeason == "2" ? "春" : undefined}
            {selectSeason == "3" ? "夏" : undefined}
            {selectSeason == "4" ? "秋" : undefined}
          </h3>
          <FormControl >
            <Select value={year} onChange={(e) => setYear(e.target.value)} >
              <MenuItem value="2014">2014</MenuItem>
              <MenuItem value="2015">2015</MenuItem>
              <MenuItem value="2016">2016</MenuItem>
              <MenuItem value="2017">2017</MenuItem>
              <MenuItem value="2018">2018</MenuItem>
              <MenuItem value="2019">2019</MenuItem>
              <MenuItem value="2020">2020</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
            </Select>
            <Select value={season} onChange={(e) => setSeason(e.target.value)}>
              <MenuItem value="1">冬</MenuItem>
              <MenuItem value="2">春</MenuItem>
              <MenuItem value="3">夏</MenuItem>
              <MenuItem value="4">秋</MenuItem>
            </Select>
            <Button
              variant="contained"
              color="primary"
              disabled={!year || !season}
              onClick={() => clickPeriod()}
            >
              検索
            </Button>
          </FormControl>
          <div>
            {animeList &&
              animeList.map((anime, index) => (
                <Link href={`/contents?id=${index}`} key={anime.id}>
                  <div className={styles.animeCard}>
                    <div className={styles.animeContent}>
                      <div className="name">
                        <h2>{anime.title}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeList;
