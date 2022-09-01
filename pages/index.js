import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "../component/Task";
import Page from "../nextjs/nextFutureImage";
import { decrement, increment } from "../redux/feature/counterSlice";
import { readTask } from "../redux/feature/taskSlice";
import { wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      Next js
      <div>
        <Task />
        {/* <Page /> */}
      </div>
    </div>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (req, res) => {
    // await store.dispatch(increment());
    // await store.dispatch(decrement());
    await store.dispatch(readTask({ req, res }));
    return {
      props: {},
    };
  }
);
