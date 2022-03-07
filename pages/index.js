import { useDispatch, useSelector } from "react-redux";
import { getSampleData } from "../store/actions/sampleAction";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const sampleListData = useSelector((state) => state.sampleData);
  const { sample } = sampleListData;
  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);
  return (
    <>
      <h3>{JSON.stringify(sample)}</h3>
    </>
  );
}
