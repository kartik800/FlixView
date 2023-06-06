import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTabs/SwitchTab";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");
    const {data, loading} = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");

    };
  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">What's Popular</span>
            <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel endpoint={endpoint} data={data?.results} loading={loading}/>

    </div>
  )
}

export default Popular